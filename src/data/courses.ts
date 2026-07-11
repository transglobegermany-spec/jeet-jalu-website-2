/**
 * Course catalog — your product offerings.
 * Add new courses here; pages auto-generate at /courses/[slug]
 */

export interface CourseModule {
  title: string;
  description: string;
}

export interface Course {
  slug: string;
  name: string;
  level: string;
  tagline: string;
  headline: string;
  description: string;
  price: number;
  currency: "INR";
  razorpayLink: string; // TODO: replace with actual Razorpay payment link
  modules: CourseModule[];
  includes: string[];
  outcome: string;
  idealFor: string[];
  notFor: string[];
  faqs: Array<{ question: string; answer: string }>;
  testimonial: {
    quote: string;
    name: string;
    outcome: string;
  };
}

export const courses: Course[] = [
  {
    slug: "a1",
    name: "The Complete A1 System",
    level: "A1 (Beginner)",
    tagline: "Master German fundamentals — offline, forever.",
    headline: "From zero to A1 fluency. 16 interactive modules.",
    description:
      "Everything you need to build a solid foundation in German. 15 complete modules covering pronunciation, articles, verbs, sentences, cases, and more. Learn offline on any device. No subscriptions, no limits.",
    price: 799,
    currency: "INR",
    razorpayLink: "https://rzp.io/l/YOUR-RAZORPAY-LINK-HERE", // TODO: replace with real link
    modules: [
      {
        title: "Pronunciation & Sounds",
        description:
          "German sounds, vowels, consonants, and rhythm of spoken German.",
      },
      {
        title: "The Complete Article System",
        description:
          "All 8 article types, possessives, demonstratives. 13 sections.",
      },
      {
        title: "Sentence Foundations",
        description: "Word order, verb placement, the Satzklammer.",
      },
      {
        title: "Time, Days & Months",
        description:
          "Telling time, am/im/um rule, seasons. Interactive clock quiz.",
      },
      {
        title: "Personal Pronouns",
        description: "Nominativ, Akkusativ, Dativ forms. Sentence builder.",
      },
      {
        title: "Verb Conjugation",
        description:
          "Regular, irregular, modal, separable verbs. Full tables.",
      },
      {
        title: "Perfekt (Past Tense)",
        description: "haben + Partizip II. When and how to use it.",
      },
      {
        title: "Cases (Nominativ through Dativ)",
        description: "Visual explanations and interactive practice.",
      },
      {
        title: "Prepositions",
        description:
          "Akkusativ, Dativ, two-way. Clickable verb cards included.",
      },
      {
        title: "W-Fragen & Ja/Nein Questions",
        description: "Question word order, sentence inversion.",
      },
      {
        title: "Goethe A1 Vocabulary",
        description: "Official vocabulary by theme. Searchable, color-coded.",
      },
      {
        title: "The A1 Workbook",
        description:
          "Comprehensive practice. All topics covered. Multiple quizzes.",
      },
      {
        title: "Deutsch-Spiele (4 Games)",
        description:
          "Article, verb, case, and word order games. Team classroom mode.",
      },
    ],
    includes: [
      "15 interactive HTML modules (offline-compatible)",
      "150+ practice quiz questions with instant feedback",
      "Interactive sentence builders and games",
      "Goethe A1 exam-aligned vocabulary",
      "Comprehensive workbook with master scoreboard",
      "Lifetime access — download once, use forever",
      "Works on phone, tablet, laptop",
      "No subscriptions, no watermarks",
    ],
    outcome:
      "After completing this system, you will confidently introduce yourself, handle basic German conversations, understand sentence structure, and be ready for A2 studies or German travel.",
    idealFor: [
      "Complete beginners starting their German journey",
      "Self-learners who prefer structured, offline resources",
      "People preparing for Goethe A1 exam",
      "Anyone planning to study or work in Germany",
      "Professionals wanting lifetime, unrestricted access to materials",
    ],
    notFor: [
      "People expecting live classroom instruction (these are self-study modules)",
      "Those looking for audio conversations (reading/grammar focused)",
    ],
    faqs: [
      {
        question: "Is this really lifetime access?",
        answer:
          "Yes. You download the zip once, and it's yours forever. No subscriptions, no login required, no expiration. Works offline indefinitely.",
      },
      {
        question: "Do I need internet to use these modules?",
        answer:
          "No. Download once, learn offline anywhere — flights, trains, cafes. Internet is optional.",
      },
      {
        question: "Can I use this on my phone?",
        answer:
          "Yes. All modules are HTML files that work on any device with a browser — phone, tablet, laptop. Responsive design included.",
      },
      {
        question: "What if I don't finish in a certain time?",
        answer:
          "There's no time limit. This is self-paced. Go as fast or slow as you need. Everything is in one download.",
      },
      {
        question: "Is this a replacement for live classes?",
        answer:
          "No, this is self-study. If you want 1:1 mentorship alongside these materials, check the other programs at jeetjalu.com.",
      },
      {
        question: "Can I share this with friends?",
        answer:
          "This license is for personal use. If friends want it, they purchase their own copy. It supports the work that goes into creating these.",
      },
    ],
    testimonial: {
      quote:
        "I tried three different apps before this. The articles module alone saved me months of confusion. Best ₹799 I spent on German.",
      name: "Priya K., Bangalore",
      outcome: "Now confidently speaking A1 German with colleagues",
    },
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
