/**
 * Program content model.
 *
 * To add a new program: append one object to the `programs` array below.
 * A page is generated automatically at /programs/<slug> — no component
 * changes required.
 */

export interface ProgramPhase {
  name: string;
  focus: string;
  detail: string;
}

export interface ProgramFaq {
  question: string;
  answer: string;
}

export interface ProgramStory {
  quote: string;
  name: string;
  location: string;
  outcome: string;
}

export interface Program {
  slug: string;
  /** Short name used in cards and navigation. */
  name: string;
  /** Who the program serves, e.g. "Students". */
  audience: string;
  /** German word used as the page's signature design element. */
  germanWord: { word: string; translation: string };
  headline: string;
  promise: string;
  meta: { duration: string; format: string; level: string };
  summary: string;
  forYou: string[];
  notForYou: string[];
  outcomes: string[];
  phases: ProgramPhase[];
  investment: {
    note: string;
    includes: string[];
  };
  story: ProgramStory;
  faqs: ProgramFaq[];
}

export const programs: Program[] = [
  {
    slug: "german-a1-c1",
    name: "German A1–C1",
    audience: "Students & learners",
    germanWord: { word: "Gründlichkeit", translation: "thoroughness" },
    headline: "German you can actually live in.",
    promise:
      "Structured progression from your first sentence to confident, real-world fluency — built for study and life in Germany, not just a certificate.",
    meta: {
      duration: "3–5 months per level",
      format: "Live online, small groups",
      level: "A1 → C1",
    },
    summary:
      "A complete language pathway that treats every level as preparation for real German life: lectures you can follow, friendships you can build, and paperwork you can handle without fear.",
    forYou: [
      "You plan to study or live in Germany and want German that works outside the exam hall.",
      "You want structure, accountability, and a mentor who has lived what you're preparing for.",
      "You are ready to practise consistently — real fluency is built in weeks, not weekends.",
    ],
    notForYou: [
      "You only want a certificate as fast as possible, with no interest in speaking.",
      "You expect fluency without showing up — no method can replace your practice.",
    ],
    outcomes: [
      "Hold real conversations — small talk, opinions, disagreements — without translating in your head.",
      "Follow university lectures, YouTube, and everyday German media comfortably.",
      "Handle German bureaucracy: Anmeldung, contracts, appointments, official letters.",
      "Pass Goethe / telc exams as a by-product of genuine ability, not cramming.",
    ],
    phases: [
      {
        name: "Phase 1",
        focus: "Foundation (A1–A2)",
        detail:
          "Sounds, sentence logic, and survival German. You speak from day one — ordering, introducing, asking — so German never becomes a subject you only read.",
      },
      {
        name: "Phase 2",
        focus: "Fluency & culture (B1–B2)",
        detail:
          "Real texts, real audio, real situations. Cultural training runs alongside grammar: how Germans communicate, disagree, and build trust.",
      },
      {
        name: "Phase 3",
        focus: "Mastery (C1)",
        detail:
          "Academic and professional German — presentations, essays, nuance, humour. The level where Germany stops feeling foreign.",
      },
    ],
    investment: {
      note:
        "Transparent per-level fees, shared during your readiness call and on your admission letter — no hidden charges, no surprise add-ons. Instalment plans available.",
      includes: [
        "Live small-group classes with personal correction",
        "Structured self-study system between sessions",
        "Cultural training woven into every level",
        "Exam preparation and mock exams at each level",
        "Direct mentorship access throughout",
      ],
    },
    story: {
      quote:
        "I had failed B1 twice with a local institute. Here I stopped memorising and started speaking — I cleared B2 and now I understand my professors in Aachen.",
      name: "Dhruvi P.",
      location: "Aachen, Germany",
      outcome: "M.Sc. student, RWTH Aachen",
    },
    faqs: [
      {
        question: "How is this different from a regular coaching class?",
        answer:
          "Most institutes teach the exam. We teach the language, and the exam becomes easy. Classes are small, every session involves speaking, and cultural context is part of the curriculum — because your life in Germany will not be multiple choice.",
      },
      {
        question: "How long does each level take?",
        answer:
          "Typically 3–5 months per level with consistent practice. We will give you an honest timeline in your readiness call based on your schedule — and we will tell you if your target date is unrealistic.",
      },
      {
        question: "Do you guarantee exam results?",
        answer:
          "No honest educator guarantees results, because your practice is half the equation. What we guarantee is the system, the correction, and the mentorship that our students consistently pass with.",
      },
      {
        question: "Are classes online or in person?",
        answer:
          "Live online, in small groups, with cameras on and speaking mandatory. This is not a recorded course — every class is interactive.",
      },
    ],
  },
  {
    slug: "ausbildung-track",
    name: "Ausbildung Track",
    audience: "Vocational careers",
    germanWord: { word: "Handwerk", translation: "craft" },
    headline: "From India to a paid career path in Germany.",
    promise:
      "Language, culture, and application mentorship for Germany's vocational training system — prepared honestly, end to end.",
    meta: {
      duration: "8–12 months",
      format: "Live online + 1:1 mentorship",
      level: "A1 → B1/B2",
    },
    summary:
      "Ausbildung is Germany's earn-while-you-learn vocational system — nursing, hospitality, logistics, trades, and more. This track prepares you for all of it: the language level employers demand, the cultural fluency interviews test, and the application process most agencies get wrong.",
    forYou: [
      "You want a practical, paid career path in Germany rather than an expensive degree.",
      "You are prepared to reach genuine B1/B2 German — the non-negotiable entry ticket.",
      "You want honest guidance on documents, interviews, and realistic timelines.",
    ],
    notForYou: [
      "You are looking for a shortcut, a 'visa agent', or someone who promises placement without language.",
      "You are not willing to commit 8–12 months of serious preparation.",
    ],
    outcomes: [
      "Reach interview-ready B1/B2 German with vocational vocabulary for your field.",
      "Handle a German job interview (Vorstellungsgespräch) with confidence.",
      "Prepare a German-standard application: Lebenslauf, Anschreiben, documents.",
      "Understand contracts, workplace culture, and your rights before you sign anything.",
    ],
    phases: [
      {
        name: "Phase 1",
        focus: "Language foundation",
        detail:
          "A1 to B1 with vocational German built in from the start — the vocabulary of your future workplace, not just the textbook.",
      },
      {
        name: "Phase 2",
        focus: "Culture & applications",
        detail:
          "German workplace culture, application documents done to German standards, and interview training with real mock interviews.",
      },
      {
        name: "Phase 3",
        focus: "Placement preparation",
        detail:
          "Targeting real openings, preparing for employer conversations, and honest guidance through visa documentation — with no false promises at any step.",
      },
    ],
    investment: {
      note:
        "One transparent program fee, shared in your readiness call — significantly less than agency packages, with no commission taken from your future salary. Instalments available.",
      includes: [
        "Complete language training A1 → B1/B2",
        "Vocational vocabulary for your chosen field",
        "German-standard CV and cover letter preparation",
        "Mock interviews with detailed feedback",
        "1:1 mentorship through the application process",
      ],
    },
    story: {
      quote:
        "Agencies asked for lakhs and promised the moon. Jeet told me the truth in the first call: no German, no Ausbildung. Fourteen months later I signed my nursing contract myself.",
      name: "Priya M.",
      location: "Stuttgart, Germany",
      outcome: "Pflegefachfrau (nursing) Ausbildung",
    },
    faqs: [
      {
        question: "Do you guarantee placement in Germany?",
        answer:
          "No — and you should walk away from anyone who does. What we do is get your German and your application to the standard German employers actually hire at, and mentor you through every step. Our students' success rate speaks for itself precisely because we are selective and honest.",
      },
      {
        question: "What German level do I really need?",
        answer:
          "B1 is the legal minimum for most Ausbildung visas; B2 makes you dramatically more competitive, especially in nursing and healthcare. We prepare you for the level your field genuinely demands.",
      },
      {
        question: "How long does the whole journey take?",
        answer:
          "Realistically 8–12 months of preparation before applications, then 2–5 months for offers and visa processing. Anyone quoting '3 months to Germany' is not being honest with you.",
      },
      {
        question: "Do you handle the visa?",
        answer:
          "We guide you through every document and requirement so you can file a clean application — but we are educators and mentors, not a visa agency, and we will always be clear about that line.",
      },
    ],
  },
  {
    slug: "professionals",
    name: "Professionals",
    audience: "Careers & relocation",
    germanWord: { word: "Feinschliff", translation: "the finishing polish" },
    headline: "German that opens doors your CV can't.",
    promise:
      "Focused, efficient German and cultural fluency for working professionals relocating to — or already working in — Germany.",
    meta: {
      duration: "Flexible, goal-based",
      format: "1:1 or small cohorts",
      level: "A1 → C1, tailored",
    },
    summary:
      "Built around a professional's calendar and a professional's goals: the German you need for interviews, meetings, colleagues, and a life that doesn't stay inside the English-speaking bubble.",
    forYou: [
      "You have (or are pursuing) a job offer, Opportunity Card, or Blue Card pathway to Germany.",
      "You need efficient progress that respects a full-time work schedule.",
      "You understand that career growth in Germany eventually requires German, even in 'English-speaking' companies.",
    ],
    notForYou: [
      "You want a generic group class at the cheapest possible price.",
      "You are not ready to invest a few focused hours per week.",
    ],
    outcomes: [
      "Handle interviews, meetings, and small talk with German colleagues naturally.",
      "Master workplace communication: email etiquette, directness, disagreement culture.",
      "Navigate relocation life — housing, contracts, insurance — without a translator.",
      "Build the cultural fluency that turns colleagues into a network.",
    ],
    phases: [
      {
        name: "Phase 1",
        focus: "Assessment & plan",
        detail:
          "We map your current level, your deadline, and your professional context, then design a plan around your calendar — not the other way round.",
      },
      {
        name: "Phase 2",
        focus: "Focused progression",
        detail:
          "Intensive, personalised sessions built on your industry's language and your real situations: your meetings, your emails, your interviews.",
      },
      {
        name: "Phase 3",
        focus: "Cultural integration",
        detail:
          "The unwritten rules of German professional life — feedback culture, hierarchy, punctuality, trust — so you integrate, not just relocate.",
      },
    ],
    investment: {
      note:
        "Premium 1:1 and small-cohort pricing, quoted after your assessment call based on your goals and timeline. Corporate invoicing available.",
      includes: [
        "Personal curriculum built around your industry",
        "Flexible scheduling for working professionals",
        "Interview and workplace communication training",
        "Relocation and bureaucracy support sessions",
        "Direct WhatsApp access to your mentor for quick questions",
      ],
    },
    story: {
      quote:
        "My company moved me to Munich with 'English is fine'. It wasn't. Six months with Jeet and I run stand-ups in German — that changed how the team sees me.",
      name: "Arjun S.",
      location: "Munich, Germany",
      outcome: "Senior Engineer, relocated with Blue Card",
    },
    faqs: [
      {
        question: "I work full-time. Is this realistic?",
        answer:
          "Yes — the program is designed for exactly that. Sessions fit around your schedule, and the self-study system is built in efficient 25–40 minute blocks, not open-ended homework.",
      },
      {
        question: "My company works in English. Do I really need German?",
        answer:
          "For the job you have today, perhaps not. For the promotion, the network, the life outside the office, and any future in Germany beyond your current contract — yes. Every professional who has lived there will tell you the same.",
      },
      {
        question: "Do you offer corporate training?",
        answer:
          "Yes. We work with teams relocating employees to Germany. Write to us for corporate cohort details and invoicing.",
      },
    ],
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
