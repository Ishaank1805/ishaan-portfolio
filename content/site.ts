// ============================================================
// Single source of truth. All REAL content from Ishaan's
// resume + GitHub. Edit here; the UI is generated from this.
// ============================================================

export const profile = {
  name: "Ishaan Karan",
  role: "NLP & Interpretability Researcher",
  email: "ishaan.karan@research.iiit.ac.in",
  phone: "+91 7815889330",
  github: "https://github.com/Ishaank1805",
  linkedin: "https://www.linkedin.com/in/ishaan-karan-16432a2a7",
  avatar: "https://avatars.githubusercontent.com/u/156496787?v=4",
  resume: "/resume.pdf",
  location: "Hyderabad, India",
  lab: "Language Technologies Research Centre, IIIT Hyderabad",
};

export const navItems = [
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "coursework", label: "Coursework" },
  { id: "timeline", label: "Timeline" },
  { id: "achievements", label: "Achievements" },
  { id: "extracurricular", label: "Extracurricular" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export type Domain = "interp" | "systems" | "nlp";
export const domainLabel: Record<Domain, string> = {
  interp: "Interpretability", systems: "Systems", nlp: "NLP",
};

export const researchAreas: { num: string; title: string; body: string; tags: string[] }[] = [
  {
    num: "01",
    title: "Salience in long-form narrative",
    body: "What makes one scene in a screenplay, or one passage in a long document, matter more than the rest? News has easy cues like lead bias; long-form fiction has none, so the signal is spread thinly across thousands of tokens. I study this with interpretable, linguistically-grounded models, asking which cues actually carry the signal (pacing, character focus, discourse structure) rather than trusting opaque embeddings to find them on their own.",
    tags: ["saliency", "summarization", "discourse", "long documents"],
  },
  {
    num: "02",
    title: "Conspiracy markers and span extraction",
    body: "Pulling structured spans out of text and modelling how their labels depend on each other. For conspiracy-marker extraction I built attention over the markers themselves and a regularizer that keeps the model from collapsing onto one easy prediction. The broader interest is span-level structure: where a phenomenon starts and stops in a sentence, and why.",
    tags: ["span extraction", "attention", "social media text"],
  },
  {
    num: "03",
    title: "Efficient dense retrieval",
    body: "Most embeddings spend the same number of dimensions on every query, which is wasteful. I work on retrieval that routes each query to the dimensions it actually needs, holding accuracy while cutting cost. This is the more applied side of what I do.",
    tags: ["dense retrieval", "embeddings", "efficiency"],
  },
];

export const publications: {
  title: string; venue: string; status: string; statusKind: "accepted" | "review";
  summary: string; tags: string[]; metric?: { value: string; label: string };
}[] = [
  {
    title: "Saliency in long-form narrative",
    venue: "Under review · ARR",
    status: "under review",
    statusKind: "review",
    summary:
      "An interpretability project on what makes individual scenes matter in long-form narrative, pairing neural representations with explicit linguistic features. Title and detailed results are withheld while the paper is under anonymous review.",
    tags: ["saliency", "long-form narrative", "interpretability"],
  },
  {
    title: "Span-Consistency Network for Conspiracy Marker Extraction",
    venue: "SemEval-2026 Task 10 · @ ACL 2026",
    status: "2nd place",
    statusKind: "accepted",
    summary:
      "A span-extraction architecture with Cross-Marker Attention to model inter-label dependencies, plus a custom regularization loss that prevents prediction collapse.",
    tags: ["span extraction", "attention", "regularization"],
    metric: { value: "2nd", label: "of all teams · Task 10" },
  },
  {
    title: "Efficient dense retrieval",
    venue: "Under review · ARR",
    status: "under review",
    statusKind: "review",
    summary:
      "A method for dense retrieval that adapts how many embedding dimensions each query uses, cutting cost while holding accuracy. Title and detailed results are withheld while the paper is under anonymous review.",
    tags: ["dense retrieval", "embeddings"],
  },
];

export const experience: {
  role: string; org: string; period: string; body: string; tags: string[];
}[] = [
  {
    role: "Undergraduate Researcher",
    org: "Language Technologies Research Centre, IIIT Hyderabad",
    period: "May 2025 - Present",
    body: "Building deep-learning models for long-document understanding under Dr. Rajakrishnan Rajkumar: saliency detection, summarization, and span extraction across narratives and social-media text.",
    tags: ["PyTorch", "NLP", "research"],
  },
  {
    role: "Software Engineer Intern",
    org: "Automaxis",
    period: "Jan 2025 - Apr 2025",
    body: "Built a decentralized system for Certificates of Origin using Algorand NFTs, Pinata IPFS, Node.js APIs, and MongoDB, with real-time tracking and role-based workflows.",
    tags: ["Node.js", "Algorand", "MongoDB", "IPFS"],
  },
];

export const projects: {
  idx: string; title: string; domain: Domain; period: string; tech: string[];
  lede: string; bullets: string[]; repo: string;
}[] = [
  {
    idx: "P-01", title: "The Cross-Modal Safety Gap", domain: "interp", period: "Jan - Apr 2026",
    tech: ["Python", "PyTorch", "Sparse Autoencoders"],
    lede: "Why do aligned multimodal LLMs refuse harmful text but comply with the same request as an image or audio clip?",
    bullets: [
      "Trained sparse autoencoders on two 7B models to isolate ~50 safety features (0.3% of all features) that fire on harmful text but never on non-text inputs.",
      "Localized the safety circuit to layers 12-13 via three independent methods, and showed text and non-text representations are near-orthogonal, bounding what inference-time defenses can achieve.",
    ],
    repo: "https://github.com/Ishaank1805/modality-safety-gap",
  },
  {
    idx: "P-02", title: "Distributed Document Collaboration System", domain: "systems", period: "Nov 2025",
    tech: ["C", "TCP Sockets", "POSIX"],
    lede: "A multi-user document system with a central name server brokering high-throughput reads, writes, and streaming across storage servers.",
    bullets: [
      "Central name server coordinates multiple storage servers and concurrent clients, routing requests and brokering direct client-server connections for throughput.",
      "Sentence-level locking for concurrent editing, owner-controlled access, durable persistence of files and metadata, and fast lookup via indexed search with LRU caching.",
    ],
    repo: "https://github.com/Ishaank1805/distributed-file-system",
  },
  {
    idx: "P-03", title: "Sparse Mixture-of-Experts for Extreme Summarization", domain: "nlp", period: "Nov 2025",
    tech: ["Python", "PyTorch", "LoRA"],
    lede: "A sparse Mixture-of-Experts Transformer built from scratch for extreme summarization on XSum.",
    bullets: [
      "Grouped-Query Attention, two routing strategies (hash and top-k token-choice), and a load balancer with an auxiliary balancing loss.",
      "LoRA-based experts implemented from scratch; benchmarked against BART, fine-tuned T5, and an instruction-tuned LLaMA on ROUGE, BERTScore, and factuality.",
    ],
    repo: "https://github.com/Ishaank1805/moe-xsum",
  },
  {
    idx: "P-04", title: "Custom C Shell", domain: "systems", period: "Aug 2025",
    tech: ["C", "POSIX"],
    lede: "A POSIX-compliant Unix shell in C with a recursive-descent parser validating commands against a context-free grammar.",
    bullets: [
      "Built-ins for navigation, listing, and cross-session command history; modular multi-file architecture.",
      "External execution, I/O redirection, multi-stage pipelines, background jobs, and signal-based process management with full job control.",
    ],
    repo: "https://github.com/Ishaank1805/custom-unix-shell",
  },
];

export type SkillCat = "lang" | "ml" | "nlp" | "data" | "sys";
export const skillFilters: { f: SkillCat | "all"; label: string }[] = [
  { f: "all", label: "All" },
  { f: "lang", label: "Languages" },
  { f: "ml", label: "ML / DL" },
  { f: "nlp", label: "NLP" },
  { f: "data", label: "Data" },
  { f: "sys", label: "Systems & Web" },
];
export const skills: { name: string; cat: SkillCat }[] = [
  { name: "Python", cat: "lang" }, { name: "C / C++", cat: "lang" }, { name: "JavaScript", cat: "lang" },
  { name: "SQL", cat: "lang" }, { name: "Bash", cat: "lang" },
  { name: "PyTorch", cat: "ml" }, { name: "Hugging Face", cat: "ml" }, { name: "PEFT / LoRA", cat: "ml" },
  { name: "CUDA", cat: "ml" }, { name: "scikit-learn", cat: "ml" }, { name: "Weights & Biases", cat: "ml" }, { name: "SHAP", cat: "ml" },
  { name: "spaCy", cat: "nlp" }, { name: "NLTK", cat: "nlp" }, { name: "Transformers", cat: "nlp" },
  { name: "NumPy", cat: "data" }, { name: "Pandas", cat: "data" }, { name: "Matplotlib", cat: "data" },
  { name: "React.js", cat: "sys" }, { name: "Node.js", cat: "sys" }, { name: "MongoDB", cat: "sys" },
  { name: "Git", cat: "sys" }, { name: "Linux", cat: "sys" }, { name: "POSIX", cat: "sys" }, { name: "TCP Sockets", cat: "sys" },
];

export const timeline: {
  yr: string; title: string; org: string; body: string; key?: boolean;
}[] = [
  { yr: "2025 - present", title: "Undergraduate Researcher", org: "Language Technologies Research Centre · IIIT Hyderabad", body: "Long-document understanding under Dr. Rajakrishnan Rajkumar: saliency, summarization, and span extraction.", key: true },
  { yr: "2025", title: "Software Engineer Intern", org: "Automaxis", body: "Decentralized Certificates of Origin on Algorand NFTs and IPFS, with Node.js APIs and MongoDB." },
  { yr: "2023 - 2028", title: "BTech CS + MS Computational Linguistics", org: "IIIT Hyderabad · CGPA 7.50", body: "A five-year dual degree combining computer science with computational linguistics.", key: true },
  { yr: "2021 - 2023", title: "A-Levels", org: "Whitmore High School, London", body: "Further Mathematics A*, Mathematics A*, Physics A, Chemistry A." },
];

export const aboutFacts = [
  { lab: "Based", val: "Hyderabad, India" },
  { lab: "Lab", val: "LTRC, IIIT-H" },
  { lab: "Advisor", val: "Dr. Rajakrishnan Rajkumar" },
  { lab: "Focus", val: "Natural Language Processing" },
];

export const courseGroups: { area: string; items: string[] }[] = [
  {
    area: "NLP & Computational Linguistics",
    items: ["Advanced NLP", "Introduction to NLP", "Evaluation Methods for NLP", "Applications of Language Models", "NLP for Healthcare", "Computational Linguistics I", "Computational Semantics & Discourse Parsing", "Computational Psycholinguistics", "Language Typology & Universals", "Language & Society", "Introduction to Linguistics I & II"],
  },
  {
    area: "Machine Learning & AI",
    items: ["Machine, Data and Learning", "Responsible & Safe AI Systems", "Digital Signal Analysis"],
  },
  {
    area: "Computer Science & Systems",
    items: ["Data Structures & Algorithms", "Design & Analysis of Algorithms", "Automata Theory", "Operating Systems & Networks", "Design & Analysis of Software Systems", "Introduction to Software Systems", "Computer Systems Organization", "Computer Programming"],
  },
  {
    area: "Mathematics",
    items: ["Discrete Structures", "Linear Algebra", "Probability & Statistics"],
  },
  {
    area: "Research & Independent Study",
    items: ["CL Honours Project I & II", "UG Independent Study", "CL Summer Project"],
  },
];

export const achievements: { title: string; detail: string; desc: string }[] = [
  { title: "British Mathematical Olympiad (BMO1)", detail: "Merit Award", desc: "A national round of the UK Mathematics Trust olympiad series, sat after the Senior Mathematical Challenge: six proof-based problems over three and a half hours." },
  { title: "NTSE Stage 1", detail: "State Rank 16", desc: "India's national scholarship examination, run by NCERT to identify academically talented students nationwide. Stage 1 is the state-level round." },
  { title: "IOQM", detail: "Top 300 in state", desc: "The first, nationwide stage of India's Mathematical Olympiad programme, the qualifier on the path to the Indian National Mathematical Olympiad (INMO)." },
];

export const extracurricular: { role: string; org: string; period: string; body: string }[] = [
  {
    role: "Sports Captain",
    org: "IIIT Hyderabad",
    period: "Aug 2025 - May 2026",
    body: "Organized sports across the institute, from inter-batch and inter-house competitions to Night Cricket and the annual IIIT Run, and scheduled and managed intercollege tournaments end to end, handling venues, fixtures, and live coordination.",
  },
  {
    role: "Volunteer",
    org: "Mind",
    period: "Nov 2021 - Jul 2022",
    body: "Volunteered at a charity shop for Mind, the UK mental health charity, helping run the shop day to day: sorting and pricing donated stock, serving customers, and keeping the floor and displays in order. The shop's takings support Mind's mental health services.",
  },
  {
    role: "Volunteer",
    org: "EasyA",
    period: "Jun 2022 - Aug 2022",
    body: "Volunteered as a mathematics tutor with EasyA, helping children from underprivileged backgrounds work through core maths. Sessions centred on the fundamentals and on building confidence with the subject, adapting to where each student was struggling.",
  },
];
