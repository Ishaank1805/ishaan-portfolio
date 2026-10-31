// ============================================================
// Single source of truth for the portfolio.
// Content is aligned with Ishaan's November 2026 resume.
// ============================================================

export const profile = {
  name: "Ishaan Karan",
  role: "NLP & Interpretability Researcher",
  email: "Ishaan.karan@research.iiit.ac.in",
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

export type Domain = "interp" | "systems" | "nlp" | "web";
export const domainLabel: Record<Domain, string> = {
  interp: "Interpretability", systems: "Systems", nlp: "NLP", web: "Web",
};

export const researchAreas: { num: string; title: string; body: string; tags: string[] }[] = [
  {
    num: "01",
    title: "Salience in long-form narrative",
    body: "I study what makes particular scenes in a screenplay salient and how those signals can support downstream summarization. My work combines contextual representations with linguistically grounded signals, with an emphasis on interpretable models of narrative structure.",
    tags: ["scene saliency", "long-form narrative", "interpretability", "summarization"],
  },
  {
    num: "02",
    title: "Harmful discourse and span extraction",
    body: "I work on extracting structured spans from social-media text and modelling dependencies between labels. This includes conspiracy-marker extraction, where Cross-Marker Attention and a regularization objective help capture inter-label relationships without prediction collapse.",
    tags: ["span extraction", "social media", "attention", "robust learning"],
  },
  {
    num: "03",
    title: "Efficient information retrieval",
    body: "I explore query-adaptive dense retrieval: selecting the embedding dimensions that matter for each query rather than applying a fixed compression rule to every query. The goal is to retain retrieval quality while using substantially fewer dimensions.",
    tags: ["dense retrieval", "embeddings", "FAISS", "efficiency"],
  },
  {
    num: "04",
    title: "Mechanistic interpretability of multimodal models",
    body: "I use mechanistic interpretability tools to investigate how safety-related representations differ across text, image, and audio inputs in multimodal language models, and what those differences imply for inference-time defenses.",
    tags: ["mechanistic interpretability", "multimodal LLMs", "sparse autoencoders"],
  },
];

export const publications: {
  title: string; venue: string; status: string; statusKind: "accepted" | "review";
  summary: string; tags: string[]; metric?: { value: string; label: string };
}[] = [
  {
    title: "Linguistically-Grounded Scene Saliency in Movie Screenplays",
    venue: "EMNLP 2026 Main Conference · Oral · CORE A*",
    status: "accepted",
    statusKind: "accepted",
    summary: "Co-first-author work proposing the Linguistically-Grounded Saliency Model (LGSM), a dual-stream neural architecture with adaptive feature fusion and contextual sequence modeling. Improved salient-scene recall by 16.8 points and downstream summarization by +3.67 ROUGE-1.",
    tags: ["scene saliency", "linguistic features", "long-form narrative"],
    metric: { value: "+16.8", label: "points in salient-scene recall" },
  },
  {
    title: "Span-Consistency Network for Conspiracy Marker Extraction",
    venue: "SemEval 2026 · @ ACL 2026 · Task 10",
    status: "2nd place",
    statusKind: "accepted",
    summary: "First-author work introducing a span extraction architecture with Cross-Marker Attention to model inter-label dependencies and a custom regularization loss to prevent prediction collapse. The system ranked second in SemEval 2026 Task 10.",
    tags: ["conspiracy markers", "span extraction", "Cross-Marker Attention"],
    metric: { value: "2nd", label: "place · SemEval Task 10" },
  },
];

export const experience: {
  role: string; org: string; period: string; body: string; tags: string[];
}[] = [
  {
    role: "Undergraduate Researcher",
    org: "Language Technologies Research Centre, IIIT Hyderabad",
    period: "May 2025 - Present",
    body: "Research interpretable deep learning for long-document understanding, social media analysis, information retrieval, and large language models, advised by Dr. Rajakrishnan Rajkumar. Published an oral paper at EMNLP 2026 Main Conference on scene saliency in movie screenplays and a SemEval @ ACL 2026 paper whose conspiracy-marker extraction system ranked second in Task 10.",
    tags: ["PyTorch", "NLP", "interpretability", "information retrieval", "LLMs"],
  },
  {
    role: "Software Engineer Intern",
    org: "Automaxis",
    period: "Jan 2025 - Apr 2025",
    body: "Built a blockchain-backed verification platform for Certificates of Origin using Algorand NFTs and IPFS, enabling provenance validation in under 2 seconds and reducing manual verification effort by approximately 90%. Developed a real-time document lifecycle tracking system with WebSockets, role-based access control, and audit trails, tracking 100+ certificates across four stakeholder groups.",
    tags: ["Algorand", "IPFS", "WebSockets", "access control"],
  },
];

export const projects: {
  idx: string; title: string; domain: Domain; period: string; tech: string[];
  lede: string; bullets: string[]; repo: string; live?: string;
}[] = [
  {
    idx: "P-01", title: "Bloom-Aligned Query Dimension Routing", domain: "nlp", period: "Jan - May 2026",
    tech: ["PyTorch", "FAISS", "Dense Retrieval"],
    lede: "A query-adaptive dense-retrieval method that selects a task-relevant subset of embedding dimensions for each query.",
    bullets: [
      "Designed a learned query-conditioned mask head trained end-to-end with a Gumbel straight-through estimator across five backbones.",
      "Raised Recall@10 by 3.1–6.3 points over strong compression baselines while using only 25–43% of embedding dimensions.",
    ],
    repo: "https://github.com/Ishaank1805",
  },
  {
    idx: "P-02", title: "The Cross-Modal Safety Gap", domain: "interp", period: "Jan - Apr 2026",
    tech: ["PyTorch", "Mechanistic Interpretability", "Sparse Autoencoders"],
    lede: "Investigating why aligned multimodal LLMs can refuse harmful text yet comply with equivalent image or audio inputs.",
    bullets: [
      "Trained sparse autoencoders on two 7B models to isolate approximately 50 text-only safety features (0.3%).",
      "Localized the safety circuit to layers 12–13 and showed that text and non-text representations are near-orthogonal, bounding potential inference-time defenses.",
    ],
    repo: "https://github.com/Ishaank1805",
  },
  {
    idx: "P-03", title: "Mixture-of-Experts Transformer for Summarization", domain: "nlp", period: "Nov 2025",
    tech: ["PyTorch", "Hugging Face", "LoRA"],
    lede: "An MoE Transformer implemented from scratch for extreme summarization on the XSum benchmark.",
    bullets: [
      "Implemented top-k token routing and expert load balancing, reaching 32.2 ROUGE-1 and improving over hash routing by 2.8 points.",
      "Added from-scratch Grouped-Query Attention and shared-base LoRA experts, reaching near-parity quality with approximately 30–40% fewer expert parameters.",
    ],
    repo: "https://github.com/Ishaank1805",
  },
  {
    idx: "P-04", title: "Backdoor Attacks & Model Repair", domain: "interp", period: "Apr 2026",
    tech: ["PyTorch", "scikit-learn", "FastICA", "ResNet-18"],
    lede: "A data-poisoning and model-repair pipeline studying activation clustering as a defense against backdoor attacks.",
    bullets: [
      "Built a CIFAR-10 poisoning pipeline with ResNet-18 where a BadNets-style backdoor reached 98.5% attack success rate.",
      "Applied Activation Clustering (FastICA + k-means), reducing attack success to 1.2% while preserving clean accuracy.",
    ],
    repo: "https://github.com/Ishaank1805/activation-clustering-for-backdoor-detection",
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
  { name: "Python", cat: "lang" }, { name: "C / C++", cat: "lang" }, { name: "Go", cat: "lang" },
  { name: "JavaScript", cat: "lang" }, { name: "SQL", cat: "lang" }, { name: "Bash", cat: "lang" },
  { name: "PyTorch", cat: "ml" }, { name: "Hugging Face Transformers", cat: "ml" }, { name: "PEFT / LoRA", cat: "ml" },
  { name: "CUDA", cat: "ml" }, { name: "scikit-learn", cat: "ml" }, { name: "SHAP", cat: "ml" },
  { name: "Weights & Biases", cat: "ml" }, { name: "Jupyter", cat: "ml" },
  { name: "spaCy", cat: "nlp" }, { name: "NLTK", cat: "nlp" }, { name: "Gensim", cat: "nlp" },
  { name: "NumPy", cat: "data" }, { name: "Pandas", cat: "data" }, { name: "SciPy", cat: "data" }, { name: "Matplotlib", cat: "data" },
  { name: "React.js", cat: "sys" }, { name: "Node.js", cat: "sys" }, { name: "Express.js", cat: "sys" },
  { name: "HTML5", cat: "sys" }, { name: "CSS3", cat: "sys" }, { name: "MongoDB", cat: "sys" },
  { name: "Socket.IO", cat: "sys" }, { name: "REST APIs", cat: "sys" }, { name: "gRPC", cat: "sys" },
  { name: "Protocol Buffers", cat: "sys" }, { name: "Git", cat: "sys" }, { name: "Linux", cat: "sys" },
  { name: "Docker", cat: "sys" }, { name: "IPFS", cat: "sys" }, { name: "Algorand", cat: "sys" },
  { name: "Vercel", cat: "sys" }, { name: "Render", cat: "sys" }, { name: "Gemini API", cat: "sys" },
];

export const timeline: {
  yr: string; title: string; org: string; body: string; key?: boolean;
}[] = [
  { yr: "May 2025 - present", title: "Undergraduate Researcher", org: "Language Technologies Research Centre · IIIT Hyderabad", body: "Research on interpretable deep learning for long-document understanding, social media analysis, information retrieval, and large language models.", key: true },
  { yr: "Jan - Apr 2025", title: "Software Engineer Intern", org: "Automaxis", body: "Built blockchain-backed certificate verification and real-time document lifecycle tracking systems." },
  { yr: "Aug 2023 - May 2028", title: "BTech Computer Science + MS Computational Linguistics", org: "International Institute of Information Technology, Hyderabad", body: "Dual-degree programme. Dean’s List I (Monsoon 2025, top 5%) and Dean’s Research List (Spring 2026).", key: true },
];

export const aboutFacts = [
  { lab: "Based", val: "Hyderabad, India" },
  { lab: "Lab", val: "LTRC, IIIT Hyderabad" },
  { lab: "Advisor", val: "Dr. Rajakrishnan Rajkumar" },
  { lab: "Focus", val: "NLP & interpretability" },
];

export const courseGroups: { area: string; items: string[] }[] = [
  {
    area: "NLP & Computational Linguistics",
    items: ["Advanced NLP", "Applications of Language Models", "Computational Linguistics 2"],
  },
  {
    area: "Machine Learning & AI",
    items: ["Responsible and Safe AI Systems"],
  },
  {
    area: "Computer Science & Systems",
    items: ["Data Structures & Algorithms", "Design and Analysis of Algorithms", "Operating Systems & Networks", "Design & Analysis of Software Systems"],
  },
];

export const achievements: { title: string; detail: string; desc: string }[] = [
  { title: "Dean’s List I", detail: "Top 5% · Monsoon 2025", desc: "Academic distinction awarded at IIIT Hyderabad." },
  { title: "Dean’s Research List", detail: "Spring 2026", desc: "Research distinction awarded at IIIT Hyderabad." },
  { title: "Amazon Machine Learning Summer School 2026", detail: "Selected among 3,000", desc: "Selected from more than 130,000 applicants." },
  { title: "British Mathematical Olympiad (BMO1)", detail: "Merit Award", desc: "Recognition in the British Mathematical Olympiad." },
  { title: "NTSE Stage 1", detail: "State Rank 16", desc: "State-level rank in the National Talent Search Examination." },
  { title: "IOQM", detail: "Top 300 in state", desc: "Among the top 300 students in the state in the Indian Olympiad Qualifier in Mathematics." },
];

export const extracurricular: { role: string; org: string; period: string; body: string }[] = [
  {
    role: "Teaching Assistant",
    org: "Computational Linguistics 2 · IIIT Hyderabad",
    period: "Aug 2026 - Present",
    body: "Led tutorials and graded assignments. Held office hours to help students work through course concepts.",
  },
  {
    role: "Sports Captain",
    org: "IIIT Hyderabad",
    period: "Aug 2025 - May 2026",
    body: "Organized institute-wide sporting events, including the IIIT Run, Night Cricket, and intercollegiate tournaments, serving 2,000+ participants and 20+ college teams through end-to-end event management.",
  },
];
