import { Callout, DataTable, NoteCard, Pill, Section, StatCard } from "./primitives";

const MODULES: { n: number; title: string; body: string; can: string }[] = [
  {
    n: 1,
    title: "Programming & Data Foundations",
    body: "Python for AI, NumPy, pandas, data wrangling, SQL, Git/GitHub, Colab and environment management.",
    can: "Clean and reshape real datasets, and version your work like an engineer rather than a notebook tourist.",
  },
  {
    n: 2,
    title: "Mathematics for AI (intuition-first)",
    body: "Linear algebra, gradients and why models learn, probability, statistics, distributions, hypothesis testing.",
    can: "Reason about why a model behaves as it does. Intuition first, notation second — the sequence that determines whether career-switchers survive.",
  },
  {
    n: 3,
    title: "Core Machine Learning",
    body: "Regression, trees, random forests, gradient boosting, XGBoost, SVMs, clustering, PCA, feature engineering, cross-validation, bias–variance, regularisation, class imbalance, metric selection.",
    can: "Build, tune and correctly evaluate models on messy data — including choosing the metric that matches the business cost.",
  },
  {
    n: 4,
    title: "Deep Learning",
    body: "Forward and backpropagation, activations, optimisers, loss functions, regularisation, CNNs, RNNs/LSTMs, transfer learning, PyTorch end-to-end, GPU practicalities.",
    can: "Design, train and debug a network — including diagnosing a training run that silently failed.",
  },
  {
    n: 5,
    title: "Natural Language Processing",
    body: "Preprocessing, tokenisation, embeddings, classification, NER, seq2seq, attention, transformer architecture (intuition → visual → code), Hugging Face.",
    can: "Explain how a transformer works without hand-waving, and build on pre-trained models.",
  },
  {
    n: 6,
    title: "Computer Vision",
    body: "CNN architectures, classification, object detection, segmentation, transfer learning, vision transformers, augmentation.",
    can: "Fine-tune a vision model on a custom dataset you collected and labelled yourself.",
  },
  {
    n: 7,
    title: "Generative AI & LLMs",
    body: "Training vs. inference, tokens and context windows, prompting from zero-shot → few-shot → chain-of-thought → structured outputs → optimisation, OpenAI/Anthropic/Google APIs, open-weight models (Llama, Mistral, Qwen, Gemma, DeepSeek), local inference via Ollama, cost and latency trade-offs.",
    can: "Build production-quality LLM applications and select models against real constraints, not vibes.",
  },
  {
    n: 8,
    title: "Embeddings, Vector DBs & RAG",
    body: "Embeddings in code, ChromaDB/Pinecone/Qdrant, semantic search, chunking, hybrid search, re-ranking, query decomposition, multi-source retrieval, RAG evaluation, production concerns — latency, cost, freshness, citations.",
    can: "Architect and defend a production RAG system — the most commonly asked GenAI interview topic in India in 2026.",
  },
  {
    n: 9,
    title: "Fine-Tuning & Adaptation",
    body: "The prompting vs. RAG vs. fine-tuning decision framework, dataset quality, SFT, LoRA/QLoRA, DPO/RLHF concepts, evaluation, compute and cost realities.",
    can: "Adapt an open-weight model and prove, with numbers, whether it improved anything.",
  },
  {
    n: 10,
    title: "AI Agents",
    body: "Planning and reasoning, ReAct, tool use and function calling, memory design, single-agent construction, failure modes, cost control, agent evaluation.",
    can: "Build agents that reliably act — not demos that break on the second prompt.",
  },
  {
    n: 11,
    title: "Agent Frameworks & MCP",
    body: "LangChain/LangGraph, CrewAI, AutoGen and the OpenAI Agents SDK with a when-to-use-which comparison; MCP concepts, custom tools, integration patterns.",
    can: "Work with what Indian teams are actually adopting in 2026, not what was standard in 2023.",
  },
  {
    n: 12,
    title: "LLM Evaluation, Guardrails & Responsible AI",
    body: "Evaluation methodology, benchmark vs. task-specific, LLM-as-judge and its pitfalls, hallucination detection, guardrail patterns, PII handling, bias and fairness, governance awareness.",
    can: 'Answer "how do you know it works?" — the question that separates builders from demo-makers.',
  },
  {
    n: 13,
    title: "MLOps & LLMOps",
    body: "MLflow/W&B tracking, model registry and versioning, packaging, FastAPI serving, Docker, CI/CD, cloud deployment, monitoring and drift, LLM observability, prompt versioning, cost optimisation and caching.",
    can: "Run a model as a service — the capability that most distinguishes hired candidates from finished students.",
  },
  {
    n: 14,
    title: "AI System Design & Interview Prep",
    body: "Design cases, trade-off reasoning, scaling, technical communication, project defence, GitHub portfolio construction, resume positioning.",
    can: "Defend your work under pressure, including the parts of it that didn't work.",
  },
  {
    n: 15,
    title: "Capstone",
    body: "A learner-designed, deployed AI system with documentation, evaluation and a written architecture rationale.",
    can: "Point an interviewer at a live URL and a repository, and talk through every decision in it.",
  },
];

const PROJECTS = [
  "EDA on a messy real-world dataset",
  "End-to-end ML prediction system with correct evaluation",
  "Feature engineering and model comparison study",
  "Deep learning image classifier with transfer learning",
  "Object detection application",
  "Transformer-based NLP classifier",
  "First LLM application — API integration, structured outputs, error handling",
  "Semantic search engine — embeddings, vector DB, retrieval evaluation",
  "Production-style RAG app — chunking, hybrid retrieval, re-ranking, citations, eval harness",
  "Fine-tuned domain model — LoRA, benchmarked against the base model",
  "Tool-using agent — planning, function calling, memory, failure handling",
  "Multi-agent workflow — orchestration, cost and reliability control",
  "Multi-modal application",
  "Deployed AI service — FastAPI + Docker + cloud + monitoring",
  "Capstone — learner-designed, deployed, documented",
];

const LIMITS: { title: string; body: string }[] = [
  {
    title: "Not the cheapest",
    body: "PW Skills, GUVI and Udemy cost far less; DeepLearning.AI and Google's tracks cost nothing. If budget genuinely binds and you're self-directed, start there and come back later.",
  },
  {
    title: "No university credential",
    body: "upGrad (IIIT-B), Great Learning (UT Austin), Simplilearn (Purdue) and IIT-affiliated programs give you an academic tag. If your employer, visa pathway or promotion process values one, that's a real advantage this doesn't offer.",
  },
  {
    title: "Not the biggest placement machine",
    body: "Scaler's partner network, published outcomes and dedicated placement operation are stronger. If placement infrastructure is what you're buying, Scaler is the honest recommendation.",
  },
  {
    title: "Not fully self-paced",
    body: "Live cohorts mean fixed timings. Learners with genuinely unpredictable schedules — heavy travel, rotating shifts, on-call weeks — may complete a self-paced program more reliably.",
  },
  {
    title: "Smaller brand",
    body: "Scaler, upGrad, Great Learning and Coursera carry far greater recognition in India. Skill depth outweighs brand in a technical interview, but the gap at the resume-screen stage is real.",
  },
  {
    title: "Demands real commitment",
    body: "10–15 hours weekly for months. If you want a light overview or a LinkedIn certificate, a shorter certification track is a better use of your money.",
  },
  {
    title: "Not a research pathway",
    body: "This is applied AI engineering. For research or a PhD track, a university MS/MTech or the NPTEL/IIT route serves you better.",
  },
  {
    title: "Not a GenAI-only sprint",
    body: "If you already have solid ML foundations, the full-stack sequence covers ground you may not need. A focused GenAI specialisation may be the more efficient purchase.",
  },
];

const DELIVERY_TESTS = [
  "Genuinely live IST batches — evening and weekend — with real instructors, not replays with a chat moderator",
  "In-session doubt resolution plus mentor channels, rather than an unmonitored forum",
  "Human code review — the highest-leverage feedback mechanism in online learning",
  "Recordings with structured catch-up instead of an infinite backlog you'll never clear",
  "Cohort structure, which measurably reduces dropout compared with solo self-paced study",
  "Progressive design with no cliff edges between modules",
  'Python and maths prerequisite onboarding, rather than a "prerequisites: intermediate Python" line that quietly excludes the people who most need the course',
  "Batch deferral and transfer when work or life genuinely breaks a cohort",
  "Continuous curriculum updates — in AI, that is a delivery feature, not an editorial nicety",
];

export function WhyLogicMojo() {
  return (
    <Section
      id="why-logicmojo"
      eyebrow="Section 6 · Editor's deep dive"
      title="Why LogicMojo Is Ranked #1 Among Online AI Courses in India (2026)"
    >
      <Callout tone="warn" label="Disclosure">
        This article is published on a LogicMojo property and LogicMojo ranks #1 on it. Read the criteria below
        first, then read the limitations section — if the criticism of the #1 pick doesn't read as genuine, discount
        the other nine reviews too.
      </Callout>

      <p>
        A different weighting produces a different winner, so the weighting is stated openly. Weight brand and
        placement partners and <strong>Scaler</strong> wins. Weight the academic credential and it's{" "}
        <strong>upGrad (IIIT-Bangalore)</strong> or <strong>Great Learning (UT Austin)</strong>. Weight cost alone
        and <strong>DeepLearning.AI</strong> and the free tracks win outright. Weight vernacular accessibility and{" "}
        <strong>GUVI</strong> is the answer.
      </p>
      <p>
        This article weights something narrower: <strong>AI capability gained per rupee and per hour</strong>, in a
        format a working Indian learner can realistically complete. On the composite of seven-layer curriculum
        depth, live IST mentorship, project rigour, content currency — agents, MCP, open-weight models — and
        accessible pricing, LogicMojo scored highest. That's the whole claim. It is not a claim about brand
        recognition, placement volume or academic prestige, and on each of those three it loses to someone else on
        this list.
      </p>

      <div className="my-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard value="15" label="Modules, foundations → capstone" />
        <StatCard value="10–15" label="Portfolio-grade projects" />
        <StatCard value="7/7" label="Skill-stack layers covered" />
        <StatCard value="Live" label="IST evening & weekend" />
      </div>

      <h3 id="lm-stack" className="scroll-mt-36">
        1) Does it cover the complete 2026 AI stack?
      </h3>
      <p>
        Below is the module progression written as capability statements rather than topic lists, because a topic
        list is what every landing page already gives you and it tells you nothing about what you'll be able to do.
      </p>

      <div className="not-prose my-7 grid gap-4 sm:grid-cols-2">
        {MODULES.map((m) => (
          <div key={m.n} className="card-lm reveal p-5">
            <div className="mb-2 flex items-center gap-3">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-primary)] font-mono text-[0.75rem] font-bold text-primary-foreground">
                {String(m.n).padStart(2, "0")}
              </span>
              <h4 className="!my-0 text-[1rem] font-semibold text-ink">{m.title}</h4>
            </div>
            <p className="!my-0 text-[0.88rem] leading-relaxed text-muted-foreground">{m.body}</p>
            <p className="!mb-0 !mt-3 border-t border-border/70 pt-3 text-[0.86rem] leading-relaxed text-foreground">
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-primary">
                You can now
              </span>
              <br />
              {m.can}
            </p>
          </div>
        ))}
      </div>

      <h4 id="visual-2" className="scroll-mt-36">
        Visual 2 — What most online AI courses teach vs. what Indian AI hiring tests
      </h4>
      <DataTable
        head={["Skill area", "Typical online course", "What 2026 hiring tests", "LogicMojo"]}
        dense
        rows={[
          ["Classical ML", "✅ Covered well", "✅ Still tested heavily", "✅ Deep + evaluation rigour"],
          ["Model evaluation", "⚠️ Metrics listed, rarely practised", '✅ "Why this metric?" in every interview', "✅ Deep, practised"],
          ["Deep learning", "✅ Often theory-heavy", "✅ Must have trained something real", "✅ Hands-on training runs"],
          ["Transformers", "⚠️ One diagram, one lecture", "✅ Must explain attention intuitively", "✅ Intuition → visual → code"],
          ["Prompt engineering", "✅ Often the highlight", "⚠️ Baseline, not differentiating", "✅ Foundation → advanced"],
          ["RAG", "⚠️ One basic demo", "✅ Production design questions standard", "✅ Basic → production"],
          ["Fine-tuning", '❌ "Too advanced"', "✅ When/why/how decision expected", "✅ Hands-on LoRA/QLoRA"],
          ["Agents & frameworks", "❌ Rarely covered", "✅ Fastest-growing requirement", "✅ Multi-framework"],
          ["MCP / tool integration", "❌ Almost never", "✅ Emerging expectation", "✅ Covered"],
          ["MLOps & deployment", '❌ "Run it in the notebook"', "✅ Asked in nearly every interview", "✅ Production-grade"],
          ["Open-weight models", "❌ API-only mindset", "✅ Cost/privacy demand rising", "✅ Comprehensive + local"],
          ["Portfolio defence", "⚠️ Resume template", "✅ The actual hiring filter", "✅ Structured practice"],
        ]}
        caption="Assessed against current public curricula, [VERIFY: check date]. Where a provider offers several variants, the flagship AI/ML variant was used."
      />

      <h3 id="lm-delivery" className="scroll-mt-36">
        2) Is the online delivery actually good — or just online?
      </h3>
      <p>
        Adjectives are worthless here, so here are the testable properties. Every one of them is something you can
        confirm before paying, and every one of them is something a weak program cannot fake for long.
      </p>
      <ul>
        {DELIVERY_TESTS.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <Callout tone="accent" label="Test this yourself">
        Ask any provider, including this one: <strong>Can I sit in on a real class? Who teaches my batch? What's
        the doubt-resolution SLA? Does a human review my code? Can I defer if work explodes?</strong> Those five
        answers predict your outcome better than any brochure, testimonial reel or hiring-partner logo grid.
      </Callout>

      <h3 id="lm-projects" className="scroll-mt-36">
        3) What do you actually build?
      </h3>
      <p>
        Ten to fifteen progressive projects, guided at first and independent by the end — each one defensible in an
        interview and publishable on GitHub.
      </p>
      <ol className="not-prose my-6 grid gap-2 sm:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <li
            key={p}
            className="flex items-start gap-3 rounded-xl border border-border/70 bg-card px-4 py-3 text-[0.88rem] leading-relaxed transition-colors hover:border-primary/40 hover:bg-primary/[0.04]"
          >
            <span className="font-mono text-[0.7rem] text-primary/80">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-foreground">{p}</span>
          </li>
        ))}
      </ol>
      <Callout>
        <strong>Why project count misleads:</strong> twelve copy-along notebooks are worth less than three projects
        you designed, broke, debugged and deployed. This evaluation weighted design decisions, not folder count.
      </Callout>

      <h3 id="lm-pricing" className="scroll-mt-36">
        4) Pricing and value — an honest ROI framing
      </h3>
      <DataTable
        head={["Price band (₹)", "What the market offers", "What you typically get", "LogicMojo"]}
        rows={[
          ["₹0", "MOOC audits, Fast.ai, Kaggle Learn, NPTEL, YouTube", "World-class content, zero structure, very low completion, no review", "—"],
          ["₹500–₹5K", "Udemy, single MOOC certificates", "Structured content, build-along projects, no mentorship", "—"],
          ["₹5K–₹40K", "PW Skills, GUVI, entry bootcamps", "Structured curriculum, some live support, community, entry projects", "—"],
          [
            "₹40K–₹1.2L",
            "Mid-tier bootcamps, specialist programs",
            "Strong structure, live mentorship, real projects, career guidance",
            "LogicMojo — full-stack curriculum, live IST mentorship, 10–15 projects",
          ],
          ["₹1.2L–₹2.5L", "upGrad, Great Learning, Simplilearn, Intellipaat premium", "University or brand credential, career services, moderate-to-good depth", "—"],
          ["₹2.5L+", "Scaler, IIT/IIM executive programs", "Premium placement or elite branding; AI often part of a broader program", "—"],
        ]}
        caption="Bands are indicative and change frequently. [VERIFY: fees for every provider before publication.]"
      />
      <p>
        The useful way to express value is{" "}
        <strong>(capability level reached) ÷ (₹ spent + hours spent)</strong>. Stated plainly: programs at three to
        five times the price generally <em>do not</em> reach a higher capability ceiling. They buy brand, placement
        infrastructure or an academic credential. Those are legitimate purchases — the reader should simply know
        which one they're making.
      </p>
      <Callout tone="warn">
        For a working professional the scarcer resource isn't money — it's the 8–12 weekly hours you'll spend for
        months. A course costing ₹40,000 less but teaching a 2023 stack doesn't save you money; it costs the same
        hours and returns a weaker outcome.
      </Callout>

      <h3 id="lm-limits" className="scroll-mt-36">
        5) Honest limitations — where LogicMojo is not the right choice
      </h3>
      <p>
        Each of these is a real reason a specific reader should pick a different course on this list. If they read
        as disguised advantages, this section has failed.
      </p>
      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        {LIMITS.map((l) => (
          <NoteCard key={l.title} title={l.title}>
            {l.body}
          </NoteCard>
        ))}
      </div>

      <div className="reveal mt-8 rounded-2xl border border-primary/25 bg-[image:var(--gradient-soft)] p-6 text-center">
        <Pill>Next step</Pill>
        <p className="!mt-3 !mb-4 font-display text-[1.15rem] font-semibold text-ink">
          Audit the syllabus yourself against the seven-layer stack before you pay anyone.
        </p>
        <a
          href="[INSERT: course URL]"
          className="!border-0 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-[0.92rem] font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
        >
          Explore the full AI course curriculum, batch schedule and project list →
        </a>
        <p className="!mb-0 !mt-3 text-[0.78rem] text-muted-foreground">
          No bond. No ISA. Nothing on this page is a guarantee of employment or earnings.
        </p>
      </div>
    </Section>
  );
}
