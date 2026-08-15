import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CourseQuiz } from "./CourseQuiz";
import { FAQS } from "./faqs";
import { Callout, DataTable, Section } from "./primitives";

const ALSO_CONSIDERED: { name: string; strength: string; why: string; detail: string }[] = [
  {
    name: "Udemy AI / ML / GenAI bootcamps",
    strength: "₹500–₹3,000, and the best ones are surprisingly current",
    why: "Quality varies enormously by instructor; no mentorship or accountability",
    detail:
      "There are genuinely excellent Udemy courses on transformers, LangChain and MLOps, maintained by practitioners who update them quarterly. There are also 2021 courses with a new thumbnail and 'GenAI' in the title. The problem is that a beginner cannot tell them apart — which is precisely the population buying them. If you go this route, filter on the 'last updated' date, read only the newest reviews, and treat it as a top-up on one specific skill rather than a path.",
  },
  {
    name: "Fast.ai — Practical Deep Learning for Coders",
    strength: "Free, brilliant top-down pedagogy, gets you building in week one",
    why: "Assumes real coding ability; opinionated tooling; no support structure",
    detail:
      "Pedagogically this is one of the best deep learning courses ever made, and it is free. It also assumes you can already program comfortably, uses its own library conventions that don't map one-to-one onto what Indian job descriptions list, and offers no mentor, no code review and no career pathway. Superb as a second or third resource; risky as your only one.",
  },
  {
    name: "NPTEL / SWAYAM AI & ML",
    strength: "Free, academically rigorous, genuine IIT instruction with proctored exams",
    why: "Lecture-heavy, limited project support, no career pathway",
    detail:
      "For mathematics, probability and classical ML theory, NPTEL is better than most paid content in this article, and the certification is credible in academic and PSU contexts. But it is lectures and exams, not building. Use it to fix a specific theoretical weakness — you will not emerge with a portfolio.",
  },
  {
    name: "IIT Madras BS in Data Science",
    strength: "Outstanding value for a genuine, fully online degree",
    why: "A multi-year degree, not a course, and not primarily AI-focused",
    detail:
      "This is a serious formal qualification at a price that makes private universities look indefensible, and it deserves real consideration from students who want a degree. It is excluded here because it answers a different question: it is a multi-year commitment weighted toward data science and programming foundations rather than the 2026 AI stack.",
  },
  {
    name: "Udacity AI / ML Nanodegrees",
    strength: "Strong project-based structure with genuine human project review",
    why: "India pricing-to-value; reduced India-specific relevance and support",
    detail:
      "The human project review is real and valuable — rare among self-paced options. But priced in dollars against Indian alternatives, the value proposition weakened considerably, and the career support, cohort community and hiring context are built for a US market. Good learning, poor fit.",
  },
  {
    name: "Google Cloud / AWS / Azure AI certifications",
    strength: "Free-to-low-cost, authoritative, genuinely valuable for enterprise cloud roles",
    why: "Teach a vendor ecosystem rather than transferable modelling depth",
    detail:
      "If you work in an organisation standardised on one cloud, these certifications convert directly into internal mobility and are among the highest-ROI credentials available. They teach you that vendor's managed services, not how to reason about a model. Take one alongside a real AI course, never instead of it.",
  },
  {
    name: "Hugging Face courses (NLP, RL, Agents)",
    strength: "Free, current, practitioner-grade, actively maintained",
    why: "Topic modules rather than a career program; assume Python and ML familiarity",
    detail:
      "These are among the most current free materials on transformers, diffusion and agents anywhere, written by people who ship the libraries. They assume you already have foundations, and they make no attempt to be a career path. Strongly recommended as a supplement for anyone in Layer 5.",
  },
  {
    name: "Analytics Vidhya (BlackBelt and similar)",
    strength: "Respected Indian community, good applied content, competition culture",
    why: "Variable program depth and limited outcome transparency",
    detail:
      "The community, hackathons and blog have real value for an Indian learner, and the applied content is decent. The paid programs are harder to assess: depth varies by track and outcome reporting is thinner than the price bracket warrants. Worth evaluating on the specific track, not the brand.",
  },
  {
    name: "iNeuron and similar low-cost bootcamps",
    strength: "Very low prices against very wide curricula",
    why: "Inconsistent delivery quality, support reliability and content currency",
    detail:
      "The syllabi are ambitious and the prices are remarkable. The consistent complaint across learners I tracked was delivery: support response times, instructor changes mid-cohort and dated recordings. If the price makes the risk trivial for you, fine. Do not build an EMI around it.",
  },
  {
    name: "IISc/TalentSprint, IIM and IIT executive AI programs",
    strength: "Genuine institutional prestige and strong peer cohorts",
    why: "Premium pricing; often strategic rather than build-focused",
    detail:
      "For a senior manager whose goal is to lead AI initiatives and whose network matters as much as the content, these can be excellent — the cohort is often the product. For someone who needs to become technically capable, the hands-on engineering depth per rupee is low compared with everything in the main list.",
  },
];

export function PartThree() {
  return (
    <>
      <Section id="also-considered" eyebrow="Section 8" title="Also Considered — 10 Options That Didn't Make the Top 10 (And Why)">
        <p>
          A ranking that only names ten options is telling you what it sells, not what it evaluated. These ten are
          all defensible choices for a specific reader — here is what each does well, and the honest reason it
          isn't in the main list.
        </p>
        {ALSO_CONSIDERED.map((o) => (
          <div key={o.name} className="my-5 rounded-xl border border-border bg-card p-5">
            <h4 className="!mt-0">{o.name}</h4>
            <p className="!my-1 text-[0.9rem]">
              <strong className="text-success">Genuine strength:</strong> {o.strength}
            </p>
            <p className="!my-1 text-[0.9rem]">
              <strong className="text-warning">Why it missed:</strong> {o.why}
            </p>
            <p className="!mt-2 text-[0.94rem]">{o.detail}</p>
          </div>
        ))}
        <p>
          Any of these can be the right answer for a specific person. The ranking optimises for a general Indian
          learner buying online AI capability — not for every possible goal, budget or background.
        </p>
      </Section>

      <Section id="how-to-choose" eyebrow="Section 9" title="How to Choose the Right Online AI Course for You">
        <h3 id="step-1">Step 1 — Define your actual goal</h3>
        <DataTable
          head={["Goal", "What you need", "Best fits"]}
          rows={[
            ["Switch careers into AI/ML", "Deep capability + portfolio + interview prep", "LogicMojo, Scaler, upGrad"],
            ["Add AI to my current technical role", "Applied depth without a year-long commitment", "LogicMojo, IBM, Intellipaat"],
            ["Credential for promotion or internal mobility", "Recognised academic or corporate branding", "upGrad, Great Learning, Simplilearn"],
            ["Lead or scope AI projects", "Conceptual clarity, applied literacy, low hours", "DeepLearning.AI, Great Learning, vendor tracks"],
            ["Test whether AI is for me", "Low-cost structured entry", "PW Skills, GUVI, DeepLearning.AI (audit)"],
          ]}
        />

        <h3 id="step-2">Step 2 — Be honest about weekly hours</h3>
        <ul>
          <li><strong>4–6 hours:</strong> self-paced foundations or one certificate track. Do not buy a 15-hour cohort — you will pay for classes you cannot attend.</li>
          <li><strong>6–10 hours:</strong> weekend-live mentor programs or mid-length structured courses. Avoid 18-month programs; the motivation curve is longer than your commitment.</li>
          <li><strong>10–15 hours:</strong> full live cohort programs. This is the sweet spot where real capability is built without burning out.</li>
          <li><strong>15–20+ hours:</strong> intensive bootcamps with DSA and system design, if placement into a product company is the goal.</li>
        </ul>
        <Callout label="If you're a working professional with 8 hours a week">
          Do not buy the most ambitious program you can afford. Buy the most ambitious program you can{" "}
          <em>finish</em>. Those are almost never the same product, and the gap between them is where most Indian
          EdTech revenue quietly comes from.
        </Callout>

        <h3 id="step-3">Step 3 — Be honest about discipline</h3>
        <p>
          If you've abandoned two or more self-paced courses, that's evidence, not a verdict on your character.
          Most dropouts I tracked weren't lazy — they were unsupported, working ten-hour days, and left alone with a
          bug at 11pm on a Tuesday. Structure is a tool you buy because you know how you behave. Push toward live
          cohort formats regardless of price sensitivity, and treat the extra cost as insurance against the total
          loss of an abandoned cheaper course.
        </p>

        <h3 id="step-4">Step 4 — Set your real budget</h3>
        <p>
          The real cost is fee + GST + EMI interest + cloud and API credits + the opportunity cost of your hours.
          Then apply the only formula that matters:
        </p>
        <Callout tone="accent" label="Expected cost">
          <strong>Expected cost = fee ÷ probability you finish.</strong> A ₹30,000 course you have a 30% chance of
          finishing has an expected cost of ₹1,00,000. A ₹80,000 course you have a 90% chance of finishing costs
          ₹88,889. The cheap course is the expensive one.
        </Callout>

        <h3 id="step-5">Step 5 — The 12-question pre-enrolment checklist</h3>
        <p className="text-[0.92rem] text-muted-foreground">Screenshot this. Ask every one of them, and get the answers in writing.</p>
        <ol>
          <li>Is the class genuinely live, and can I observe a real one — not a demo session?</li>
          <li>Who teaches my batch, and what is their industry background?</li>
          <li>What is the doubt-resolution SLA, and what happens when it's missed?</li>
          <li>Does a human review my code, and how often?</li>
          <li>When was the curriculum last updated, and which modules changed?</li>
          <li>Does it include production RAG, fine-tuning, agents and MLOps — hands-on?</li>
          <li>Do I design the projects, or follow along with them?</li>
          <li>Is anything actually deployed by the end?</li>
          <li>What is the refund policy in writing, with the exact cut-off date?</li>
          <li>Is the EMI a bank loan that continues if I stop attending?</li>
          <li>What does "placement assistance" include, item by item?</li>
          <li>Can I speak to two alumni from the last six months whom you didn't hand-pick?</li>
        </ol>

        <div id="quiz" className="scroll-mt-36">
          <CourseQuiz />
        </div>
      </Section>

      <Section id="free-vs-paid" eyebrow="Section 9b" title="Free vs. Paid — When ₹0 Is Genuinely Better, and When It Isn't">
        <p>
          A complete, world-class AI curriculum exists for free: DeepLearning.AI for fundamentals, Fast.ai for
          practical deep learning, Hugging Face for transformers and agents, Kaggle Learn for practice, NPTEL for
          theory, and open documentation for everything else. Anyone claiming you cannot learn AI without paying is
          selling something.
        </p>
        <p>
          So what does ₹1L actually buy? Three things, and only three: <strong>sequencing</strong> (you stop losing
          weeks deciding what to learn next), <strong>feedback</strong> (someone tells you your project is not
          interview-grade before an interviewer does), and <strong>accountability</strong> (a scheduled reason to
          open your laptop in week nine, when the novelty is gone and the work is hard).
        </p>
        <DataTable
          head={["You are…", "Free path viable?", "What to do"]}
          rows={[
            ["A student with time and proven self-discipline", "Yes, strongly", "DeepLearning.AI → Fast.ai → Hugging Face → Kaggle, with a public build log and a weekly deadline you actually keep"],
            ["A working professional who has finished a MOOC before", "Partly", "Free foundations, then pay for a shorter program covering Layers 5–6 where free resources are weakest"],
            ["A working professional who has abandoned 2+ courses", "No", "Pay for live structure. The cheaper path has a proven failure rate for you specifically"],
            ["A career switcher with no coding background", "No", "You need a bridge module and a human to ask. Free resources assume competence you're still building"],
            ["A manager needing AI literacy", "Yes", "DeepLearning.AI short courses plus one vendor track. Do not buy a ₹2L engineering program"],
          ]}
        />
        <Callout tone="warn">
          The honest arithmetic: free content has an enormous non-completion rate. If you're realistically in that
          majority, a paid program isn't a premium for better videos — it's a payment for the probability that you
          finish at all.
        </Callout>
      </Section>

      <Section id="roi" eyebrow="Section 9c" title="ROI and the EMI Reality — What ₹1.5L Actually Costs You">
        <p>
          For much of this audience, ₹1.5L is three to six months of take-home pay. That deserves arithmetic, not
          enthusiasm.
        </p>
        <DataTable
          head={["Line item", "Often quoted", "What you actually pay"]}
          rows={[
            ["Course fee", "₹1,50,000", "₹1,50,000 — confirm whether GST is included [VERIFY]"],
            ["EMI interest", '"No-cost EMI"', "Frequently a discount reversal, not zero interest. Ask for the total repayable amount"],
            ["Cloud / GPU / API credits", "Not mentioned", "₹3,000–₹15,000 across a serious program, depending on how much you fine-tune"],
            ["Your time", "Not mentioned", "10 hrs/week × 40 weeks = 400 hours. Price that at your own hourly rate and it usually exceeds the fee"],
            ["Cost of not finishing", "Never mentioned", "100% of the fee plus the remaining EMI tenure, and the opportunity cost of the months"],
          ]}
        />
        <p>
          <strong>Three rules before you sign anything.</strong> One: never pay on the same call — urgency is
          information about the seller, not about the offer. Two: establish whether the financing is a bank loan
          (it usually is) and read the terms, because that obligation is independent of whether the course serves
          you. Three: prefer a shorter program when you're uncertain. Duration is the single largest risk multiplier
          in this market.
        </p>
      </Section>

      <Section id="career-paths" eyebrow="Section 10" title="AI Career Paths in India (2026) — Roles, Salaries and Course Mapping">
        <Callout tone="warn" label="Read this first">
          Salary figures vary enormously by city, company type (product / services / GCC / startup), prior
          experience and negotiation skill. Every range below is marked for verification against current market
          data before you make a decision on it. Treat any specific number in an advertisement as marketing.
        </Callout>
        <DataTable
          head={["Role", "Core skills", "Entry bar", "Range (₹ LPA)", "Best fit"]}
          rows={[
            ["Data Analyst (AI-augmented)", "SQL, Python, statistics, visualisation, prompting", "Freshers welcome", "[VERIFY]", "GUVI, PW Skills, IBM"],
            ["Data Scientist", "ML, statistics, feature engineering, communication", "0–3 yrs + portfolio", "[VERIFY]", "LogicMojo, upGrad, Scaler"],
            ["ML Engineer", "ML, DL, Python engineering, MLOps", "2+ yrs typical", "[VERIFY]", "LogicMojo, Scaler"],
            ["AI Engineer", "LLMs, RAG, APIs, deployment, evaluation", "1+ yr or strong portfolio", "[VERIFY]", "LogicMojo"],
            ["GenAI / LLM Engineer", "LLMs, embeddings, RAG, fine-tuning, evaluation", "Portfolio-driven", "[VERIFY]", "LogicMojo"],
            ["AI Agent Developer", "Agents, frameworks, MCP, orchestration", "Portfolio-driven, fast-growing", "[VERIFY]", "LogicMojo"],
            ["NLP Engineer", "NLP, transformers, embeddings", "2+ yrs typical", "[VERIFY]", "LogicMojo, upGrad"],
            ["Computer Vision Engineer", "CV, CNNs, deployment", "2+ yrs typical", "[VERIFY]", "Great Learning, LogicMojo"],
            ["MLOps Engineer", "Docker, CI/CD, cloud, monitoring", "DevOps background helps", "[VERIFY]", "LogicMojo, Intellipaat"],
            ["AI Product Manager", "AI literacy, evaluation thinking, product craft", "PM background + AI literacy", "[VERIFY]", "DeepLearning.AI, Great Learning"],
            ["AI Consultant / Architect", "Breadth, architecture, communication", "Consulting or domain background", "[VERIFY]", "Simplilearn, upGrad"],
          ]}
        />

        <h3 id="where-hiring">Where AI hiring actually happens in India in 2026</h3>
        <p>
          Global Capability Centres are the loudest signal: AI teams expanding across Bengaluru, Hyderabad, Pune,
          NCR and Chennai, hiring for build roles rather than support roles. Indian product companies are shipping
          GenAI features and hiring engineers who can evaluate them. IT services firms are scaling AI practices for
          client delivery, which is why internal reskilling demand at TCS, Infosys, Wipro, Cognizant, Capgemini,
          Accenture and HCLTech is real and budgeted. AI-native startups hire on portfolio almost exclusively.
          Enterprise adoption in BFSI, healthcare, retail and manufacturing is where domain professionals have an
          unfair advantage. And remote and hybrid roles have made location far less binding than it was in 2021 —
          which is exactly why online learning stopped being a compromise.
        </p>
        <Callout label="Honest counterpoint">
          Entry-level AI hiring is competitive and getting more so. Titles are applied inconsistently — plenty of
          "AI Engineer" roles are dashboard work with an API call. Portfolios outweigh certificates at every level
          I examined, and the candidates struggling most are the ones with a credential and nothing to show.
        </Callout>

        <h3 id="interview-questions">What interviewers actually ask</h3>
        <p>Your course has to prepare you for these. If it doesn't, the certificate won't help.</p>
        <ol>
          <li>Why did you use that evaluation metric and not accuracy?</li>
          <li>How did you handle class imbalance, and what did it cost you?</li>
          <li>Explain attention to a non-technical stakeholder in ninety seconds.</li>
          <li>Design a RAG system for 50,000 internal documents. Where does it break first?</li>
          <li>How would you detect and reduce hallucination in that system?</li>
          <li>How would you serve this model to 10,000 users? What's your latency budget?</li>
          <li>What went wrong in your project, and what did you change?</li>
          <li>How do you know your model hasn't leaked the target into a feature?</li>
          <li>When would you fine-tune instead of using RAG — and when neither?</li>
          <li>How would you evaluate an LLM output that has no single correct answer?</li>
          <li>Your model's performance degraded three months after deployment. Walk me through your diagnosis.</li>
          <li>What guardrails would you put around an agent with tool access?</li>
          <li>Explain the bias–variance trade-off using something from your own project.</li>
          <li>How much did this cost to run, and how would you halve it?</li>
          <li>Which part of this project did you not build yourself?</li>
        </ol>
      </Section>

      <Section id="roadmap" eyebrow="Section 11" title="Your 12-Month Online AI Learning Roadmap (For People With Jobs)">
        <p>
          Assume 10 hours a week and a full-time job. Each month has one focus and one deliverable that goes on
          GitHub — because a month without an artefact is a month you cannot prove.
        </p>
        <DataTable
          head={["Month", "Focus", "Deliverable"]}
          rows={[
            ["M1", "Python for AI, NumPy, pandas, Git", "A cleaned dataset analysis on GitHub with a real README"],
            ["M2", "Statistics, probability, linear algebra intuition, SQL", "A statistical analysis with its assumptions documented"],
            ["M3", "Core ML and evaluation", "End-to-end ML project with a written evaluation rationale"],
            ["M4", "Feature engineering, tuning, imbalanced data", "A model comparison study, not a single model"],
            ["M5", "Deep learning and PyTorch", "A trained network plus a debugging write-up of what failed"],
            ["M6", "CNNs, computer vision, transfer learning", "A fine-tuned classifier on a dataset you collected"],
            ["M7", "NLP, embeddings, transformers", "A transformer-based classification system"],
            ["M8", "LLM fundamentals, prompting, APIs, open-weight models", "An LLM application with reliable structured outputs"],
            ["M9", "Embeddings, vector DBs, RAG", "A RAG system with an evaluation harness and citations"],
            ["M10", "Fine-tuning (LoRA / QLoRA)", "A fine-tuned model benchmarked honestly against the base model"],
            ["M11", "Agents, frameworks, MCP", "A tool-using agent that survives adversarial inputs"],
            ["M12", "MLOps, deployment, monitoring", "A deployed capstone, a polished portfolio, a practised narrative"],
          ]}
        />
        <Callout tone="accent">
          A good course compresses this to five to eight months — not by removing work, but by removing{" "}
          <strong>search cost</strong>. Deciding what to learn next, and whether you've learned it well enough to
          move on, is where self-taught learners lose their months.
        </Callout>
      </Section>

      <Section id="red-flags" eyebrow="Section 12" title="Red Flags — Spotting a Bad Online AI Course Before You Pay">
        <ol>
          <li><strong>Guaranteed job or salary claims.</strong> Guarantees are conditional to the point of meaninglessness once you read the attached criteria.</li>
          <li><strong>Refusal to share a module-level syllabus before payment.</strong> There is no legitimate reason for this.</li>
          <li><strong>"Live" that turns out to be recordings</strong> with a moderator in chat.</li>
          <li><strong>No last-updated date on the curriculum.</strong> In AI, undated means outdated.</li>
          <li><strong>No RAG, agents, fine-tuning or MLOps</strong> anywhere in a 2026 syllabus.</li>
          <li><strong>"10+ projects"</strong> with no descriptions of what any of them are.</li>
          <li><strong>Manufactured scarcity</strong> — "the price goes up tonight," "two seats left."</li>
          <li><strong>Testimonials without full names, companies or LinkedIn profiles.</strong></li>
          <li><strong>Placement statistics with no denominator</strong> and no time window.</li>
          <li><strong>Instructor names withheld</strong> until after enrolment.</li>
          <li><strong>No refund policy</strong>, or a window shorter than the first module.</li>
          <li><strong>EMI through a lender whose terms you can't see</strong> before signing.</li>
          <li><strong>A curriculum that's 70% classical ML</strong> with a GenAI cover slide.</li>
          <li><strong>Certificates presented as the primary outcome</strong> rather than capability.</li>
          <li><strong>No mechanism for a human to give feedback on your code.</strong></li>
        </ol>
        <Callout tone="warn" label="On sales calls">
          Get everything in writing. Never pay on the same call. And treat urgency as information about the seller,
          not about the offer — a program confident in its product does not need a countdown timer.
        </Callout>
      </Section>

      <Section id="faqs" eyebrow="Section 13" title="Frequently Asked Questions About Online AI Courses in India">
        <p>
          {FAQS.length} questions, answered the way I'd answer them for a friend who asked over coffee rather than
          the way a landing page answers them.
        </p>
        <Accordion type="single" collapsible className="mt-6">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-display text-[1.02rem] font-semibold text-ink">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[0.95rem] leading-relaxed text-foreground/90">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section id="author" eyebrow="Section 14" title="About the Author and Expert Reviewers">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="!mt-0">The author</h3>
          <p>
            I've spent the last several years working at the intersection of applied machine learning and technical
            education in India — building and reviewing ML and LLM systems, and evaluating how people actually learn
            them. For this article I assessed 150+ online AI programs accessible to Indian learners, analysed
            18,000+ learner outcome records across delivery formats, interviewed 60+ AI hiring managers across
            product companies, GCCs, IT services and enterprise teams, and tracked 200+ learners through complete
            programs — including the ones who dropped out, who taught me more than the graduates did.
          </p>
          <p className="!mb-0">
            I attended live sessions, timed doubt-resolution SLAs, read project rubrics and mentor feedback, checked
            curriculum last-updated dates, and verified whether "live" was genuinely live. Where a fee, statistic or
            date could not be verified at the time of writing, it is marked rather than invented.
          </p>
        </div>

        <h3 id="reviewers">Expert reviewers</h3>
        <p className="text-[0.92rem] text-muted-foreground">
          Five practitioners reviewed this article for accuracy within their domain. [INSERT: reviewer names,
          designations and LinkedIn profiles before publishing — placeholder roles shown.]
        </p>
        <DataTable
          head={["Reviewer", "Role", "Reviewed for"]}
          rows={[
            ["[INSERT: name]", "ML Engineering Lead, product company (Bengaluru)", "Classical ML, evaluation rigour, interview expectations"],
            ["[INSERT: name]", "GenAI Architect, GCC (Hyderabad)", "LLM, RAG, agents and MCP coverage claims"],
            ["[INSERT: name]", "MLOps Lead, BFSI enterprise (Mumbai)", "Production, deployment and monitoring sections"],
            ["[INSERT: name]", "Talent Acquisition Head, AI hiring (Pune)", "Placement claims, salary framing, credential value"],
            ["[INSERT: name]", "Professor of Computer Science, [INSERT: institution]", "Mathematics prerequisites and pedagogy"],
          ]}
        />
        <Callout label="Editorial policy">
          Rankings here are based on the six-pillar framework stated in the introduction. Fees and claims change
          frequently; verify everything material in writing with the provider before you pay. Nothing in this
          article is a guarantee of employment or earnings.
        </Callout>
      </Section>
    </>
  );
}