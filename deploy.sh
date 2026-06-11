#!/usr/bin/env bash
# Push this site to GitHub (gh) and deploy it on Vercel (Vercel CLI),
# then link the repo so future `git push` auto-deploys.
#
# Prereqs (one-time):
#   npm i -g vercel
#   gh auth login        # GitHub
#   vercel login         # Vercel
#
# Run from inside the project folder:
#   bash deploy.sh                 # repo defaults to "ishaan-portfolio"
#   bash deploy.sh my-repo-name
set -euo pipefail

REPO_NAME="${1:-ishaan-portfolio}"

# ---- preflight ----
command -v git    >/dev/null || { echo "git not installed."; exit 1; }
command -v gh     >/dev/null || { echo "GitHub CLI (gh) not installed -> https://cli.github.com"; exit 1; }
command -v vercel >/dev/null || { echo "Vercel CLI not installed. Run: npm i -g vercel"; exit 1; }
gh auth status >/dev/null 2>&1 || { echo "Not logged into GitHub. Run: gh auth login"; exit 1; }
vercel whoami  >/dev/null 2>&1 || { echo "Not logged into Vercel. Run: vercel login"; exit 1; }

# ---- identity from gh ----
OWNER=$(gh api user --jq .login)
NAME=$(gh api user --jq '.name // empty');  [ -z "$NAME" ]  && NAME="$OWNER"
EMAIL=$(gh api user --jq '.email // empty'); UID_=$(gh api user --jq .id)
[ -z "$EMAIL" ] && EMAIL="${UID_}+${OWNER}@users.noreply.github.com"
echo "GitHub : $NAME <$EMAIL> (@$OWNER)  ->  $OWNER/$REPO_NAME"
echo

# ---- 1) push to GitHub ----
[ -f .gitignore ] || printf "node_modules/\n.next/\nout/\n.DS_Store\n" > .gitignore
git init -q
git config user.name  "$NAME"
git config user.email "$EMAIL"
git add -A
git commit -qm "Personal research portfolio" || echo "(nothing new to commit)"
git branch -M main
if gh repo view "$OWNER/$REPO_NAME" >/dev/null 2>&1; then
  echo "Repo exists -> reusing."
else
  gh repo create "$REPO_NAME" --public --description "Personal research portfolio" >/dev/null
  echo "Created github.com/$OWNER/$REPO_NAME"
fi
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$OWNER/$REPO_NAME.git"
git push -u origin main

# ---- 2) deploy on Vercel, then connect the repo for auto-deploys ----
echo
echo "Deploying to Vercel..."
vercel --prod --yes
vercel git connect --yes 2>/dev/null || echo "Tip: run 'vercel git connect' once to enable auto-deploy on push."

echo
echo "Done."
echo "Code : https://github.com/$OWNER/$REPO_NAME"
echo "Live : the Production URL printed just above. Future 'git push' redeploys automatically."
