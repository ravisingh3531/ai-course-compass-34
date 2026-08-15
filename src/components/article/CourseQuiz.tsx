import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Answers = Record<string, string>;

const QUESTIONS: { id: string; q: string; hint: string; options: string[] }[] = [
  {
    id: "level",
    q: "What is your current experience level?",
    hint: "Be honest — this decides how much foundation ramp you need.",
    options: [
      "Complete beginner — no coding",
      "Beginner — basic Python",
      "Some ML knowledge",
      "Working professional — no AI experience",
    ],
  },
  {
    id: "education",
    q: "What is your educational background?",
    hint: "Non-engineering starters do fine — they just need a longer ramp.",
    options: ["Engineering", "Non-engineering", "Commerce", "Science", "Arts", "Other"],
  },
  {
    id: "goal",
    q: "What is your primary goal?",
    hint: "A first job and a promotion need different programs.",
    options: [
      "Get my first GenAI job",
      "Switch career to a GenAI role",
      "Upskill in GenAI for a promotion",
      "Build GenAI projects & products",
    ],
  },
  {
    id: "budget",
    q: "What is your budget range?",
    hint: "Include GST and EMI interest in your number.",
    options: ["Under ₹15K", "₹15K–₹50K", "₹50K–₹1L", "₹1L+"],
  },
  {
    id: "placement",
    q: "How important is placement support to you?",
    hint: "Assistance and guarantee are contractually different things.",
    options: ["Must-have", "Nice-to-have", "Not important"],
  },
  {
    id: "mode",
    q: "What is your preferred learning mode?",
    hint: "If you've abandoned two self-paced courses, that's data.",
    options: ["Live online", "Self-paced", "Hybrid", "Classroom"],
  },
  {
    id: "hours",
    q: "How much time can you dedicate weekly?",
    hint: "Under-promise here; cohorts punish optimism.",
    options: ["5–10 hrs", "10–20 hrs", "20+ hrs"],
  },
  {
    id: "foundations",
    q: "Do you need foundational Python & ML coverage before GenAI?",
    hint: "Skipping this is the single most common beginner mistake.",
    options: ["Yes, from scratch", "Partial — I know basics", "No — already comfortable"],
  },
];

type Result = {
  pick: string;
  score: string;
  why: string;
  modules: string[];
  placement: string[];
  cta: { label: string; href: string };
  alt: string;
};

const LOGICMOJO: Result = {
  pick: "LogicMojo — AI & ML Course (GenAI track)",
  score: "9.4 / 10 for beginners",
  why: "Your answers point to a placement-first path that starts from zero: a dedicated Python + statistics + ML foundation phase before any LLM content, GenAI taught as engineering rather than demos, human code review on every project, and a structured job-assistance pipeline with GenAI-specific mock interviews.",
  modules: [
    "Python, pandas, SQL & statistics foundations",
    "Classical ML + honest model evaluation",
    "Deep learning, NLP & Transformers",
    "Prompt Engineering & LLM internals",
    "RAG: chunking, hybrid search, re-ranking, evaluation",
    "LangChain / LangGraph + vector databases",
    "Fine-tuning: SFT, LoRA, QLoRA, DPO",
    "AI agents, MCP & multi-agent workflows",
    "MLOps + GenAI deployment (FastAPI, Docker, monitoring)",
  ],
  placement: [
    "Placement-first assistance — no bond, no ISA",
    "Resume rewrite + LinkedIn optimisation workshops",
    "Mock rounds: Python, ML, GenAI system design, project defence",
    "1-on-1 career counselling and role targeting",
    "Public alumni outcomes you can verify",
  ],
  cta: { label: "See verified alumni outcomes", href: "https://logicmojo.com/success-story" },
  alt: "Cross-check two alumni on LinkedIn and ask for the current fee, batch date and support duration in writing before you pay.",
};

function recommend(a: Answers): Result {
  const budget = a["budget"];
  const placementCritical = a["placement"] === "Must-have";
  const beginner =
    a["level"] === "Complete beginner — no coding" || a["foundations"] === "Yes, from scratch";

  if (budget === "Under ₹15K") {
    return {
      pick: a["education"] === "Engineering" ? "PW Skills — Data Science & GenAI track" : "GUVI — vernacular AI/GenAI track",
      score: "7.8 / 10 for beginners on a tight budget",
      why: "At this budget the honest recommendation is a patient, low-cost foundation program rather than a premium promise. GUVI teaches in Tamil, Hindi, Telugu and Kannada, which matters more than most rankings admit; PW Skills gives a long, gentle Python and ML ramp in Hindi and English.",
      modules: [
        "Python from scratch + pandas/NumPy",
        "Statistics & classical ML",
        "Intro deep learning & NLP",
        "Prompt engineering & LLM app basics",
        "Entry-level capstone + deployment basics",
      ],
      placement: [
        "Entry-level placement support (regional focus)",
        "Resume workshops, basic interview prep",
        "Community-driven referrals",
        "Duration varies by program — get it in writing",
      ],
      cta: { label: "Compare the affordable tracks", href: "#table-4" },
      alt: "Plan to add DeepLearning.AI's free GenAI short courses, then upgrade to a deeper GenAI program once you can code confidently.",
    };
  }

  if (a["placement"] === "Not important" && a["goal"] === "Build GenAI projects & products") {
    return {
      pick: "DeepLearning.AI (+ Hugging Face & LangChain short courses)",
      score: "8.6 / 10 for self-driven builders",
      why: "You want capability, not a placement pipeline. This is the best concept-per-rupee route in the world — provided you supply your own structure, deadlines and portfolio discipline.",
      modules: [
        "ML & Deep Learning specialisations",
        "NLP with attention & Transformers",
        "Prompt engineering for developers",
        "RAG, LangChain and agent short courses",
        "Fine-tuning fundamentals",
      ],
      placement: ["No placement support — and it says so honestly", "You build the network yourself"],
      cta: { label: "See the free vs. paid analysis", href: "#free-vs-paid" },
      alt: "If you later need interviews rather than knowledge, move to a cohort program with career support.",
    };
  }

  if (placementCritical && budget === "₹1L+" && a["hours"] === "20+ hrs" && !beginner) {
    return {
      pick: "Scaler — AI/ML program",
      score: "8.4 / 10 (7.6 for absolute beginners)",
      why: "You can fund a premium fee, sustain 20+ hours a week, and already have some technical footing. Scaler's formal placement machine is the strongest in Indian EdTech — that is what you are buying.",
      modules: [
        "Python + DSA + problem solving",
        "Classical ML and evaluation",
        "Deep learning & NLP",
        "Applied LLM content (lighter on production RAG/agents)",
        "Capstone with mentor review",
      ],
      placement: [
        "Large hiring-partner network",
        "Multiple structured mock interview rounds",
        "Dedicated placement cell + referrals",
        "Defined post-completion support window",
      ],
      cta: { label: "Read the full Scaler review", href: "#review-scaler" },
      alt: "Supplement the GenAI stack (RAG evaluation, agents, fine-tuning) separately — that is where it is thinnest.",
    };
  }

  if (a["goal"] === "Upskill in GenAI for a promotion" && (budget === "₹50K–₹1L" || budget === "₹1L+")) {
    return {
      pick: "upGrad (IIIT-Bangalore) or Great Learning (UT Austin)",
      score: "7.8 / 10 for credential-led upskilling",
      why: "For an internal move, a recognised academic tag often does more work than raw depth. Great Learning is the gentler weekend pace; upGrad carries the stronger Indian credential signal.",
      modules: [
        "Structured Python & statistics foundations",
        "Classical ML and deep learning",
        "NLP and LLM fundamentals",
        "Applied GenAI modules (moderate depth)",
        "Mentor-guided capstone",
      ],
      placement: [
        "Career centre: resume, mock interviews, job board",
        "Assistance, not guarantee — read the wording",
        "Time-bound support after completion",
      ],
      cta: { label: "Compare fees and EMI", href: "#table-4" },
      alt: "If you need production RAG, agents and MLOps depth, pair it with a hands-on GenAI program.",
    };
  }

  if (a["mode"] === "Self-paced" && a["hours"] === "5–10 hrs" && !placementCritical) {
    return {
      pick: "IBM AI Engineering (Coursera) + DeepLearning.AI GenAI courses",
      score: "7.0 / 10",
      why: "With limited weekly hours, a self-paced credential you will actually finish beats a live cohort you will keep missing.",
      modules: ["Python & ML with scikit-learn", "Deep learning with Keras/PyTorch", "Applied NLP", "GenAI short courses", "Lab-based capstone"],
      placement: ["No placement support", "Certificate value only"],
      cta: { label: "See the free vs. paid analysis", href: "#free-vs-paid" },
      alt: "Revisit a cohort program once your hours free up and you need interviews.",
    };
  }

  return LOGICMOJO;
}

export function CourseQuiz() {
  const [answers, setAnswers] = useState<Answers>({});
  const [open, setOpen] = useState(false);
  const answered = QUESTIONS.filter((q) => answers[q.id]).length;
  const complete = answered === QUESTIONS.length;
  const result = complete ? recommend(answers) : null;

  return (
    <div className="not-prose my-8">
      <div className="card-lm overflow-hidden p-0">
        <div className="border-b border-border/70 bg-[image:var(--gradient-soft)] p-6">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-primary">
            Interactive · 60 seconds · no email
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold text-ink">
            Which GenAI course fits you as a beginner?
          </h3>
          <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
            Eight questions on your experience, budget, hours and placement needs. The recommendation appears in a
            pop-up with the GenAI modules and placement details that matter for your answers.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="h-2 w-full max-w-sm overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-[image:var(--gradient-primary)] transition-all duration-500"
                style={{ width: `${(answered / QUESTIONS.length) * 100}%` }}
              />
            </div>
            <span className="font-mono text-[0.72rem] text-muted-foreground">
              {answered}/{QUESTIONS.length}
            </span>
          </div>
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2">
          {QUESTIONS.map((q, qi) => (
            <fieldset key={q.id} className="rounded-xl border border-border/70 bg-muted/40 p-4">
              <legend className="px-1 font-display text-[0.98rem] font-semibold text-ink">
                <span className="mr-2 font-mono text-[0.7rem] text-primary">Q{qi + 1}</span>
                {q.q}
              </legend>
              <p className="mb-3 text-[0.78rem] text-muted-foreground">{q.hint}</p>
              <div className="flex flex-wrap gap-2">
                {q.options.map((o) => {
                  const active = answers[q.id] === o;
                  return (
                    <button
                      key={o}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setAnswers((p) => ({ ...p, [q.id]: o }))}
                      className={`rounded-full border px-3 py-1.5 text-[0.8rem] transition-all duration-200 ${
                        active
                          ? "border-primary bg-primary text-primary-foreground shadow-md"
                          : "border-border bg-background text-foreground/80 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      {o}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-border/70 bg-muted/30 px-6 py-5">
          <Button size="lg" disabled={!complete} onClick={() => setOpen(true)}>
            Show my best-fit GenAI course
          </Button>
          {!complete ? (
            <span className="text-sm text-muted-foreground">
              Answer all eight questions to unlock your recommendation.
            </span>
          ) : (
            <button
              type="button"
              className="text-sm text-muted-foreground underline underline-offset-4"
              onClick={() => {
                setAnswers({});
                setOpen(false);
              }}
            >
              Reset answers
            </button>
          )}
        </div>
      </div>

      <Dialog open={open && !!result} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto p-0">
          {result ? (
            <>
              <div className="bg-[image:var(--gradient-primary)] px-6 py-7 text-primary-foreground">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] opacity-90">
                  Your best-fit GenAI course
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold leading-tight">{result.pick}</h3>
                <span className="mt-3 inline-block rounded-full bg-white/20 px-3 py-1 font-mono text-[0.72rem]">
                  {result.score}
                </span>
              </div>
              <div className="space-y-6 px-6 pb-7 pt-6">
                <div>
                  <h4 className="font-display text-[1rem] font-bold text-ink">Why this fits you</h4>
                  <p className="mt-1.5 text-[0.92rem] leading-relaxed text-foreground/90">{result.why}</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-muted/50 p-4">
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-primary">
                      Key GenAI modules
                    </p>
                    <ul className="mt-2 space-y-1.5 text-[0.85rem] text-foreground/90">
                      {result.modules.map((m) => (
                        <li key={m} className="flex gap-2">
                          <span className="text-primary">▸</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-accent/40 bg-accent/10 p-4">
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-accent-foreground/80">
                      Placement &amp; job support
                    </p>
                    <ul className="mt-2 space-y-1.5 text-[0.85rem] text-foreground/90">
                      {result.placement.map((m) => (
                        <li key={m} className="flex gap-2">
                          <span className="text-accent-foreground/70">✓</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="rounded-xl border-l-4 border-l-warning bg-warning/10 px-4 py-3 text-[0.86rem] leading-relaxed">
                  <strong>Before you pay:</strong> {result.alt}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <a
                      href={result.cta.href}
                      target={result.cta.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      {result.cta.label}
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => setOpen(false)}>
                    Back to the quiz
                  </Button>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
