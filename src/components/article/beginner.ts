export type BeginnerDossier = {
  beginnerScore: string;
  prereq: string;
  ramp: string;
  methodology: string;
  genai: string;
  projects: string[];
  support: string;
  mentorship: string;
  placement: { label: string; value: string }[];
  industry: string;
  feedback: { who: string; from: string; to: string; note: string }[];
  beginnerVerdict: string;
};

export const BEGINNER: Record<string, BeginnerDossier> = {
  logicmojo: {
    beginnerScore: "9.4 / 10 for zero-experience beginners",
    prereq:
      "No AI background assumed. Basic computer literacy is enough to start; Python is taught from variables and loops, not assumed. Learners from non-CS degrees (BCom, BSc, mechanical, civil, BBA) are a normal part of a cohort rather than an exception the batch has to wait for.",
    ramp:
      "A dedicated pre-cohort foundation phase covers Python syntax, data structures, pandas/NumPy, SQL and the statistics you actually need (distributions, hypothesis testing, bias–variance) before any model is trained. Non-coders are told plainly to budget 3–5 extra weeks here, and get separate beginner-only doubt sessions during that window instead of being folded into a mixed-ability class.",
    methodology:
      "The teaching order is deliberately bottom-up and every layer is used by the next one: Python → statistics → classical ML → deep learning → NLP → Transformers → LLMs → Prompt Engineering → RAG → LangChain/LangGraph → vector databases → fine-tuning → AI agents → MLOps and GenAI deployment. Each concept is introduced with a live code walkthrough, then re-derived by the learner in an assignment, then defended in a code review. Nothing is left as 'watch and copy'.",
    genai:
      "GenAI is not a bolt-on module — it is roughly the back half of the program. Prompt engineering (zero/few-shot, chain-of-thought, structured output, evaluation of prompts), LLM internals (tokenisation, attention, context windows, sampling), RAG from naive retrieval to chunking strategy, hybrid search, re-ranking and eval harnesses, LangChain and LangGraph, vector databases (FAISS, Chroma, Pinecone, pgvector), fine-tuning with SFT/LoRA/QLoRA/DPO, multi-agent patterns with LangGraph/CrewAI/AutoGen, MCP tool integration, open-weight models (Llama, Mistral, Qwen, Gemma) with local inference, plus guardrails, evaluation and cost control.",
    projects: [
      "Beginner ramp: EDA + regression on an Indian retail dataset (pandas, matplotlib)",
      "Classification with imbalanced data + honest evaluation (churn / fraud)",
      "First deep learning build: image classifier with CNNs in PyTorch",
      "NLP baseline → Transformer fine-tune for sentiment/intent classification",
      "Prompt engineering lab: structured extraction with evaluation scoring",
      "RAG v1: document Q&A over PDFs with embeddings + a vector store",
      "RAG v2 (industry-level): chunking strategy, hybrid search, re-ranking, RAGAS-style eval",
      "Domain chatbot with memory, citations and refusal handling",
      "Fine-tune an open-weight model with LoRA/QLoRA on a custom dataset",
      "Multi-agent workflow: research → plan → execute → verify with tool calling",
      "MCP-based tool integration for an internal assistant",
      "LLM cost + latency optimisation study with measured before/after numbers",
      "Deployment capstone: FastAPI + Docker + monitoring for a GenAI service",
    ],
    support:
      "Live in-session doubt resolution with the instructor who taught the topic, mentor channels between classes, beginner-only clinics during the foundation phase, recorded sessions plus catch-up classes, and batch transfer if work genuinely breaks a cohort. Human code review is the part beginners under-value and benefit from most: someone reads your repository and tells you your validation split leaked.",
    mentorship:
      "1-on-1 mentor time for portfolio and interview preparation plus small-group sessions during projects; mentors are working practitioners, not recent graduates reading someone else's slides.",
    placement: [
      { label: "Model", value: "Placement-first assistance — no bond, no ISA" },
      { label: "Resume & LinkedIn", value: "Structured workshops + individual rewrites for GenAI role titles" },
      { label: "Mock interviews", value: "Multiple rounds: DSA/Python, ML fundamentals, GenAI system design, project defence" },
      { label: "Career counselling", value: "1-on-1 role-targeting (GenAI Developer vs. LLM Engineer vs. AI Analyst)" },
      { label: "Post-course support", value: "Continues after completion until the learner lands a role [VERIFY exact duration on the current agreement]" },
      { label: "Evidence to check", value: "Public alumni outcomes at logicmojo.com/success-story" },
    ],
    industry:
      "Python, pandas, NumPy, scikit-learn, PyTorch, Hugging Face Transformers, LangChain, LangGraph, CrewAI, FAISS/Chroma/Pinecone/pgvector, OpenAI and open-weight models, MLflow, Docker, FastAPI, Git/GitHub, cloud deployment — used on realistic, messy datasets rather than clean teaching sets.",
    feedback: [
      { who: "Non-CS graduate, 0 coding", from: "Support/ops role", to: "GenAI Developer", note: "Foundation phase first, then RAG + agents capstone; interview turned entirely on defending retrieval design choices." },
      { who: "Service-company tester, 3 yrs", from: "Manual QA", to: "AI/ML Engineer", note: "Cited the deployment capstone (FastAPI + Docker) as the differentiator in the final round." },
      { who: "Fresher, tier-3 college", from: "No offers", to: "AI Engineer (startup)", note: "Hired on portfolio; the fine-tuning project was the only thing the founder asked about." },
    ],
    beginnerVerdict:
      "The strongest overall pick for a true beginner who wants a GenAI job rather than a certificate: foundations are taught properly, GenAI is taught as engineering, and someone reads your code. Verify current fees, batch dates and the exact wording of job-assistance terms before you pay.",
  },
  scaler: {
    beginnerScore: "7.6 / 10 — strong, but assumes you can survive a hard pace",
    prereq: "Programming aptitude expected; an entrance/assessment step is normal. Absolute non-coders are routed to a longer foundation track.",
    ramp: "A real bridge module exists for Python and problem-solving, but the ramp is steep and DSA-heavy — beginners frequently under-estimate the first eight weeks.",
    methodology: "Structured live cohort teaching with heavy assignment cadence and TA-led problem sessions; strong on fundamentals and interview-grade DSA, lighter on newest GenAI engineering.",
    genai: "Solid Python, ML, DL and NLP coverage with growing LLM and applied-GenAI content; RAG, agents and fine-tuning are covered less deeply than the 2026 GenAI job description implies.",
    projects: ["ML pipelines", "DL/NLP builds", "1–2 substantial capstones with mentor review"],
    support: "Large TA network, scheduled doubt sessions, active cohort community, deadline enforcement — genuinely good for beginners who need accountability.",
    mentorship: "1-on-1 mentor allotted, typically an engineer from a product company; regular cadence is the norm.",
    placement: [
      { label: "Model", value: "The strongest formal placement machine in Indian EdTech" },
      { label: "Hiring partners", value: "Large partner network across product companies and GCCs [VERIFY current list]" },
      { label: "Mock interviews", value: "Multiple structured rounds incl. DSA + system design" },
      { label: "Support duration", value: "Defined post-completion window [VERIFY]" },
    ],
    industry: "Python, SQL, scikit-learn, PyTorch/TensorFlow, cloud basics, Git, standard MLOps tooling.",
    feedback: [{ who: "SDE-1, 2 yrs", from: "Backend", to: "ML Engineer", note: "Placement pipeline produced the interviews; the offer came from DSA + ML fundamentals, not GenAI depth." }],
    beginnerVerdict: "Choose it if your bottleneck is access to interviews and you can commit 15–20 hrs/week and a premium fee; supplement the GenAI stack separately.",
  },
  upgrad: {
    beginnerScore: "7.4 / 10 — beginner-tolerant, credential-led",
    prereq: "Some technical comfort helps; non-engineering graduates are actively admitted.",
    ramp: "Academic-style preparatory modules in Python, statistics and maths; paced over weeks rather than crammed.",
    methodology: "University-structured semesters with recorded lectures, live doubt sessions, graded assignments and deadlines — familiar and safe for beginners who learn well in academic formats.",
    genai: "Good breadth to NLP and LLM basics; RAG, agents and fine-tuning are comparatively thin for a 2026 GenAI role.",
    projects: ["Assignment-driven case studies", "Industry capstone with mentor guidance"],
    support: "Ticketed doubt support, live sessions, student success managers who chase you when you fall behind.",
    mentorship: "Industry mentor sessions (mostly group, some 1-on-1).",
    placement: [
      { label: "Model", value: "Career centre + placement assistance (not a guarantee)" },
      { label: "Resume/LinkedIn", value: "Yes — structured workshops" },
      { label: "Interview prep", value: "Mock rounds available; less GenAI-specific" },
      { label: "Support duration", value: "Time-bound after completion [VERIFY]" },
    ],
    industry: "Python, SQL, scikit-learn, TensorFlow/PyTorch, cloud basics, BI tooling.",
    feedback: [{ who: "IT services professional, 6 yrs", from: "Java developer", to: "Internal AI team move", note: "The IIIT-B tag mattered to the internal promotion committee more than the portfolio did." }],
    beginnerVerdict: "Best when the credential unlocks internal mobility; not the fastest route to a hands-on GenAI build role.",
  },
  "great-learning": {
    beginnerScore: "8.0 / 10 — the gentlest paced premium option",
    prereq: "Basic computer comfort; explicitly designed for working professionals without AI backgrounds.",
    ramp: "Long, gradual foundations in Python and statistics with weekend-friendly load (8–12 hrs/week).",
    methodology: "Weekend mentor-led sessions on top of recorded content; concept → guided lab → graded assignment.",
    genai: "Reasonable LLM, prompt engineering and applied GenAI coverage; RAG and agents at an introductory-to-moderate depth.",
    projects: ["8–12 graded projects", "Capstone with mentor review"],
    support: "Mentor sessions, discussion forums, program managers who track attendance and nudge stragglers.",
    mentorship: "Weekly mentor group sessions; some 1-on-1.",
    placement: [
      { label: "Model", value: "Career support: resume, mock interviews, job board" },
      { label: "Guarantee", value: "Assistance only — read the wording" },
      { label: "Support duration", value: "Defined window post-completion [VERIFY]" },
    ],
    industry: "Python, scikit-learn, TensorFlow/Keras, SQL, Tableau/Power BI, cloud basics.",
    feedback: [{ who: "Non-tech manager, 9 yrs", from: "Operations", to: "AI Product Analyst", note: "Weekend format was the only reason completion happened at all." }],
    beginnerVerdict: "Excellent for time-poor beginners who need a recognised credential and a humane pace.",
  },
  intellipaat: {
    beginnerScore: "7.2 / 10",
    prereq: "Basic programming helpful; foundational sessions provided.",
    ramp: "Partial bridge content — beginners without Python should add self-study before the ML modules.",
    methodology: "Instructor-led live classes with lifetime access to recordings; practical, tool-oriented teaching.",
    genai: "Decent LLM, prompt engineering and applied GenAI modules with cloud deployment leanings; agents and fine-tuning covered at moderate depth.",
    projects: ["6–12 guided projects", "Industry capstone"],
    support: "24×7 support claim, live doubt sessions, forums — quality varies by batch.",
    mentorship: "Mentor access included; more group than 1-on-1.",
    placement: [
      { label: "Model", value: "Job assistance, resume prep, interview scheduling" },
      { label: "Partners", value: "Stated partner list — verify currency" },
      { label: "Support duration", value: "[VERIFY]" },
    ],
    industry: "Python, scikit-learn, TensorFlow, SQL, AWS/Azure, Docker basics.",
    feedback: [{ who: "Analyst, 4 yrs", from: "Reporting", to: "Data Scientist", note: "Live classes plus recordings suited a rotating shift schedule." }],
    beginnerVerdict: "Solid mid-priced live option for beginners who want cloud-flavoured practicality.",
  },
  simplilearn: {
    beginnerScore: "6.8 / 10",
    prereq: "Basic programming helpful; content assumes some comfort with code.",
    ramp: "Limited true ramp-up; foundations are brisk.",
    methodology: "Blended self-paced video + periodic masterclasses; enterprise-training DNA.",
    genai: "GenAI modules exist and are current at a conceptual level; production RAG, agents and fine-tuning are shallow.",
    projects: ["5–10 guided projects", "Capstone"],
    support: "Forums and limited live support; weaker accountability for beginners.",
    mentorship: "Limited.",
    placement: [
      { label: "Model", value: "Career services + job board" },
      { label: "Guarantee", value: "None; assistance framing" },
      { label: "Support duration", value: "[VERIFY]" },
    ],
    industry: "Python, TensorFlow/Keras, SQL, cloud basics.",
    feedback: [{ who: "Corporate learner", from: "Sponsored upskilling", to: "Internal AI project", note: "Fine when an employer pays and the goal is literacy, not a role switch." }],
    beginnerVerdict: "Acceptable for employer-sponsored literacy; weak as a beginner's route into a GenAI build role.",
  },
  "deeplearning-ai": {
    beginnerScore: "6.6 / 10 for absolute beginners (10/10 for concepts, 0/10 for placement)",
    prereq: "Python needed for the deeper specialisations; comfort with notation helps.",
    ramp: "No hand-holding ramp; you assemble the path yourself.",
    methodology: "Best-in-class explanation-first pedagogy with short labs; you supply structure and deadlines.",
    genai: "Outstanding short courses on prompting, RAG, LangChain, agents and fine-tuning — but as modules, not a career program.",
    projects: ["Guided labs", "No portfolio-grade capstone by default"],
    support: "Forums only.",
    mentorship: "None.",
    placement: [
      { label: "Model", value: "None — and it is honest about that" },
      { label: "Support duration", value: "N/A" },
    ],
    industry: "Python, TensorFlow/PyTorch, Hugging Face, LangChain in short-course form.",
    feedback: [{ who: "Self-directed learner", from: "Engineering", to: "AI Engineer", note: "Worked because the learner already had discipline and a job network." }],
    beginnerVerdict: "The best free/cheap concept layer for a beginner — pair it with something that reviews your code and gets you interviews.",
  },
  ibm: {
    beginnerScore: "6.8 / 10",
    prereq: "Python required.",
    ramp: "Partial foundations included in the professional certificate path.",
    methodology: "Structured self-paced modules with hands-on labs and a recognisable certificate.",
    genai: "Reasonable LLM and applied AI content; production RAG, agents and fine-tuning are limited.",
    projects: ["Lab-based projects", "Certificate capstone"],
    support: "Forum only.",
    mentorship: "None.",
    placement: [
      { label: "Model", value: "None — certificate value only" },
      { label: "Support duration", value: "N/A" },
    ],
    industry: "Python, Keras/PyTorch, Watson tooling, SQL.",
    feedback: [{ who: "Fresher", from: "College", to: "Support-analyst role", note: "The certificate cleared an HR filter; the portfolio still had to be built elsewhere." }],
    beginnerVerdict: "Cheap, credible credential for beginners — not a placement pathway.",
  },
  guvi: {
    beginnerScore: "8.2 / 10 for affordability and vernacular access",
    prereq: "None for entry tracks.",
    ramp: "Genuine zero-to-one Python and ML ramp, taught in Tamil/Hindi/Telugu/Kannada as well as English — a decisive advantage for Tier-2/3 beginners.",
    methodology: "Short live sessions, gamified practice, incremental assignments.",
    genai: "GenAI modules are present and improving; depth on RAG, agents and fine-tuning is basic-to-moderate.",
    projects: ["4–8 projects", "Entry-level capstone"],
    support: "Regional-language doubt support and community groups.",
    mentorship: "Partial; mostly group.",
    placement: [
      { label: "Model", value: "Regional placement support, entry-level focused" },
      { label: "Interview prep", value: "Basic-to-moderate; resume workshops included" },
      { label: "Support duration", value: "Varies by program [VERIFY]" },
    ],
    industry: "Python, scikit-learn, basic DL, SQL, deployment basics.",
    feedback: [{ who: "Tier-3 fresher", from: "No coding", to: "Junior data role", note: "Vernacular instruction was the reason the foundations landed." }],
    beginnerVerdict: "Best low-cost first step for a non-English-first beginner; expect to level up GenAI depth afterwards.",
  },
  "pw-skills": {
    beginnerScore: "7.8 / 10 on price, 6/10 on GenAI depth",
    prereq: "None for entry tracks.",
    ramp: "Long, patient Python and statistics foundations in Hindi + English.",
    methodology: "Recorded-first with live doubt sessions; very affordable and beginner-paced.",
    genai: "Growing GenAI content (prompting, LLM apps, some LangChain); production-grade RAG, agents and MLOps are thin.",
    projects: ["4–8 projects", "Capstone"],
    support: "Doubt-clearing sessions and large peer community.",
    mentorship: "Limited 1-on-1.",
    placement: [
      { label: "Model", value: "Growing placement cell, entry-level focus" },
      { label: "Interview prep", value: "Basic-to-moderate" },
      { label: "Support duration", value: "Varies [VERIFY]" },
    ],
    industry: "Python, pandas, scikit-learn, basic DL, Streamlit deployment.",
    feedback: [{ who: "Student, 2nd year", from: "No experience", to: "Internship", note: "Price made it possible to start at all; depth had to come later." }],
    beginnerVerdict: "The cheapest credible structured start for an Indian beginner — treat it as step one, not the whole journey.",
  },
};
