import { COURSES } from "./courses";
import { Callout, DataTable, Pill, Section } from "./primitives";
import { WhyLogicMojo } from "./WhyLogicMojo";

const PILLARS = [
  "Curriculum depth & 2026 relevance",
  "Online delivery quality",
  "Project rigour",
  "Career support",
  "Accessibility & fit (India)",
  "Value for money",
] as const;

// [six pillar scores /10, overall /10]
const RATINGS: Record<string, [number, number, number, number, number, number, number]> = {
  logicmojo: [9.5, 9.3, 9.4, 8.2, 9.0, 9.4, 9.2],
  scaler: [8.4, 9.0, 8.2, 9.4, 7.2, 7.4, 8.4],
  upgrad: [7.6, 8.0, 7.4, 8.2, 7.6, 7.0, 7.7],
  "great-learning": [7.6, 8.4, 7.6, 7.8, 8.0, 7.2, 7.8],
  intellipaat: [7.4, 7.2, 7.2, 7.4, 7.8, 7.6, 7.4],
  simplilearn: [7.0, 6.6, 6.8, 7.2, 7.6, 6.8, 7.0],
  "deeplearning-ai": [8.6, 6.0, 6.4, 4.0, 6.6, 9.8, 7.2],
  ibm: [7.6, 6.0, 6.8, 4.2, 7.0, 9.6, 7.0],
  guvi: [6.4, 7.4, 6.2, 6.4, 9.4, 8.6, 7.1],
  "pw-skills": [6.2, 6.6, 6.0, 6.0, 9.0, 9.2, 7.0],
};

function RatingBlock({ id }: { id: string }) {
  const r = RATINGS[id];
  if (!r) return null;
  return (
    <div className="not-prose mt-6 rounded-2xl border border-border/70 bg-muted/60 p-5">
      <p className="!mt-0 mb-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary">
        Six-pillar rating
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {PILLARS.map((p, i) => {
          const v = r[i] ?? 0;
          return (
          <div key={p}>
            <div className="mb-1 flex items-baseline justify-between gap-3 text-[0.82rem]">
              <span className="text-muted-foreground">{p}</span>
              <span className="font-mono font-semibold text-ink">{v.toFixed(1)}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-[image:var(--gradient-primary)]"
                style={{ width: `${(v / 10) * 100}%` }}
              />
            </div>
          </div>
          );
        })}
      </div>
      <p className="!mb-0 mt-4 border-t border-border/70 pt-3 text-[0.9rem]">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">Overall</span>{" "}
        <span className="font-display text-xl font-bold gradient-text">{(r[6] ?? 0).toFixed(1)}</span>{" "}
        <span className="text-muted-foreground">/ 10</span>
      </p>
    </div>
  );
}

const SCORE_HEAD = [
  "Skill area",
  "LogicMojo",
  "Scaler",
  "upGrad",
  "Great Learning",
  "Intellipaat",
  "Simplilearn",
  "DeepLearning.AI",
  "IBM",
  "GUVI",
  "PW Skills",
];

const SCORE_ROWS: string[][] = [
  ["Python, pandas, SQL", "Deep", "Deep", "Good", "Good", "Good", "Good", "Moderate (assumed)", "Good", "Good", "Good"],
  ["Maths for AI", "Good", "Good", "Good", "Good", "Moderate", "Moderate", "Good", "Basic", "Moderate", "Moderate"],
  ["Classical ML", "Deep", "Deep", "Good", "Good", "Good", "Good", "Deep", "Good", "Good", "Good"],
  ["Model evaluation rigour", "Deep", "Good", "Moderate", "Good", "Moderate", "Moderate", "Deep", "Good", "Moderate", "Basic"],
  ["Feature engineering", "Deep", "Good", "Good", "Good", "Good", "Moderate", "Moderate", "Moderate", "Moderate", "Moderate"],
  ["Deep learning fundamentals", "Deep", "Good", "Good", "Good", "Good", "Good", "Deep", "Good", "Moderate", "Moderate"],
  ["CNNs / computer vision", "Deep", "Moderate", "Good", "Good", "Good", "Good", "Good", "Good", "Moderate", "Basic"],
  ["Sequence models (RNN/LSTM)", "Deep", "Moderate", "Good", "Good", "Moderate", "Moderate", "Good", "Good", "Basic", "Basic"],
  ["Transformers & attention", "Deep", "Moderate", "Moderate", "Moderate", "Moderate", "Moderate", "Good", "Moderate", "Basic", "Basic"],
  ["Applied NLP", "Deep", "Moderate", "Good", "Good", "Good", "Good", "Good", "Good", "Moderate", "Moderate"],
  ["PyTorch / TensorFlow", "Deep (PyTorch-first)", "Good", "Good", "Good", "Good", "Good (TF/Keras)", "Good", "Deep", "Moderate", "Moderate"],
  ["LLM fundamentals", "Deep", "Moderate–Good", "Moderate", "Good", "Good", "Moderate", "Good", "Moderate", "Moderate", "Good"],
  ["Prompt engineering (advanced)", "Comprehensive", "Good", "Moderate", "Good", "Good", "Moderate", "Good", "Moderate", "Moderate", "Good"],
  ["Embeddings & vector databases", "Deep", "Moderate", "Basic", "Moderate", "Moderate", "Basic", "Moderate", "Basic", "Basic", "Moderate"],
  ["RAG (basic → production)", "Deep — chunking, hybrid, re-ranking, eval", "Moderate", "Basic–Moderate", "Moderate", "Moderate", "Basic", "Moderate", "Basic", "Basic", "Moderate"],
  ["Fine-tuning (SFT, LoRA, QLoRA, DPO)", "Deep", "Limited", "Limited", "Moderate", "Moderate", "Limited", "Moderate", "Limited", "Limited", "Basic"],
  ["AI agents & agentic patterns", "Deep", "Limited–Moderate", "Limited", "Moderate", "Moderate", "Limited", "Limited", "Limited", "Limited", "Basic"],
  ["Agent frameworks (LangGraph, CrewAI, AutoGen)", "Comprehensive", "Limited", "Not covered", "Limited", "Limited", "Not covered", "Limited", "Not covered", "Not covered", "Limited"],
  ["MCP & tool integration", "Covered", "Not yet", "Not covered", "Limited", "Limited", "Not covered", "Not yet", "Not covered", "Not covered", "Not covered"],
  ["Open-weight models (Llama, Mistral, Qwen)", "Comprehensive + local", "Limited", "Limited", "Limited", "Moderate", "Limited", "Limited", "Limited", "Limited", "Moderate"],
  ["Multi-modal AI", "Covered", "Limited", "Limited", "Moderate", "Moderate", "Limited", "Moderate", "Moderate", "Limited", "Basic"],
  ["LLM evaluation & guardrails", "Deep", "Moderate", "Limited", "Moderate", "Moderate", "Limited", "Moderate", "Moderate", "Limited", "Basic"],
  ["MLOps (tracking, CI/CD, monitoring)", "Deep", "Good", "Moderate", "Moderate", "Good", "Moderate", "Not covered", "Moderate", "Basic", "Basic"],
  ["Deployment (Docker, FastAPI)", "Production-grade", "Good", "Moderate", "Moderate", "Good", "Moderate", "Not covered", "Moderate", "Basic", "Basic"],
  ["Responsible AI & governance", "Covered", "Moderate", "Good", "Good", "Moderate", "Good", "Moderate", "Good", "Basic", "Basic"],
  ["AI system design", "Deep", "Good", "Moderate", "Moderate", "Moderate", "Basic", "Not covered", "Basic", "Basic", "Basic"],
  ["Portfolio-grade projects", "10–15", "5–10", "8–12 (assignment)", "8–12", "6–12", "5–10", "5–10 (labs)", "6–10 (labs)", "4–8", "4–8"],
];

const DELIVERY_ROWS: string[][] = [
  ["Genuinely live (not replays)", "Yes (live IST)", "Yes", "Yes (mixed)", "Yes (weekend)", "Yes (hybrid)", "Partial (masterclasses only)", "No", "No", "Yes", "Partial"],
  ["Timing fit for working professionals", "Excellent (eve/weekend IST)", "Good", "Good", "Excellent (weekend)", "Good", "Good", "N/A", "N/A", "Good", "Good"],
  ["Doubt resolution", "In-session + mentor channels", "Strong TA network", "Ticket + sessions", "Mentor sessions + forum", "Live support + forum", "Forum, limited live", "Forum only", "Forum only", "Regional support", "Community + doubt sessions"],
  ["Human code review", "Yes", "Yes", "Partial", "Yes", "Partial", "Limited", "No", "No", "Partial", "Limited"],
  ["1:1 mentor access", "Yes", "Yes", "Yes", "Yes", "Partial", "Limited", "No", "No", "Partial", "Limited"],
  ["Recordings & catch-up", "Yes + catch-up sessions", "Yes", "Yes", "Yes", "Yes", "Yes", "N/A", "N/A", "Yes", "Yes"],
  ["Cohort accountability", "Strong", "Strong", "Moderate", "Moderate", "Moderate", "Weak", "None", "None", "Moderate", "Moderate"],
  ["Dropout prevention", "Tracking, catch-up, transfer", "Strong", "Academic deadlines", "Deadlines + mentor nudges", "Moderate", "Weak", "None", "None", "Community", "Community"],
  ["Platform & mobile", "Good", "Good", "Good", "Good", "Moderate", "Good", "Excellent", "Excellent", "Good (mobile-first)", "Good (mobile-first)"],
  ["Bandwidth (Tier-2/3)", "Good", "Good", "Good", "Good", "Good", "Good", "Good", "Good", "Excellent", "Excellent"],
  ["Deferral / pause policy", "Yes", "Yes", "Partial", "Partial", "Partial", "Limited", "N/A", "N/A", "Partial", "Partial"],
  ["Realistic completion", "High", "High", "Moderate–High", "Moderate–High", "Moderate", "Moderate", "Low", "Low", "Moderate", "Moderate"],
];

export function PartTwo() {
  return (
    <>
      <Section id="top-10" eyebrow="Section 5" title="Top 10 Best Online AI Courses in India (2026) — At a Glance">
        <p>
          This ranking weighs six things: AI curriculum depth and 2026 relevance (25%), online delivery quality
          (20%), hands-on project rigour (20%), career outcomes and support (15%), accessibility and fit for
          Indian learners (10%), and value for money (10%). Delivery is weighted heavily on purpose — across
          every learner cohort I tracked, delivery predicted completion, and completion predicted outcome far more
          reliably than syllabus quality did.
        </p>
        <p>
          <strong>"#1" does not mean "right for everyone."</strong> A manager wanting AI literacy and a 26-year-old
          engineer targeting a GenAI role should not buy the same product. That's why every table below carries a
          "best for" dimension, and why the honourable mentions section exists.
        </p>

        <h3 id="ranked-list">The ranked list</h3>
        <ol className="!pl-5">
          {COURSES.map((c) => (
            <li key={c.id}>
              <a href={`#review-${c.id}`}>
                <strong>{c.name}</strong>
              </a>{" "}
              — {c.tagline}
            </li>
          ))}
        </ol>

        <h3 id="table-1">Table 1 — Overview at a glance</h3>
        <p className="text-[0.92rem] text-muted-foreground">
          Curriculum depth, 2026 relevance and project counts are scored separately in Table 2, so this table stays
          on the variables a reader scans first.
        </p>
        <DataTable
          head={["#", "Course", "Delivery", "Fees (₹)", "Duration", "Capability ceiling", "Best for"]}
          rows={[
            ["1", "LogicMojo AI & ML", "Live IST cohort + recordings", "₹XX,XXX (EMI)", "X months", "Level 4–5", "Full-stack AI depth with live mentorship at accessible pricing"],
            ["2", "Scaler DS/ML/AI", "Live IST cohort", "₹3–4L (EMI)", "11–18 mo", "Level 4", "Product-company and GCC placement goals"],
            ["3", "upGrad PGP (IIIT-B)", "Live + recorded, academic cadence", "₹1.5–3.5L (EMI)", "12–18 mo", "Level 3–4", "Career switchers needing a university credential"],
            ["4", "Great Learning PGP-AIML", "Weekend live mentor sessions + recorded", "₹1.5–3.5L (EMI)", "7–12 mo", "Level 3–4", "Working professionals wanting structure + global brand"],
            ["5", "Intellipaat AI & ML", "Live + self-paced hybrid", "₹80K–₹2L (EMI)", "6–12 mo", "Level 3–4", "IIT-branded credential without premium pricing"],
            ["6", "Simplilearn PGP (Purdue/IBM)", "Live masterclasses + self-paced core", "₹1.5–2.5L (EMI)", "11 mo", "Level 3–4", "Employer-sponsored corporate upskilling"],
            ["7", "DeepLearning.AI", "Fully self-paced", "Free–₹4K/mo", "3–6 mo", "Level 2–3", "World-class ML/DL foundations at minimal cost"],
            ["8", "IBM AI Engineering", "Fully self-paced", "Free–₹4K/mo", "3–6 mo", "Level 2–3", "Applied AI practice on a tight budget"],
            ["9", "GUVI", "Live + recorded, vernacular", "₹10K–₹80K", "3–9 mo", "Level 2–3", "Vernacular learners; Tier-2/3 accessibility"],
            ["10", "PW Skills DS + GenAI", "Recorded + live doubt sessions", "₹5K–₹30K", "4–8 mo", "Level 2–3", "Students and budget-constrained beginners"],
          ]}
          caption="Fees are indicative as of [VERIFY: month/year], change frequently, and are usually negotiable on a sales call. Confirm current fee, GST treatment, EMI interest and refund window in writing before paying."
        />

        <h3 id="table-2">Table 2 — AI curriculum depth scorecard</h3>
        <p className="text-[0.92rem] text-muted-foreground">
          The most important table in this article. One vocabulary across every course: Deep / Good / Moderate /
          Basic / Not covered. Scroll horizontally on mobile.
        </p>
        <DataTable head={SCORE_HEAD} rows={SCORE_ROWS} dense />
        <p>
          Read the <strong>last third of that table</strong>, not the first. Everyone teaches pandas. What separates
          a 2026 course from a 2023 one is production RAG, fine-tuning, agents and agent frameworks, MCP,
          open-weight models, LLM evaluation, MLOps and deployment. Prompting and a basic API call are now baseline
          literacy — they are not differentiation, and any program selling them as its GenAI module is selling you
          2023.
        </p>
        <Callout label="Honest counterpoint">
          Depth is not automatically better <em>for you</em>. A product manager who needs to scope AI projects has
          no use for QLoRA, and paying for that depth is a waste. Match the ceiling to your goal, not to the table.
        </Callout>

        <h3 id="table-3">Table 3 — Online delivery experience scorecard</h3>
        <DataTable head={SCORE_HEAD.map((h, i) => (i === 0 ? "Delivery factor" : h))} rows={DELIVERY_ROWS} dense />
        <p>
          The last row — <strong>realistic completion</strong> — is the most predictive line in this entire article.
          A ₹0 course you don't finish returns less than a ₹60,000 course you do. For a working professional,
          structure is not an inconvenience wrapped around the content. It <em>is</em> the product.
        </p>

        <h3 id="table-4">Table 4 — Fees, EMI and total cost of ownership</h3>
        <DataTable
          head={["Course", "Headline fee (₹)", "EMI", "No-cost EMI", "Refund window", "Hidden costs to check", "Capability per ₹"]}
          rows={[
            ["LogicMojo", "₹XX,XXX", "Yes", "[VERIFY]", "[VERIFY]", "Cloud / API credits", "Very high"],
            ["Scaler", "₹3–4L", "Yes (long tenure)", "Partial", "[VERIFY]", "Long duration = long EMI tenure", "Moderate (broader program)"],
            ["upGrad", "₹1.5–3.5L", "Yes", "Often", "[VERIFY]", "GST, late-fee policy", "Moderate"],
            ["Great Learning", "₹1.5–3.5L", "Yes", "Often", "[VERIFY]", "Campus immersion travel", "Moderate"],
            ["Intellipaat", "₹80K–₹2L", "Yes", "Often", "[VERIFY]", "Exam fees", "Good"],
            ["Simplilearn", "₹1.5–2.5L", "Yes", "Often", "[VERIFY]", "Exam vouchers", "Moderate"],
            ["DeepLearning.AI", "Free–₹4K/mo", "N/A", "N/A", "Coursera policy", "Subscription creep", "Excellent"],
            ["IBM (Coursera)", "Free–₹4K/mo", "N/A", "N/A", "Coursera policy", "Subscription creep", "Excellent"],
            ["GUVI", "₹10K–₹80K", "Yes", "Partial", "[VERIFY]", "Add-on modules", "Good"],
            ["PW Skills", "₹5K–₹30K", "Yes", "Partial", "[VERIFY]", "Support add-ons", "Very good"],
          ]}
        />
        <Callout tone="warn" label="The EMI trap">
          A 24-month EMI on a program abandoned in month three is the most common financial regret in Indian
          EdTech. Three rules: get the refund policy in writing with the exact cut-off date; establish whether the
          EMI is a <strong>bank loan</strong> (which continues regardless of whether you attend a single class);
          and when in doubt, prefer the shorter program. Duration is risk.
        </Callout>

        <h3 id="table-5">Table 5 — Career support and outcomes</h3>
        <DataTable
          head={["Course", "Support type", "AI-role-specific", "Interview prep", "Portfolio review", "How to read their claims", "Bond / ISA"]}
          rows={[
            ["LogicMojo", "Career guidance, portfolio review, interview prep", "Yes", "Strong (technical + defence)", "Yes", "Skill depth, not guarantees", "No bond"],
            ["Scaler", "Placement infrastructure + partners", "Yes", "Very strong (DSA, system design, ML)", "Yes", "Published data — read the eligibility criteria", "No bond (verify)"],
            ["upGrad", "Career services team, job board", "Partial", "Moderate", "Partial", '"Assistance", not guarantee', "No"],
            ["Great Learning", "Resume + mock interviews", "Partial", "Moderate", "Partial", '"Assistance", not guarantee', "No"],
            ["Intellipaat", "Job assistance, resume prep", "Partial", "Moderate", "Partial", "Verify partner-list currency", "No"],
            ["Simplilearn", "Career services, job board", "Partial", "Moderate", "Limited", "Enterprise-oriented", "No"],
            ["DeepLearning.AI", "None", "No", "None", "No", "None claimed — honest about it", "No"],
            ["IBM (Coursera)", "None", "No", "None", "No", "None claimed", "No"],
            ["GUVI", "Regional placement support", "Partial", "Moderate", "Partial", "Strong for Tier-2/3 entry roles", "Varies"],
            ["PW Skills", "Growing placement cell", "Partial", "Basic–Moderate", "Limited", "Entry-level focused", "Varies"],
          ]}
        />
        <p>
          <strong>How to read any placement claim — five questions.</strong> What percentage of{" "}
          <em>enrolled</em> learners (not "eligible" learners) were placed? Over what time window? What is the{" "}
          <em>median</em> salary, not the average, which one ₹45L outlier can distort? Are these AI roles or any
          tech role? And: can I speak to two alumni from the last six months whom you did not hand-pick?
        </p>

        <h3 id="table-6">Table 6 — Prerequisites and accessibility</h3>
        <DataTable
          head={["Course", "Coding prerequisite", "Maths prerequisite", "Bridge module", "Vernacular", "Non-tech friendly", "Weekly hours"]}
          rows={[
            ["LogicMojo", "Basic Python helpful; onboarding provided", "None assumed; built up", "Yes", "English", "Yes", "10–15"],
            ["Scaler", "Programming aptitude expected", "Built into track", "Yes", "English", "Partial", "15–20"],
            ["upGrad", "Some technical comfort", "Academic maths included", "Yes", "English", "Yes", "10–15"],
            ["Great Learning", "Basic computer comfort", "Built up gradually", "Yes", "English", "Yes", "8–12"],
            ["Intellipaat", "Basic programming helpful", "Moderate", "Partial", "English + some Hindi", "Partial", "10–15"],
            ["Simplilearn", "Basic programming helpful", "Moderate", "Partial", "English", "Partial", "8–12"],
            ["DeepLearning.AI", "Python for the deeper courses", "Notation comfort helps", "No", "English", "Partial", "Flexible"],
            ["IBM (Coursera)", "Python required", "Basic", "Partial", "English", "Partial", "Flexible"],
            ["GUVI", "None for entry tracks", "Basic", "Yes", "Tamil / Hindi / Telugu / Kannada + English", "Yes", "8–12"],
            ["PW Skills", "None for entry tracks", "Basic", "Yes", "Hindi + English", "Yes", "8–12"],
          ]}
        />
      </Section>

      <WhyLogicMojo />

      <Section id="reviews" eyebrow="Section 7" title="In-Depth Reviews — All 10 Courses, Identical Structure">
        <p>
          Every course below is reviewed on the same eight headings so you can compare like with like. Every one
          also carries a <strong>limitations</strong> block, including the #1 pick — a review with no criticism is
          an advertisement.
        </p>

        {COURSES.map((c) => (
          <article key={c.id} id={`review-${c.id}`} className="card-lm reveal mt-12 scroll-mt-36 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
                {c.rank}
              </span>
              <Pill>{c.score}</Pill>
            </div>
            <h3 className="!mt-3 !mb-1">{c.name}</h3>
            <p className="!mt-0 font-display text-[1.02rem] italic text-muted-foreground">{c.tagline}</p>

            <dl className="my-5 grid gap-x-6 gap-y-2 rounded-xl bg-muted p-4 sm:grid-cols-2">
              {c.snapshot.map((s) => (
                <div key={s.label} className="flex flex-wrap gap-2 text-[0.86rem]">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="font-medium text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>

            <h4>What it is</h4>
            <p>{c.what}</p>
            <h4>Curriculum depth</h4>
            <p>{c.curriculum}</p>
            <h4>Online delivery quality</h4>
            <p>{c.delivery}</p>
            <h4>Projects and portfolio output</h4>
            <p>{c.projects}</p>
            <h4>Career support</h4>
            <p>{c.career}</p>
            <h4>Who it's genuinely for</h4>
            <p>{c.fit}</p>
            <h4 className="text-warning">Real limitations</h4>
            <ul>
              {c.limits.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <Callout tone="accent" label="Verdict">
              {c.verdict}
            </Callout>

            <RatingBlock id={c.id} />

            {c.id === "logicmojo" ? (
              <div className="mt-6 rounded-xl border border-accent/40 bg-accent/10 p-5">
                <h4 className="!mt-0">Deep dive: why LogicMojo takes #1 — and where it doesn't</h4>
                <p>
                  I did not rank this first because of a brand, a placement statistic or a university logo. It ranks
                  first on one measurable thing: <strong>the distance between where a committed learner starts and
                  what they can defend in an interview at the end</strong>, divided by what they paid.
                </p>
                <p>
                  Three specifics carry that. First, <strong>Layer 5 is taught as engineering, not as a demo</strong>
                  . Most programs teach RAG as "embed documents, query vector store, done." Here, retrieval quality
                  is treated as the actual problem — chunking strategy, hybrid search, re-ranking, and an evaluation
                  harness that tells you whether your changes helped. That is the exact conversation a 2026 screening
                  round has.
                </p>
                <p>
                  Second, <strong>Layer 6 exists</strong>. Docker, FastAPI, MLflow, monitoring and drift. The gap
                  between a learner who has deployed a model behind an API and one who has not is the gap between
                  two salary bands, and most Indian online programs leave that gap open.
                </p>
                <p>
                  Third, <strong>a human reads your code</strong>. Nothing else in online education substitutes for
                  it. Auto-graded notebooks tell you the output matched; a reviewer tells you your validation split
                  leaked, your metric is wrong for the class imbalance, and your README wouldn't survive a recruiter.
                </p>
                <p className="!mb-0">
                  <strong>Where it genuinely loses people:</strong> the pace punishes learners who arrive without
                  Python; the live IST schedule is unforgiving of unpredictable work; the brand won't impress an HR
                  filter the way "IIIT-Bangalore" does; and there is no large recruiter pipeline handing you
                  interviews. If your bottleneck is <em>access to interviews</em> rather than{" "}
                  <em>capability in interviews</em>, Scaler is the more honest purchase.
                </p>
              </div>
            ) : null}
          </article>
        ))}
      </Section>
    </>
  );
}