import { Callout, DataTable, Section } from "./primitives";

export function PartOne() {
  return (
    <>
      <Section id="what-online-means" eyebrow="Section 3" title='What "Online AI Course" Actually Means in 2026'>
        <p>
          You cannot compare options that aren't the same kind of thing. A ₹0 self-paced MOOC and a ₹3L live
          cohort are not competing products — they solve different problems, and they fail in different ways.
          Before any ranking makes sense, here are the seven delivery models an Indian learner can actually buy.
        </p>

        <h3 id="seven-formats">The seven online AI course formats</h3>
        <DataTable
          head={["Format", "What it is", "Price (₹)", "Completion reality", "Best for", "Honest trade-off"]}
          rows={[
            ["Live cohort bootcamp", "Scheduled live IST classes, fixed cohort, mentors, deadlines", "₹40K–₹4L", "Highest — structure drives completion", "Working professionals needing accountability", "Fixed timings; missed weeks compound fast"],
            ["Mentor-led hybrid", "Recorded core + live doubt sessions + mentor reviews", "₹25K–₹1.5L", "Good", "Unpredictable schedules", "Depends entirely on mentor engagement"],
            ["Self-paced MOOC", "Recorded video + auto-graded labs", "₹0–₹40K", "Low (often 5–15%)", "Disciplined self-starters", "No accountability, code review or human answer"],
            ["University online program", "EdTech-delivered, university-branded, academic structure", "₹1L–₹4L", "Moderate–Good", "Career switchers needing a credential", "Slower curriculum refresh; premium for the brand"],
            ["Vendor certification", "Google / AWS / Azure / IBM / NVIDIA paths", "₹0–₹30K", "Moderate", "Cloud-adjacent enterprise roles", "Ecosystem-locked; their tools, not AI broadly"],
            ["Marketplace course", "Udemy and individual creators", "₹500–₹5K", "Low–Moderate", "Budget top-ups on one specific skill", 'Wildly variable; always check the "last updated" date'],
            ["Free structured track", "Fast.ai, Kaggle Learn, Hugging Face, NPTEL, MOOC audit", "₹0", "Very low without external structure", "Self-directed learners", "No portfolio review, no support, no deadline"],
          ]}
        />

        <h3 id="live-or-replay">Is it live, or is it a replay?</h3>
        <p>
          This is the most common misrepresentation in Indian online AI education: a course marketed as{" "}
          <strong>"live"</strong> that is, in practice, a recording playing on schedule with a teaching assistant
          answering in chat. It isn't always a lie — it's usually an omission. Four tests before you pay:
        </p>
        <ol>
          <li>
            <strong>Ask to observe a real scheduled class</strong> — not a "demo session," which is a sales
            performance by the platform's best speaker.
          </li>
          <li>
            <strong>Ask sales to name the instructor for your specific batch</strong>, then open their LinkedIn.
            Vague answers ("our senior faculty panel") are the answer.
          </li>
          <li>
            <strong>Ask who answers a question asked mid-class, and how fast.</strong> In a genuinely live class,
            the person teaching answers. In a replay, someone types "good question, will cover in doubt session."
          </li>
          <li>
            <strong>Get the doubt-resolution SLA in writing</strong> — including what happens when it's missed.
            An SLA with no consequence is a marketing sentence.
          </li>
        </ol>

        <h3 id="ai-vs-ds-vs-genai">AI course vs. data science course vs. GenAI course</h3>
        <DataTable
          head={["", "Data science course", "AI / ML course", "GenAI course"]}
          rows={[
            ["Core focus", "Extracting insight from data", "Building systems that learn and predict", "Building on top of foundation models"],
            ["Curriculum", "SQL, statistics, EDA, visualisation, business analytics, some ML", "Python, maths, ML, deep learning, NLP, CV, deployment", "LLMs, prompting, RAG, agents, fine-tuning, deployment"],
            ["Roles", "Data Analyst, Data Scientist, BI Analyst", "ML Engineer, AI Engineer, Applied Scientist", "GenAI Engineer, LLM Engineer, AI App Developer"],
            ["Maths intensity", "Moderate (statistics-heavy)", "High (linear algebra, calculus, probability)", "Low–Moderate (concepts over derivations)"],
            ["Best entry if…", "You like business problems and data storytelling", "You want to build the models and systems", "You want to ship AI products fast"],
            ["2026 reality", "Increasingly requires AI literacy", "Broadest, most durable option", "Fastest-growing, weakest without AI foundations"],
          ]}
        />
        <Callout tone="accent" label="Verdict">
          For most Indian learners in 2026, a <strong>full AI/ML course with a serious GenAI and agents module</strong>{" "}
          is the highest-optionality choice. It opens data science, ML engineering and GenAI roles at the same
          time. GenAI-only narrows you to a single (crowded) lane, and pure data science increasingly
          under-serves the way Indian companies are now hiring.
        </Callout>
      </Section>

      <Section id="skill-stack" eyebrow="Section 4" title="The 2026 AI Skill Stack — What a Complete Online AI Course Must Cover">
        <p>
          This is the checklist I used to score every program, and it's the checklist you should hold against any
          syllabus PDF — including the ones in this article. Seven layers, each with what it contains, why it
          matters, and the part Indian online courses most often quietly skip.
        </p>

        {[
          {
            n: "Layer 1",
            t: "Foundations",
            topics:
              "Python for AI, NumPy, pandas, data wrangling, SQL, Git/GitHub, Jupyter and Colab, linear algebra and calculus intuition, probability, statistics, hypothesis testing.",
            why: "Everything above this layer collapses without it. You cannot debug a model you can't reason about numerically.",
            skip: "Rushed into two 'bridge' weeks — precisely for the career-switchers who need it most.",
          },
          {
            n: "Layer 2",
            t: "Core machine learning",
            topics:
              "Supervised and unsupervised learning, regression, classification, trees, ensembles (random forest, gradient boosting, XGBoost), clustering, dimensionality reduction, feature engineering, cross-validation, bias–variance, regularisation, evaluation metrics, imbalanced data.",
            why: "Most AI actually running in Indian companies is still classical ML. Credit risk, churn, demand forecasting, fraud — none of it is an LLM.",
            skip: "Evaluation rigour. Accuracy gets taught; precision/recall trade-offs under class imbalance often don't.",
          },
          {
            n: "Layer 3",
            t: "Deep learning",
            topics:
              "Neural network fundamentals, backpropagation, optimisers, CNNs, RNNs/LSTMs, transformers and attention, transfer learning, PyTorch or TensorFlow, GPU training, training dynamics.",
            why: "You cannot genuinely understand an LLM without understanding transformers. Everything in Layer 5 is a consequence of this layer.",
            skip: "Real training runs. Theory slides on attention, zero epochs actually run on a GPU.",
          },
          {
            n: "Layer 4",
            t: "Applied AI domains",
            topics:
              "NLP (tokenisation, embeddings, classification, NER, sequence models), computer vision (classification, detection, segmentation), time series, recommendation systems, speech basics.",
            why: "This is the vocabulary of actual job descriptions. 'CV Engineer' and 'NLP Engineer' are still how roles are titled.",
            skip: "One of CV or NLP is dropped entirely to save four weeks of runtime.",
          },
          {
            n: "Layer 5",
            t: "Generative AI, LLMs and agents — the 2026 differentiator",
            topics:
              "How LLMs work, tokens and embeddings, prompt engineering basic → advanced, LLM APIs (OpenAI, Anthropic, Google), open-weight models (Llama, Mistral, Qwen, Gemma, DeepSeek), vector databases, RAG basic → production, chunking and re-ranking, fine-tuning (SFT, LoRA, QLoRA, DPO), AI agents, multi-agent orchestration, agent frameworks (LangGraph, CrewAI, AutoGen, OpenAI Agents SDK), MCP and tool integration, multi-modal AI, LLM evaluation, guardrails.",
            why: "Nearly all the growth in 2026 Indian AI hiring concentrates here. It's also where the biggest gap between syllabus and substance lives.",
            skip: "Half of it. Prompting, one API call, one toy chatbot — then the module ends.",
          },
          {
            n: "Layer 6",
            t: "Production — MLOps and LLMOps",
            topics:
              "Model packaging, FastAPI/Flask serving, Docker, CI/CD basics, experiment tracking (MLflow, W&B), model registry, monitoring and drift detection, cost and latency optimisation, cloud deployment, LLM observability, prompt versioning, evaluation pipelines.",
            why: "This is the single largest gap between 'trained a model in a notebook' and 'employable as an AI engineer'.",
            skip: "Reduced to one lecture titled 'Deployment' in the final week, often unrecorded.",
          },
          {
            n: "Layer 7",
            t: "Professional",
            topics:
              "Portfolio construction, GitHub hygiene and READMEs, technical communication, AI system design, case-study interview practice, ethics and responsible AI, governance awareness, domain application thinking.",
            why: "Capability you cannot demonstrate and defend does not convert into an offer. Interviews are a communication test wearing a technical costume.",
            skip: "Compressed into a resume template and a LinkedIn optimisation webinar.",
          },
        ].map((l) => (
          <div key={l.n} className="my-5 rounded-xl border border-border bg-card p-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">{l.n}</p>
            <h4 className="!mt-1">{l.t}</h4>
            <p className="!mb-2 text-[0.92rem]">{l.topics}</p>
            <p className="!my-1 text-[0.92rem]">
              <strong>Why it matters:</strong> {l.why}
            </p>
            <p className="!my-1 text-[0.92rem] text-muted-foreground">
              <strong className="text-warning">Commonly skipped:</strong> {l.skip}
            </p>
          </div>
        ))}

        <Callout tone="warn" label="The seven-layer audit">
          Before paying for any course — including any in this list — open its syllabus PDF and mark each layer
          as <strong>hands-on</strong>, <strong>theory only</strong>, or <strong>absent</strong>. If Layer 5 is
          only prompting, or Layer 6 is missing entirely, you are looking at a 2023 course wearing a 2026 label.
        </Callout>
      </Section>
    </>
  );
}