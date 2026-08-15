export type Course = {
  rank: number;
  id: string;
  name: string;
  tagline: string;
  score: string;
  snapshot: { label: string; value: string }[];
  what: string;
  curriculum: string;
  delivery: string;
  projects: string;
  career: string;
  fit: string;
  limits: string[];
  verdict: string;
};

export const COURSES: Course[] = [
  {
    rank: 1,
    id: "logicmojo",
    name: "LogicMojo — AI & Machine Learning Course",
    tagline: "Best overall: curriculum depth + live IST mentorship + value",
    score: "9.2 / 10",
    snapshot: [
      { label: "Delivery", value: "Live IST cohort + recordings" },
      { label: "Fees", value: "₹XX,XXX [VERIFY: current fee] · EMI available" },
      { label: "Duration", value: "X months [VERIFY]" },
      { label: "Weekly hours", value: "10–15" },
      { label: "Capability ceiling", value: "Level 4–5" },
    ],
    what:
      "A live, instructor-led AI and machine learning program built around one uncomfortable premise: that the point of a course is not the certificate but what you can build and defend eighteen months later. The structure runs foundations → classical ML → deep learning → NLP and CV → the full GenAI, RAG and agents stack → MLOps and deployment, taught by working practitioners on an evening and weekend IST schedule.",
    curriculum:
      "This is the deepest 2026-relevant syllabus I assessed at anything close to its price. Layers 1–4 are conventional but genuinely rigorous — evaluation and feature engineering get real time, not a slide. The separation happens in Layer 5: embeddings and vector databases as first-class topics, RAG taught from naive retrieval through chunking strategy, hybrid search, re-ranking and evaluation harnesses; fine-tuning covering SFT, LoRA, QLoRA and DPO with real runs; agents covered as architectures rather than demos, across LangGraph, CrewAI and AutoGen, plus MCP for tool integration and open-weight models (Llama, Mistral, Qwen, Gemma) including local inference. Layer 6 is present and hands-on — Docker, FastAPI, MLflow, monitoring and drift — which is where most Indian programs simply stop.",
    delivery:
      "Genuinely live, not replays with a chat moderator. Questions are answered in the session by the person teaching; mentor channels carry the rest. Human code review is the part that actually changes outcomes — someone reads your repository and tells you your feature leakage is why your validation score is suspiciously good. Recordings and catch-up sessions exist for the weeks work eats, and batch transfer is available when life genuinely breaks a cohort.",
    projects:
      "Roughly 10–15 portfolio-grade builds rather than follow-along notebooks, escalating from ML pipelines to a deployed capstone. Critically, the later projects require design decisions the learner makes and must justify — chunk size, retrieval strategy, eval metric — which is exactly the material an interview probes.",
    career:
      "Career support here is skill-led rather than guarantee-led: portfolio review, GitHub hygiene, technical interview preparation focused on defending your own work, and AI-role-specific mock rounds. There is no bond and no ISA. It does not run a placement machine on the scale of Scaler's partner network, and it doesn't claim to.",
    fit:
      "Working professionals with 10–15 hours a week who want to be hired for what they can build; engineers and analysts moving into AI/ML or GenAI engineering; career switchers willing to do the foundations work properly.",
    limits: [
      "Brand recognition is lower than upGrad, Scaler or a university-tagged program. If your promotion committee wants a famous logo on a certificate, this is not that product.",
      "The pace assumes you code. A genuinely non-technical learner will find Layers 2–3 punishing without extra weeks on Python and statistics.",
      "Live IST timings are a real constraint. If your work travel is unpredictable, you will lean on recordings and lose some of the value you paid for.",
      "Placement infrastructure — recruiter relationships, hiring drives — is thinner than the premium programs. Support is real; a pipeline of interviews handed to you is not the model.",
      "Depth is only an advantage if you need depth. A PM wanting AI literacy is over-buying here.",
    ],
    verdict:
      "The best capability-per-rupee in Indian online AI education in 2026, provided you can hold 10–15 hours a week and don't need a brand-name certificate more than you need skill.",
  },
  {
    rank: 2,
    id: "scaler",
    name: "Scaler — Data Science, ML & AI Program",
    tagline: "Best placement infrastructure",
    score: "8.5 / 10",
    snapshot: [
      { label: "Delivery", value: "Live IST cohort" },
      { label: "Fees", value: "₹3–4L [VERIFY] · long-tenure EMI" },
      { label: "Duration", value: "11–18 months" },
      { label: "Weekly hours", value: "15–20" },
      { label: "Capability ceiling", value: "Level 4" },
    ],
    what:
      "A long-form, high-intensity live program that treats employability as an engineering problem: structured curriculum, strong teaching assistants, DSA and system design alongside ML, and the most developed placement operation in Indian EdTech.",
    curriculum:
      "Strong through Layers 1–3 and solid on MLOps. Classical ML and evaluation are handled well. The GenAI layer is improving but remains the weaker third relative to the fee — production RAG, fine-tuning depth and agent frameworks are lighter than the 2026 market now expects.",
    delivery:
      "Genuinely live with a dense TA network, real code review and strong cohort accountability. Completion rates are among the best I saw, largely because the structure makes falling behind visible immediately.",
    projects:
      "Roughly 5–10 substantial projects, well-scaffolded, with review. Fewer GenAI-native builds than the ranking's top pick.",
    career:
      "The genuine differentiator: an actual recruiter network, interview drives, mock interviews covering DSA, system design and ML, and published outcome data. Read the eligibility criteria attached to that data closely — the denominator matters.",
    fit:
      "Engineers with 2–8 years targeting product companies and GCCs, who can commit 15–20 hours weekly and absorb a ₹3L+ EMI.",
    limits: [
      "The price is the highest-risk variable in this list. A 24-month EMI on a program you abandon in month four is the most common financial regret in Indian EdTech.",
      "15–20 hours a week is brutal after a 10-hour workday; the dropout risk is real and it isn't laziness.",
      "GenAI, agents and MCP coverage lags the fee. In 2026 that's a meaningful gap.",
      "The DSA-heavy framing suits product-company interviews, not every AI role.",
    ],
    verdict:
      "If placement into a product company or GCC is the single outcome you're buying, and you can sustain the hours and the EMI, this is the strongest infrastructure available. Otherwise you're paying for a machine you won't use.",
  },
  {
    rank: 3,
    id: "upgrad",
    name: "upGrad — PGP in Machine Learning & AI (IIIT-Bangalore)",
    tagline: "Best university-credentialed program",
    score: "7.9 / 10",
    snapshot: [
      { label: "Delivery", value: "Live + recorded, academic cadence" },
      { label: "Fees", value: "₹1.5–3.5L [VERIFY] · EMI, often no-cost" },
      { label: "Duration", value: "12–18 months" },
      { label: "Weekly hours", value: "10–15" },
      { label: "Capability ceiling", value: "Level 3–4" },
    ],
    what:
      "An academically structured program delivered by upGrad with an IIIT-Bangalore credential — the most defensible university tag in the mainstream Indian EdTech set, because the academic partnership is substantive rather than a two-day immersion.",
    curriculum:
      "Broad and coherent through ML, deep learning, NLP and CV, with genuine academic treatment of the maths. The GenAI layer is present but conservative: vector databases and production RAG are light, agent frameworks are essentially absent, and curriculum refresh is slower than a fast-moving field demands.",
    delivery:
      "Mixed live and recorded with academic deadlines that do drive completion. Doubt resolution runs through a ticketing system plus sessions — functional, rarely fast. Code review is partial and inconsistent across cohorts.",
    projects:
      "8–12 assignments and case studies, well-specified but closer to guided coursework than open-ended building.",
    career:
      "A career services team, a job board, resume and interview support. Generic rather than AI-role-specific. This is 'assistance', and it should be read as exactly that word.",
    fit:
      "Career switchers and service-company professionals who need a recognisable academic credential for internal mobility or a visa-relevant qualification, with 10–15 hours a week.",
    limits: [
      "You are paying a significant premium for the credential; the teaching is upGrad's, not IIIT-B faculty across the board.",
      "12–18 months is a long EMI tenure and a long motivation curve.",
      "The 2026 GenAI stack — production RAG, agents, MCP, fine-tuning — is the weakest part of the offering.",
      "Career support is broad-tech, not AI-specific.",
    ],
    verdict:
      "The right answer when the credential itself has organisational value. The wrong answer if you're buying maximum capability per rupee.",
  },
  {
    rank: 4,
    id: "great-learning",
    name: "Great Learning — PGP-AIML (UT Austin / Great Lakes)",
    tagline: "Best mentor-led weekend format",
    score: "7.7 / 10",
    snapshot: [
      { label: "Delivery", value: "Weekend live mentor sessions + recorded core" },
      { label: "Fees", value: "₹1.5–3.5L [VERIFY] · EMI, often no-cost" },
      { label: "Duration", value: "7–12 months" },
      { label: "Weekly hours", value: "8–12" },
      { label: "Capability ceiling", value: "Level 3–4" },
    ],
    what:
      "Recorded core content paired with weekend live mentor sessions, wrapped in a UT Austin / Great Lakes credential. The format is the product: it is the most realistically survivable premium program for someone working a demanding job.",
    curriculum:
      "Well-balanced across ML, deep learning, NLP and CV, with a reasonable GenAI module — better than upGrad on LLM fundamentals and prompting, still light on production RAG, agents and MLOps.",
    delivery:
      "Weekend mentor sessions are genuinely live and mentor quality is the single biggest variance in the experience. A strong mentor reviews your code and pushes; a weak one narrates slides. Ask for your mentor's name and background before paying.",
    projects:
      "8–12 projects with mentor feedback, moderate ambition, mostly guided.",
    career:
      "Resume support and mock interviews; partial portfolio review. Assistance, not placement.",
    fit:
      "Working professionals with 8–12 hours a week who want structure plus a global brand and cannot commit to weeknight classes.",
    limits: [
      "Mentor quality varies more than any other factor here — the program is only as good as your allocation.",
      "Campus immersion, where offered, adds travel cost that isn't in the headline fee.",
      "MLOps and deployment are thin; you will finish able to model but not to ship.",
      "Premium pricing for a largely recorded core.",
    ],
    verdict:
      "The best-designed schedule for busy professionals in the premium tier. Verify your mentor before you verify anything else.",
  },
  {
    rank: 5,
    id: "intellipaat",
    name: "Intellipaat — Advanced Certification in AI & ML (IIT-affiliated)",
    tagline: "Best IIT tag at mid-tier pricing",
    score: "7.3 / 10",
    snapshot: [
      { label: "Delivery", value: "Live + self-paced hybrid" },
      { label: "Fees", value: "₹80K–₹2L [VERIFY] · EMI, often no-cost" },
      { label: "Duration", value: "6–12 months" },
      { label: "Weekly hours", value: "10–15" },
      { label: "Capability ceiling", value: "Level 3–4" },
    ],
    what:
      "A hybrid program pairing live sessions with self-paced content, carrying an IIT affiliation at roughly half the price of the university-tier programs.",
    curriculum:
      "Solid and pragmatic: good classical ML, decent deep learning, respectable coverage of MLOps and cloud deployment — better than several more expensive options. GenAI is moderate: LLM fundamentals and prompting are handled, agents and production RAG are surface-level.",
    delivery:
      "Live support plus forums. Doubt resolution is functional; code review is partial. Cohort accountability is weaker than a true bootcamp — the self-paced half is where people quietly fall behind.",
    projects: "6–12 projects, applied and industry-flavoured, with variable review depth.",
    career: "Job assistance and resume preparation. Verify the currency of the hiring-partner list before it influences your decision.",
    fit: "Professionals wanting an institutional tag and solid deployment skills without ₹2L+ pricing.",
    limits: [
      'Interrogate exactly what the "IIT" affiliation includes — hours taught, faculty involved, certificate wording.',
      "Sales pressure is among the more aggressive in the sector; never pay on the first call.",
      "Self-paced components dilute the accountability that makes live cohorts work.",
      "Exam and add-on fees can sit outside the quoted price.",
    ],
    verdict:
      "Good value for an institutionally branded, deployment-aware program — provided you're the kind of learner who doesn't need someone watching.",
  },
  {
    rank: 6,
    id: "simplilearn",
    name: "Simplilearn — PGP in AI & ML (Purdue / IBM)",
    tagline: "Best for corporate and employer-funded learners",
    score: "6.9 / 10",
    snapshot: [
      { label: "Delivery", value: "Live masterclasses + self-paced core" },
      { label: "Fees", value: "₹1.5–2.5L [VERIFY] · EMI, often no-cost" },
      { label: "Duration", value: "11 months" },
      { label: "Weekly hours", value: "8–12" },
      { label: "Capability ceiling", value: "Level 3–4" },
    ],
    what:
      "A well-packaged, enterprise-friendly certificate program with Purdue and IBM branding, built primarily around self-paced content with periodic live masterclasses.",
    curriculum:
      "Broad and tidy, TensorFlow/Keras-leaning, competent on classical ML and responsible AI. The 2026 layers — production RAG, fine-tuning, agents, agent frameworks, MCP — are the thinnest of the paid programs here.",
    delivery:
      "Only partially live. Masterclasses are events, not a teaching cadence. Cohort accountability is weak and dropout prevention is minimal, which matters more than the syllabus for most learners.",
    projects: "5–10 guided projects and labs; limited human code review.",
    career: "Career services and a job board, oriented toward enterprise and consulting profiles.",
    fit: "Learners whose employer is paying, who need a recognised corporate credential and can self-direct.",
    limits: [
      "If you're funding this personally, the capability-per-rupee is poor relative to options half the price.",
      "The GenAI and agents coverage does not match a 2026 job description.",
      "'Live' here means masterclasses, not live instruction — know what you're buying.",
      "Exam vouchers and add-ons sit outside the headline fee.",
    ],
    verdict:
      "Excellent when someone else is paying and the credential is the deliverable. Hard to justify from your own pocket.",
  },
  {
    rank: 7,
    id: "deeplearning-ai",
    name: "DeepLearning.AI (Coursera)",
    tagline: "Best foundations in the world, at near-zero cost",
    score: "8.8 / 10 on teaching · 5.5 / 10 on completion support",
    snapshot: [
      { label: "Delivery", value: "Fully self-paced" },
      { label: "Fees", value: "Free to audit · ~₹4,000/month subscription [VERIFY]" },
      { label: "Duration", value: "3–6 months" },
      { label: "Weekly hours", value: "Flexible" },
      { label: "Capability ceiling", value: "Level 2–3" },
    ],
    what:
      "Andrew Ng's Machine Learning and Deep Learning specialisations, plus a fast-moving library of short GenAI courses. The clearest explanations of ML and deep learning fundamentals available anywhere, at any price.",
    curriculum:
      "Outstanding on Layers 1–3 and strong on transformers and LLM fundamentals. Deliberately absent on MLOps, deployment and AI system design, and the short GenAI courses are introductions rather than production training.",
    delivery:
      "No live component, no mentor, no code review, forum-only support. Completion depends entirely on you, and the honest global data on self-paced completion is brutal.",
    projects: "Well-designed labs and assignments — but auto-graded, and you can pass by following.",
    career: "None, and refreshingly, none is claimed.",
    fit: "Disciplined self-starters, students with time, managers wanting real conceptual clarity, and anyone building foundations before a paid program.",
    limits: [
      "Completion is the whole problem. Most people who start do not finish, and that is a delivery failure, not a moral one.",
      "No production, deployment or MLOps content whatsoever.",
      "No portfolio review, so nobody ever tells you your project is not interview-grade.",
      "No India-specific hiring context or career pathway.",
      "Monthly subscription creep punishes slow learners.",
    ],
    verdict:
      "The best teaching in this list and the weakest scaffolding. Pair it with an external deadline structure — or a study group — or you will join the 85%.",
  },
  {
    rank: 8,
    id: "ibm",
    name: "IBM AI Engineering Professional Certificate (Coursera)",
    tagline: "Best low-cost applied engineering track",
    score: "7.4 / 10",
    snapshot: [
      { label: "Delivery", value: "Fully self-paced" },
      { label: "Fees", value: "Free to audit · ~₹4,000/month subscription [VERIFY]" },
      { label: "Duration", value: "3–6 months" },
      { label: "Weekly hours", value: "Flexible" },
      { label: "Capability ceiling", value: "Level 2–3" },
    ],
    what:
      "A hands-on applied track heavy on framework practice — scikit-learn, Keras, PyTorch — with a recognisable enterprise brand attached, at subscription pricing.",
    curriculum:
      "Strong on practical framework work and applied deep learning; light on mathematics, and thin on the 2026 GenAI layers, agents and system design.",
    delivery: "Self-paced labs with forum support only. Same completion problem as any MOOC.",
    projects: "6–10 lab-style projects; useful practice, limited portfolio distinctiveness because thousands submit the same builds.",
    career: "None claimed.",
    fit: "Budget-constrained learners with Python already in hand who want structured applied practice and a credential recruiters recognise the name on.",
    limits: [
      "Everyone's portfolio looks the same; you must build something original on top of it.",
      "Weak on maths, weak on GenAI depth, no MLOps to speak of.",
      "No human feedback loop at any point.",
    ],
    verdict: "The best ₹4,000-a-month you can spend if you already code and can supply your own discipline.",
  },
  {
    rank: 9,
    id: "guvi",
    name: "GUVI (IIT-Madras incubated)",
    tagline: "Best vernacular and Tier-2/3-accessible option",
    score: "7.0 / 10",
    snapshot: [
      { label: "Delivery", value: "Live + recorded, vernacular" },
      { label: "Fees", value: "₹10K–₹80K [VERIFY]" },
      { label: "Duration", value: "3–9 months" },
      { label: "Weekly hours", value: "8–12" },
      { label: "Capability ceiling", value: "Level 2–3" },
    ],
    what:
      "An IIT-Madras-incubated platform teaching AI and data science in Tamil, Hindi, Telugu and Kannada as well as English, built mobile-first for low-bandwidth conditions.",
    curriculum:
      "Solid entry-to-intermediate coverage of Python, ML and basic deep learning. Transformers, production RAG, agents and MLOps are basic or absent — this is a Level 2–3 program and doesn't pretend otherwise.",
    delivery:
      "Live sessions with regional-language support, strong mobile experience and genuinely low bandwidth requirements. For a learner in Guwahati on a patchy connection, this beats a technically superior program that won't load.",
    projects: "4–8 guided projects, entry-level in ambition.",
    career: "Regional placement support that is genuinely useful for entry-level roles outside metro hubs.",
    fit: "Tier-2/3 learners, first-generation tech entrants, and anyone who learns materially faster in their first language.",
    limits: [
      "Depth ceiling is real — you will need a second, deeper program to reach AI-engineer roles.",
      "The 2026 GenAI stack is barely covered.",
      "Placement support skews to entry-level and regional employers.",
      "Programme quality varies across tracks; evaluate the specific track, not the brand.",
    ],
    verdict:
      "The best on-ramp in Indian AI education for learners the premium programs quietly ignore. Treat it as step one, not the whole journey.",
  },
  {
    rank: 10,
    id: "pw-skills",
    name: "PW Skills — Data Science with Generative AI",
    tagline: "Best ultra-affordable structured Indian program",
    score: "6.8 / 10",
    snapshot: [
      { label: "Delivery", value: "Recorded + live doubt sessions" },
      { label: "Fees", value: "₹5K–₹30K [VERIFY]" },
      { label: "Duration", value: "4–8 months" },
      { label: "Weekly hours", value: "8–12" },
      { label: "Capability ceiling", value: "Level 2–3" },
    ],
    what:
      "A very low-cost, structured Indian program covering data science with a surprisingly current generative AI component, in Hindi and English, mobile-first.",
    curriculum:
      "Reasonable foundations and classical ML; the GenAI module is better than the price implies, covering LLM basics, prompting and introductory RAG. Evaluation rigour, MLOps, agents and deployment are basic.",
    delivery: "Recorded core with live doubt sessions and an active community. Accountability is community-driven, which works for some and not for most.",
    projects: "4–8 guided projects; adequate for a first portfolio, not distinctive.",
    career: "A growing placement cell focused on entry-level roles. Set expectations accordingly.",
    fit: "Students, freshers and budget-constrained beginners testing whether AI is genuinely for them.",
    limits: [
      "Support scales poorly against very large batch sizes.",
      "Content currency varies by track; check recording dates before enrolling.",
      "No meaningful MLOps, agents or production content.",
      "Career support is early-stage; don't buy for placement.",
    ],
    verdict:
      "At ₹5K–₹30K, the risk is small and the structure is real. The correct expectation is a foundation, not a career.",
  },
];