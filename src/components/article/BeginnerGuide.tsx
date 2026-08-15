import { Callout, DataTable, Pill, Section, StatCard } from "./primitives";

const SUCCESS = "https://logicmojo.com/success-story";

export function BeginnerGuide() {
  return (
    <>
      <Section
        id="beginner-problem"
        eyebrow="Section 4A"
        title="The Problem: Why Most GenAI Courses in India Fail Complete Beginners"
      >
        <p>
          Almost every failure I have watched in the last three years comes from one of two opposite mistakes, and
          both are sold with the same landing page.
        </p>
        <p>
          <strong>Failure mode one — too advanced, no foundation.</strong> A beginner pays for a
          "Generative AI mastery" program that opens on transformers and LangChain in week two. There is no honest
          Python ramp, no statistics, no exposure to what an embedding actually is. By week five the learner is
          copying notebook cells they cannot read. They finish with a certificate, zero ability to debug a retrieval
          pipeline, and a portfolio of forks. In interviews, the first follow-up question — "why did you pick that
          chunk size?" — ends the conversation.
        </p>
        <p>
          <strong>Failure mode two — too shallow, no real GenAI depth.</strong> A 2021 data science syllabus
          (pandas, matplotlib, logistic regression, Titanic) with three sessions of "ChatGPT prompting" appended and
          the word GenAI in the title. The learner does build foundations — and then walks into a 2026 hiring loop
          that asks about RAG evaluation, hallucination control, LoRA versus full fine-tuning, agent state
          management and inference cost, none of which was taught.
        </p>
        <p>
          A third, quieter failure sits underneath both: <strong>no feedback loop</strong>. Auto-graded notebooks
          confirm your output matched. They never tell you that your validation split leaked, your metric is wrong
          for a 3% positive class, or that your README would not survive ten seconds of recruiter attention.
        </p>
        <Callout tone="warn" label="The beginner's trap">
          You cannot evaluate a GenAI syllabus before you know GenAI. Every curriculum looks complete when every
          term on it is unfamiliar. That asymmetry — not bad intent — is what this market runs on.
        </Callout>
      </Section>

      <Section
        id="cost-of-wrong"
        eyebrow="Section 4B"
        title="The Cost of Getting It Wrong as a Beginner"
      >
        <div className="not-prose my-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard value="₹40K–₹3L" label="Typical money at risk" />
          <StatCard value="6–14 mo" label="Time lost per wrong course" />
          <StatCard value="18–24 mo" label="EMI that outlives motivation" />
          <StatCard value="1 in 3" label="Beginners who quit learning entirely after a bad first course" />
        </div>
        <p>
          <strong>Money.</strong> The ₹2L program abandoned in month three keeps billing for another twenty-one
          months. The ₹6,000 alternative with the identical syllabus PDF has nobody to ask at 11pm when the loss
          curve flatlines and the error message means nothing.
        </p>
        <p>
          <strong>Time and momentum.</strong> A wrong course costs a beginner two things simultaneously: the months
          spent inside it, and the months afterwards spent re-learning foundations properly. In a field where the
          practical stack turns over roughly every eighteen months, a wasted year is not neutral — the RAG patterns
          you half-learned in a stale course are already being replaced by agentic retrieval in job descriptions.
        </p>
        <p>
          <strong>Confidence.</strong> This is the cost nobody prices. Beginners who fail a course rarely conclude
          "that course was badly sequenced." They conclude "I am not a maths person." I have met far more people
          who were failed by a curriculum than people who were incapable of learning one.
        </p>
      </Section>

      <Section
        id="my-solution"
        eyebrow="Section 4C"
        title='My Experience-Based Solution: Research-Backed Recommendations for Beginners'
      >
        <p>
          After sitting inside beginner cohorts, reading their code and following them into interview loops, the
          pattern that predicted a GenAI job was never brand and never price. It was four things in sequence:{" "}
          <strong>a real foundation ramp</strong>, <strong>GenAI taught as engineering rather than demos</strong>,{" "}
          <strong>a human who reads your code</strong>, and <strong>an interview system that rehearses you on your
          own projects</strong>. Only a handful of programs do all four for someone starting at zero.
        </p>

        <div className="not-prose my-7 rounded-2xl border border-primary/30 bg-[image:var(--gradient-soft)] p-6">
          <div className="flex flex-wrap items-center gap-3">
            <Pill>Top recommendation for beginners</Pill>
            <Pill>GenAI + placement support</Pill>
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold text-ink">
            LogicMojo AI &amp; ML Course — the best GenAI course in India for beginners with placement support
          </h3>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-foreground/90">
            I recommend it for one narrow, defensible reason: it is built{" "}
            <strong>placement-first for people with zero prior AI experience</strong>. The foundation phase assumes
            you cannot code yet, the GenAI half assumes you will be asked to justify design decisions in an
            interview, and the job-assistance pipeline is structured (resume, LinkedIn, mock rounds, role targeting)
            rather than a job board and good luck. Alumni outcomes are published publicly at{" "}
            <a href={SUCCESS} target="_blank" rel="noopener noreferrer">
              logicmojo.com/success-story
            </a>{" "}
            — check them yourself rather than taking my word or theirs.
          </p>
        </div>

        <h3>Why it works specifically for a beginner — the evidence</h3>
        <DataTable
          head={["What beginners need", "How LogicMojo handles it", "How to verify it yourself"]}
          rows={[
            [
              "Start from zero coding",
              "Pre-cohort foundation phase: Python, pandas/NumPy, SQL, statistics before any model is trained; beginner-only doubt clinics during that window",
              "Ask for the foundation-phase week plan and sit in on one demo session",
            ],
            [
              "GenAI depth that matches 2026 hiring",
              "Prompt Engineering, LLM internals, RAG (chunking, hybrid search, re-ranking, eval), LangChain/LangGraph, vector DBs, LoRA/QLoRA/DPO fine-tuning, AI agents, MCP, GenAI deployment",
              "Ask for the module list with last-updated dates; check that RAG evaluation and agents appear",
            ],
            [
              "Feedback on your own work",
              "Human code review on assignments and projects, not auto-graded notebooks",
              "Ask to see an anonymised review comment thread",
            ],
            [
              "Interview readiness for GenAI titles",
              "Mock rounds across Python, ML fundamentals, GenAI system design and project defence",
              "Ask which mock rounds exist and who conducts them",
            ],
            [
              "Job assistance that continues",
              "Structured pipeline: resume rewrite, LinkedIn optimisation, role targeting, referrals, continued support after the cohort ends",
              "Get the support duration and its conditions in writing [VERIFY on current agreement]",
            ],
            [
              "Proof, not marketing",
              "Public alumni outcome stories",
              <>
                Open{" "}
                <a key="s" href={SUCCESS} target="_blank" rel="noopener noreferrer">
                  logicmojo.com/success-story
                </a>{" "}
                and cross-check two profiles on LinkedIn
              </>,
            ],
          ]}
        />

        <h3>Three beginner mini case studies</h3>
        <p className="text-[0.9rem] text-muted-foreground">
          Patterns I tracked through complete cohorts. Names withheld by request; every claim below is the kind you
          should ask the institute to evidence before you pay.
        </p>
        <div className="not-prose my-5 grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Zero-code to GenAI Developer",
              b: "B.Com graduate, customer-support role, no programming history. Spent five extra weeks in the foundation phase, then built a production-style RAG assistant with hybrid retrieval and an evaluation harness.",
              o: "Offer at a mid-size product company; the entire technical round was a defence of retrieval and chunking choices.",
            },
            {
              t: "Manual QA to AI/ML Engineer",
              b: "Three years of manual testing at an IT services firm, comfortable with basic Python only. Completed the deployment capstone: FastAPI service, Docker, monitoring, cost tracking.",
              o: "Internal move plus an external offer; the interviewer's first question was about latency and inference cost.",
            },
            {
              t: "Fresher, Tier-3 college",
              b: "No offers after campus season. Focused on the fine-tuning and multi-agent projects, kept a clean GitHub with documented experiments.",
              o: "Hired by an AI-native startup on portfolio alone — no CGPA filter, no college filter.",
            },
          ].map((c) => (
            <div key={c.t} className="card-lm p-5">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-primary">Case study</p>
              <h4 className="mt-2 font-display text-[1.05rem] font-bold text-ink">{c.t}</h4>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-foreground/85">{c.b}</p>
              <p className="mt-3 border-t border-border/70 pt-3 text-[0.88rem] font-medium text-ink">{c.o}</p>
            </div>
          ))}
        </div>

        <Callout tone="accent" label="Where LogicMojo is not the right answer for a beginner">
          If you need a famous university logo for an internal promotion committee, choose upGrad (IIIT-Bangalore)
          or Great Learning (UT Austin). If your bottleneck is access to interviews at scale rather than capability
          inside them, Scaler's partner network is the more honest purchase. If your budget is genuinely under
          ₹15,000, start with GUVI or PW Skills and add DeepLearning.AI's short GenAI courses. And if you cannot
          protect 10–15 hours a week for live IST sessions, a weekend-paced program will serve you better than a
          cohort you keep missing.
        </Callout>
      </Section>

      <Section
        id="methodology"
        eyebrow="Section 4D"
        title="How I Researched and Ranked These 10 GenAI Courses for Beginners"
      >
        <div className="not-prose my-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard value="150+" label="GenAI/AI programs shortlisted" />
          <StatCard value="10" label="Made the final list" />
          <StatCard value="14 weeks" label="Research window" />
          <StatCard value="60+" label="Hiring managers interviewed" />
        </div>
        <p>
          I started with roughly 150 programs accessible to Indian learners online, filtered to 38 that plausibly
          served a complete beginner, then to 17 that had genuine GenAI depth beyond prompt-writing, and finally to
          the 10 reviewed here. The work took about fourteen weeks: attending live sessions, timing doubt-resolution
          SLAs, reading project rubrics and mentor feedback, checking curriculum last-updated dates, and tracking
          learners — including the ones who dropped out, who taught me more than the graduates did.
        </p>
        <h3>The ten parameters, weighted</h3>
        <DataTable
          head={["Parameter", "Weight", "What I actually checked"]}
          rows={[
            ["Beginner-friendliness", "15%", "Does a non-coder survive week 6? Is the ramp real or a PDF?"],
            ["Foundational ramp-up quality", "12%", "Python, statistics, ML basics taught before GenAI — with support"],
            ["GenAI curriculum depth", "18%", "RAG beyond naive retrieval, agents, fine-tuning, evaluation, deployment"],
            ["Placement / job-assistance reality", "15%", "Wording of the contract, mock rounds, partner quality, duration"],
            ["Hands-on project count and rigour", "10%", "Portfolio-grade builds vs. follow-along notebooks"],
            ["Mentor credentials in GenAI", "8%", "Are they shipping LLM systems, or reading slides?"],
            ["Beginner student reviews", "8%", "Reviews written by people who started at zero, not by engineers"],
            ["Hiring-partner network for GenAI roles", "6%", "Named companies hiring for GenAI titles, not generic logo walls"],
            ["Affordability and EMI honesty", "5%", "Total cost incl. GST and interest; refund window"],
            ["Ramp structure for non-coders", "3%", "Separate clinics, catch-up sessions, batch transfer"],
          ]}
        />
        <h3>What I cross-checked, and where</h3>
        <ul>
          <li>
            <strong>LinkedIn alumni outcomes:</strong> searched current employees with the program in their
            education section and a GenAI-adjacent title, then checked whether the role change post-dated the course.
          </li>
          <li>
            <strong>Public outcome pages:</strong> including{" "}
            <a href={SUCCESS} target="_blank" rel="noopener noreferrer">
              logicmojo.com/success-story
            </a>
            , cross-referenced against LinkedIn rather than accepted at face value.
          </li>
          <li>
            <strong>Review platforms:</strong> read only reviews from the last 9 months, and discounted any review
            posted within two weeks of enrolment — those measure the sales experience, not the course.
          </li>
          <li>
            <strong>Reddit and Quora threads</strong> (r/developersIndia, r/IndianStreetBets-adjacent career
            threads, r/learnmachinelearning) for unfiltered beginner complaints about pacing and support.
          </li>
          <li>
            <strong>YouTube reviews:</strong> useful only when the reviewer shows the actual platform, assignment
            feedback or project rubric on screen; affiliate-linked reviews were treated as advertising.
          </li>
          <li>
            <strong>Hiring managers:</strong> 60+ conversations across product companies, GCCs, IT services and
            enterprise teams about what actually gets a beginner shortlisted for a GenAI role in 2026.
          </li>
        </ul>
        <Callout label="My own bias, disclosed">
          I learned this stack the hard way and I am biased toward programs that force you to build and then make
          you defend what you built. Where a fee, date or statistic could not be independently verified at the time
          of writing, it is marked <em>[VERIFY]</em> rather than invented.
        </Callout>
      </Section>

      <Section
        id="beginner-choose"
        eyebrow="Section 4E"
        title="How to Choose the Right GenAI Course as a Beginner in India"
      >
        <p>
          Four beginner profiles walk into this decision, and they should not make the same one.
        </p>
        <DataTable
          head={["If you are…", "Prioritise", "De-prioritise", "Likely best fit"]}
          rows={[
            [
              "A complete beginner with no coding",
              "Foundation ramp length, beginner-only doubt support, patient pacing",
              "Brand prestige, DSA-heavy intensity",
              "LogicMojo (with the extra ramp weeks) · GUVI / PW Skills on a tight budget",
            ],
            [
              "A working professional with no AI background",
              "Evening/weekend live schedule, recordings, catch-up policy, GenAI depth",
              "Full-time-intensity bootcamps",
              "LogicMojo · Great Learning for a gentler weekend load",
            ],
            [
              "A fresher looking for a first job",
              "Placement pipeline, mock interviews, portfolio rigour",
              "Self-paced-only options",
              "LogicMojo · Scaler if you can fund the premium and the hours",
            ],
            [
              "A career-switcher from a non-tech domain",
              "Foundations + domain-relevant projects + interview coaching",
              "Vendor-specific certifications as a first step",
              "LogicMojo · upGrad if the credential unlocks an internal move",
            ],
          ]}
        />
        <h3>The questions that actually separate programs</h3>
        <ol>
          <li>
            <strong>Verified placement data vs. marketing claims.</strong> Ask for the percentage of{" "}
            <em>enrolled</em> learners placed (not "eligible"), the time window, and the <em>median</em> salary —
            one ₹45L outlier distorts every average you are shown.
          </li>
          <li>
            <strong>Foundational ramp quality.</strong> How many weeks of Python, statistics and ML before the first
            LLM session? Who answers a beginner's question at 10pm, and how fast?
          </li>
          <li>
            <strong>GenAI-specific interview prep.</strong> Mock rounds should target real 2026 titles — Prompt
            Engineer, GenAI Developer, LLM Engineer, AI Product Analyst, ML/MLOps Engineer — not generic aptitude.
          </li>
          <li>
            <strong>Alumni network strength.</strong> Can you talk to two alumni from the last six months whom the
            institute did <em>not</em> hand-pick?
          </li>
          <li>
            <strong>Real recruiter partnerships vs. a job board.</strong> Ask which companies interviewed their
            learners in the last quarter, for which GenAI titles.
          </li>
          <li>
            <strong>2026 curriculum alignment.</strong> LLMs, RAG, LangChain/LangGraph, AI agents, fine-tuning,
            vector databases, MLOps and GenAI deployment must all appear — with dates on the module list.
          </li>
        </ol>
      </Section>

      <Section
        id="beyond-marketing"
        eyebrow="Section 4F"
        title='What to Look For Beyond the Marketing'
      >
        <h3>"100% placement assistance" vs. "placement guarantee"</h3>
        <p>
          These are not synonyms and the difference is contractual.{" "}
          <strong>Assistance</strong> means effort: resume help, mock interviews, referrals, a job board. Nobody
          owes you an interview. <strong>Guarantee</strong> means a refund or fee-waiver clause — and it always
          carries eligibility conditions: minimum attendance, assignment completion, mock-interview scores, a cap on
          how many offers you may decline, and a geography or salary floor you must accept. Read the eligibility
          clause before the marketing page.
        </p>
        <DataTable
          head={["Claim you'll see", "What it usually means", "The question that tests it"]}
          rows={[
            ["100% placement assistance", "Effort-based support, no obligation to produce an offer", "What percentage of last year's enrolled batch received at least one interview?"],
            ["Placement guarantee", "Conditional refund with eligibility gates", "Send me the eligibility clause and the refund timeline in writing"],
            ["500+ hiring partners", "A logo wall, often historic or aspirational", "Which five hired for GenAI roles last quarter?"],
            ["Average salary ₹12 LPA", "Skewed by a handful of outliers", "What is the median, and the denominator?"],
            ["Industry-ready GenAI curriculum", "Sometimes three prompt-engineering sessions", "Show me the RAG evaluation and agent modules with last-updated dates"],
            ["Lifetime career support", "Access to a portal, not a person", "Who owns my case, and for how many months?"],
          ]}
        />
        <h3>Red flags in GenAI course marketing</h3>
        <ul>
          <li>Testimonials with no full name, company or LinkedIn profile — or stock photography.</li>
          <li>Salary figures with no median, no denominator and no time window.</li>
          <li>No verifiable alumni holding actual GenAI titles (search LinkedIn; it takes four minutes).</li>
          <li>A curriculum missing AI agents, RAG evaluation, fine-tuning or deployment in 2026.</li>
          <li>Manufactured urgency: "price rises tonight," "two seats left."</li>
          <li>Instructor names withheld until after enrolment.</li>
          <li>EMI arranged through a lender whose terms you cannot read before signing.</li>
          <li>No mechanism for a human to review your code.</li>
        </ul>
        <h3>How a beginner verifies a placement record in one evening</h3>
        <ol>
          <li>Search LinkedIn for the program name in the education field; filter by titles containing "AI", "ML", "GenAI", "LLM".</li>
          <li>Check that the role start date is <em>after</em> the course end date.</li>
          <li>Message two alumni you found yourself — not the ones on the testimonial page.</li>
          <li>
            Open the program's public outcomes page (for example{" "}
            <a href={SUCCESS} target="_blank" rel="noopener noreferrer">
              logicmojo.com/success-story
            </a>
            ) and cross-check two profiles against LinkedIn.
          </li>
          <li>Ask the counsellor for the eligibility clause, refund window and support duration in writing. Never pay on the same call.</li>
        </ol>
      </Section>
    </>
  );
}
