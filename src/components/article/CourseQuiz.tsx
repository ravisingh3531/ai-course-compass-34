import { useState } from "react";
import { Button } from "@/components/ui/button";

type Answers = Record<string, string>;

const QUESTIONS: { id: string; q: string; options: string[] }[] = [
  {
    id: "background",
    q: "1. What's your background?",
    options: ["Non-technical", "Some coding", "Software engineer", "Data analyst", "Student / fresher"],
  },
  {
    id: "goal",
    q: "2. What are you optimising for?",
    options: ["Career switch into AI", "Role upgrade in my current job", "A recognised credential", "AI literacy to lead projects", "Testing whether AI is for me"],
  },
  {
    id: "budget",
    q: "3. What can you actually spend?",
    options: ["Free only", "Under ₹15,000", "₹15,000–₹60,000", "₹60,000–₹1.5L", "₹1.5L+"],
  },
  {
    id: "hours",
    q: "4. Honest weekly hours?",
    options: ["Under 6", "6–10", "10–15", "15+"],
  },
  {
    id: "priority",
    q: "5. Top priority?",
    options: ["Deepest skills", "Credential / brand", "Placement support", "Lowest cost"],
  },
  {
    id: "style",
    q: "6. Learning style that works for you?",
    options: ["Live classes", "Self-paced", "Weekend mentor sessions", "Mixed"],
  },
];

function recommend(a: Answers): { pick: string; why: string } {
  if (a["budget"] === "Free only")
    return {
      pick: "DeepLearning.AI + Hugging Face + Kaggle Learn",
      why: "World-class foundations at zero cost — but you must supply the structure and deadlines yourself.",
    };
  if (a["budget"] === "Under ₹15,000")
    return {
      pick: "PW Skills or GUVI",
      why: "The lowest-cost structured Indian options with live doubt support; GUVI if you want vernacular instruction.",
    };
  if (a["goal"] === "AI literacy to lead projects" || a["hours"] === "Under 6")
    return {
      pick: "DeepLearning.AI or a vendor track (Google Cloud / Azure AI)",
      why: "Concept clarity and applied literacy without a 12-month commitment you can't sustain.",
    };
  if (a["priority"] === "Placement support" && a["budget"] === "₹1.5L+" && a["hours"] === "15+")
    return {
      pick: "Scaler",
      why: "The strongest placement infrastructure in Indian EdTech — justified only if you can survive the hours and the EMI.",
    };
  if (a["priority"] === "Credential / brand" || a["goal"] === "A recognised credential")
    return {
      pick: "upGrad (IIIT-Bangalore) or Great Learning (UT Austin)",
      why: "A defensible academic credential for internal mobility, with weekend-friendly delivery at Great Learning.",
    };
  if (a["priority"] === "Deepest skills" || a["goal"] === "Career switch into AI")
    return {
      pick: "LogicMojo AI & Machine Learning Course",
      why: "The deepest 2026 stack — production RAG, fine-tuning, agents, MLOps — with live IST mentorship and code review.",
    };
  return {
    pick: "LogicMojo, with IBM AI Engineering as a low-cost fallback",
    why: "Your answers point to build-capability over branding; start with the option that reviews your code.",
  };
}

export function CourseQuiz() {
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const complete = QUESTIONS.every((q) => answers[q.id]);
  const result = submitted ? recommend(answers) : null;

  return (
    <div className="my-8 rounded-2xl border border-border bg-card p-6">
      <h3 className="!mt-0">Step 6 — The 60-second decision tree</h3>
      <p className="text-sm text-muted-foreground">
        Six single-select questions. No email, no sales call, no scarcity timer.
      </p>
      <div className="mt-5 grid gap-5">
        {QUESTIONS.map((q) => (
          <fieldset key={q.id}>
            <legend className="mb-2 text-sm font-semibold text-ink">{q.q}</legend>
            <div className="flex flex-wrap gap-2">
              {q.options.map((o) => {
                const active = answers[q.id] === o;
                return (
                  <button
                    key={o}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setAnswers((p) => ({ ...p, [q.id]: o }))}
                    className={`rounded-full border px-3 py-1.5 text-[0.82rem] transition-colors ${
                      active
                        ? "border-accent bg-accent/20 font-semibold text-ink"
                        : "border-border bg-background text-foreground/80 hover:bg-muted"
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
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button disabled={!complete} onClick={() => setSubmitted(true)}>
          Show my match
        </Button>
        {!complete ? (
          <span className="text-sm text-muted-foreground">Answer all six to see a recommendation.</span>
        ) : null}
        {submitted ? (
          <button
            type="button"
            className="text-sm underline underline-offset-4 text-muted-foreground"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
            }}
          >
            Reset
          </button>
        ) : null}
      </div>
      {result ? (
        <div className="mt-5 rounded-xl border-l-4 border-l-accent bg-accent/10 px-5 py-4">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
            Your match
          </p>
          <p className="mt-1 font-display text-lg font-semibold text-ink">{result.pick}</p>
          <p className="mt-1 text-[0.92rem] leading-relaxed">{result.why}</p>
        </div>
      ) : null}
    </div>
  );
}