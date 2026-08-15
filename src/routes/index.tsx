import { createFileRoute } from "@tanstack/react-router";
import { PartOne } from "@/components/article/PartOne";
import { PartTwo } from "@/components/article/PartTwo";
import { PartThree } from "@/components/article/PartThree";
import { FAQS } from "@/components/article/faqs";
import { Callout, DataTable, StatCard } from "@/components/article/primitives";

const TITLE =
  "Top 10 Best Online AI Courses in India 2026 — Honest Rankings";
const DESCRIPTION =
  "The best online AI courses in India for 2026, ranked on curriculum depth, live delivery quality, projects, fees, EMI and real career outcomes — with honest limitations for every pick.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TOC: { id: string; label: string }[] = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "intro", label: "Introduction: why this market is hard to judge" },
  { id: "capability-ladder", label: "The online AI learner's capability ladder" },
  { id: "what-online-means", label: 'What "online AI course" actually means in 2026' },
  { id: "skill-stack", label: "The 2026 AI skill stack" },
  { id: "top-10", label: "Top 10 online AI courses — at a glance" },
  { id: "table-2", label: "Curriculum depth scorecard" },
  { id: "table-3", label: "Online delivery scorecard" },
  { id: "table-4", label: "Fees, EMI and total cost" },
  { id: "table-5", label: "Career support and outcomes" },
  { id: "reviews", label: "In-depth reviews of all 10 courses" },
  { id: "also-considered", label: "Also considered — and why they missed" },
  { id: "how-to-choose", label: "How to choose the right course for you" },
  { id: "free-vs-paid", label: "Free vs. paid" },
  { id: "roi", label: "ROI and the EMI reality" },
  { id: "career-paths", label: "AI career paths in India (2026)" },
  { id: "roadmap", label: "Your 12-month roadmap" },
  { id: "red-flags", label: "Red flags before you pay" },
  { id: "faqs", label: "30+ FAQs" },
  { id: "author", label: "Author and expert reviewers" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="wrap flex items-center justify-between py-3.5">
          <span className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-[image:var(--gradient-primary)] font-display text-[0.8rem] font-bold text-primary-foreground">
              L
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-ink">LogicMojo</span>
          </span>
          <span className="hidden font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            AI Education Analysis · 2026
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="grid-bg absolute inset-0 opacity-70" aria-hidden="true" />
        <div
          className="float-orb pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="float-orb pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
          aria-hidden="true"
          style={{ animationDelay: "-4s" }}
        />
        <div className="wrap relative py-16 sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.07] px-3 py-1 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-primary">
            Updated [INSERT: month] 2026 · Independent ranking
          </span>
          <h1 className="mt-5 max-w-4xl text-balance font-display text-[2.3rem] font-extrabold leading-[1.06] tracking-tight text-ink sm:text-[3.2rem]">
            Top 10 Best <span className="gradient-text">Online AI Courses in India</span> for 2026
          </h1>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
            Curriculum depth, delivery quality, fees, projects and real career outcomes — 150+ programs assessed,
            with honest limitations for every single pick.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard value="150+" label="Programs assessed" />
            <StatCard value="10" label="Ranked picks" />
            <StatCard value="6" label="Comparison tables" />
            <StatCard value="34" label="FAQs answered" />
          </div>
        </div>
      </section>

      <main className="wrap prose-lm pb-24 pt-12">
        <div
          id="quick-answer"
          className="card-lm reveal my-2 scroll-mt-24 border-primary/25 bg-[image:var(--gradient-soft)] p-6"
        >
          <p className="!mt-0 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary">
            Quick answer
          </p>
          <p className="!mb-0 text-[1.02rem] leading-relaxed">
            The <strong>best online AI course in India</strong> for 2026 depends on what you're optimising for. For
            the deepest end-to-end AI curriculum with live IST mentorship and a full GenAI + agents stack at an
            accessible price, <strong>LogicMojo AI Course ranks #1</strong>. For premium placement infrastructure,{" "}
            <strong>Scaler</strong>. For a university credential, <strong>upGrad (IIIT-Bangalore)</strong> or{" "}
            <strong>Great Learning (UT Austin)</strong>. For world-class foundations at near-zero cost,{" "}
            <strong>DeepLearning.AI on Coursera</strong>. For the lowest-cost structured Indian option,{" "}
            <strong>PW Skills</strong> or <strong>GUVI</strong>. Full comparison, fees and honest limitations below.
          </p>
        </div>

        <section id="intro" className="reveal scroll-mt-24">
          <p>
            In 2026, AI is a line item in hiring plans across Indian product companies, GCCs, IT services, BFSI,
            healthcare and retail — and remote and hybrid work have made location far less binding than it was in
            2021. That combination is why the market for the <strong>best online AI courses in India</strong>{" "}
            exploded, and why choosing one has become genuinely difficult.
          </p>
          <p>
            There are hundreds of programs, from ₹0 to ₹4L+. Their landing pages are nearly indistinguishable: the
            same testimonial format, the same "industry-ready curriculum," the same "100% placement assistance," the
            same grid of hiring logos that may or may not have hired anyone from that program. Search results are
            dominated by affiliate listicles ranked by commission rather than quality. Fill in a form and a sales
            call arrives within four minutes.
          </p>
          <p>
            And underneath all of it sits the trap that makes this market work the way it does:{" "}
            <strong>you can't evaluate an AI curriculum, because you don't yet know enough AI to judge one.</strong>{" "}
            Every syllabus looks comprehensive when every term on it is unfamiliar.
          </p>

          <h3>The three ways online AI courses fail</h3>
          <p>
            <strong>1. The recycled curriculum.</strong> A 2021 data science course — pandas, matplotlib, linear
            regression, random forest, the Titanic dataset — with three generative AI sessions bolted onto the end
            and "AI" added to the title. The syllabus is not wrong, exactly. It is simply five years old in a field
            where eighteen months is a generation.
          </p>
          <p>
            <strong>2. The credential mirage.</strong> University or IIT branding purchased as a marketing asset
            while the platform's own instructors do the teaching. This isn't worthless — a recognisable credential
            genuinely helps past HR filters and in promotion committees. It's just not what ₹1.5L–₹3L implies, and
            almost nobody asks the follow-up question: which faculty, teaching how many hours, and what exactly does
            the certificate say?
          </p>
          <p>
            <strong>3. The delivery collapse.</strong> Good curriculum, bad delivery. "Live" classes that are
            replays with a chat moderator. Doubts sitting unanswered in a Discord channel for 48 hours. A mentor who
            is a recent graduate reading slides written by someone else. Auto-graded notebooks you can complete by
            copying without ever understanding what you copied.
          </p>

          <Callout tone="accent" label="The core insight">
            Online AI courses don't fail on curriculum. <strong>They fail on delivery.</strong> Two courses with
            identical syllabus PDFs produce completely different learners. What separates them: whether someone
            reviews your code, whether a question gets answered in the same session, whether projects force you to
            build rather than follow, and whether the structure makes you show up in Week 9 when the motivation is
            gone.
          </Callout>

          <h3>What choosing wrong actually costs</h3>
          <p>
            It's worth making this concrete, because the abstraction — "do your research" — helps nobody. Here is
            what I watched happen, repeatedly, to real people:
          </p>
          <ul>
            <li>The ₹2L program abandoned in month three, while the EMI runs for another twenty-one months.</li>
            <li>
              The ₹6,000 option with the same syllabus on paper — and nobody to ask at 11pm when the model won't
              converge and the error message means nothing.
            </li>
            <li>The excellent global MOOC where you become one of the 85% who never finish, and blame yourself.</li>
            <li>
              The course chosen for its university logo, where the interviewer skips the certificate entirely and
              asks why your model overfits.
            </li>
            <li>
              The "Generative AI" course that taught prompting and API calls, met by a screening round on chunking
              strategy and re-ranking.
            </li>
            <li>
              The course that never mentioned deployment, met by "how would you serve this to 10,000 users?"
            </li>
            <li>
              The 2024-recorded course taken in 2026, teaching deprecated patterns confidently, and therefore
              wrongly.
            </li>
            <li>
              The "placement assistance" that turns out to be one resume call and a login to a job board you could
              have found yourself.
            </li>
            <li>
              And the quietest one: finishing a course, holding a certificate, and having nothing you can open on a
              screen and defend.
            </li>
          </ul>
          <p>
            Contrast that with the learners who chose well. Six to twelve documented GitHub projects. The ability to
            whiteboard a RAG architecture without notes. A model deployed behind an API that someone other than
            them has called. And — the thing hiring managers kept naming — the ability to defend every line of it,
            including the parts that didn't work.
          </p>
          <Callout tone="warn">
            The financial cost of the wrong course is ₹50,000 to ₹3,00,000. The real cost is nine months spent
            learning things that don't compound — in a field where nine months is a generation.
          </Callout>

          <h3>How I evaluated these online AI courses</h3>
          <p>
            I assessed 150+ programs through a single question:{" "}
            <em>
              if I'm an Indian learner with a job, a laptop and 8–12 hours a week, will this course make me capable
              of doing AI work — and help me convert that into a role?
            </em>{" "}
            Six pillars, weighted, applied identically to every program in this article:
          </p>
          <ol>
            <li>
              <strong>AI curriculum depth and 2026 relevance (25%)</strong> — the full stack: ML foundations → deep
              learning → NLP/CV → GenAI, RAG and agents → MLOps/LLMOps → evaluation and responsible AI. Genuinely
              current, or 2023 content in a 2026 wrapper?
            </li>
            <li>
              <strong>Online delivery quality (20%)</strong> — genuinely live or replayed; doubt-resolution SLA;
              mentor quality and access; recordings; platform stability; cohort accountability.
            </li>
            <li>
              <strong>Hands-on project rigour (20%)</strong> — build or follow? Portfolio-grade with code review? A
              real capstone? Is anything actually deployed?
            </li>
            <li>
              <strong>Career outcomes and support (15%)</strong> — AI-role-specific or generic; interview prep
              depth; portfolio review; verifiable data or vague claims.
            </li>
            <li>
              <strong>Accessibility and fit for Indian learners (10%)</strong> — IST timings, ₹ pricing, EMI terms,
              prerequisite support, vernacular options, bandwidth, refund policy.
            </li>
            <li>
              <strong>Value for money (10%)</strong> — capability per rupee and per hour. Not "cheapest." Not "most
              expensive equals best."
            </li>
          </ol>
          <p>
            To be shortlisted at all, a program had to be fully completable online from anywhere in India, teach AI
            substantively (not adjacent tooling), carry a verified 2025–2026 curriculum, require hands-on building,
            be realistically accessible in price and schedule, and show demonstrable outcomes rather than marketing
            claims.
          </p>
        </section>

        <section id="capability-ladder" className="reveal scroll-mt-24">
          <h2>Visual 1 — The online AI learner's capability ladder</h2>
          <DataTable
            head={["Level", "What you can do", "What the 2026 Indian market calls this", "Courses that stop here"]}
            rows={[
              ["0 — AI Aware", "Read about AI, used ChatGPT", "Baseline literacy, not a skill", "Free webinars, 2-day workshops"],
              ["1 — AI User", "Use AI tools well; strong prompting", "Useful in any job. Not an AI role.", '"GenAI in 7 days," prompt workshops'],
              ["2 — AI Literate", "Understand training, embeddings, transformers, evaluation", "Passes a screening conversation", "MOOC intro tracks, university survey programs"],
              ["3 — AI Builder", "Train models, build RAG apps, write real pipelines", "Entry bar for junior AI/ML roles in India", "Good bootcamps, strong self-paced tracks"],
              ["4 — AI Engineer", "Architect, fine-tune, evaluate, deploy, monitor", "Where actual AI offers begin", "Programs with MLOps + deployment"],
              ["5 — AI Professional", "Own AI systems in production; make trade-off calls", "Mid/senior roles, ₹20L+ territory", "Experience built on a Level 4 foundation"],
            ]}
            caption="Most online AI courses in India deliver Level 1–2 and market it as Level 4. Indian AI hiring in 2026 starts at Level 3, and offers concentrate at Level 4. Every course here is scored on the highest level it can realistically take a committed learner to."
          />
        </section>

        <nav aria-label="Table of contents" className="card-lm reveal my-12 p-6">
          <h2 className="!mt-0 !text-xl">On this page</h2>
          <ol className="!mt-4 !list-none !pl-0 grid gap-2 sm:grid-cols-2">
            {TOC.map((t, i) => (
              <li key={t.id} className="!my-0">
                <a
                  href={`#${t.id}`}
                  className="!border-0 flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-[0.9rem] text-foreground transition-all hover:translate-x-1 hover:bg-primary/[0.06] hover:!text-primary"
                >
                  <span className="font-mono text-[0.7rem] text-primary/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <PartOne />
        <PartTwo />
        <PartThree />

        <section className="card-lm reveal mt-16 bg-[image:var(--gradient-soft)] p-7">
          <h2 className="!mt-0">The one-paragraph summary</h2>
          <p className="!mb-0">
            If you take one thing from 12,000 words: <strong>buy delivery, not syllabus</strong>. Check that the
            classes are genuinely live, that a human reads your code, that Layer 5 goes past prompting into
            production RAG, fine-tuning and agents, and that Layer 6 exists at all. Then choose the most ambitious
            program you can realistically finish — not the most ambitious one you can afford.
          </p>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-border bg-secondary/60">
        <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="wrap relative py-12">
          <p className="font-display text-xl font-bold text-ink">LogicMojo</p>
          <p className="mt-2 max-w-2xl text-[0.9rem] leading-relaxed text-muted-foreground">
            Live, instructor-led AI and machine learning training for Indian professionals — full-stack curriculum
            from classical ML through deep learning, generative AI, RAG, agents, MLOps and deployment, taught in
            IST evening and weekend batches with human code review.
          </p>
          <p className="mt-4 text-[0.8rem] text-muted-foreground">
            Editorial note: fees, batch dates and program details marked [VERIFY] or [INSERT] must be confirmed
            before publication. Nothing on this page is a guarantee of employment or earnings.
          </p>
        </div>
      </footer>
    </div>
  );
}
