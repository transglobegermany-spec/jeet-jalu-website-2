/**
 * Success stories.
 * To add a story: append one object. It appears automatically on
 * /stories and (if `featured: true`) can be surfaced on the homepage.
 */
export interface Story {
  slug: string;
  name: string;
  location: string;
  outcome: string;
  program: string;
  quote: string;
  narrative: string;
  featured?: boolean;
}

export const stories: Story[] = [
  {
    slug: "priya-nursing-stuttgart",
    name: "Priya M.",
    location: "Stuttgart, Germany",
    outcome: "Nursing Ausbildung (Pflegefachfrau)",
    program: "Ausbildung Track",
    quote:
      "Agencies asked for lakhs and promised the moon. Jeet told me the truth in the first call: no German, no Ausbildung. Fourteen months later I signed my nursing contract myself.",
    narrative:
      "Priya came to us after two agencies had quoted enormous fees for 'guaranteed placement'. Her German was A0. We gave her a fourteen-month plan, she gave it fourteen months of work. She reached B2, interviewed with three clinics in German, and chose her own employer in Stuttgart — with no commission taken from her salary, ever.",
    featured: true,
  },
  {
    slug: "dhruvi-masters-aachen",
    name: "Dhruvi P.",
    location: "Aachen, Germany",
    outcome: "M.Sc. student, RWTH Aachen",
    program: "German A1–C1",
    quote:
      "I had failed B1 twice with a local institute. Here I stopped memorising and started speaking — I cleared B2 and now I understand my professors in Aachen.",
    narrative:
      "Dhruvi is the classic case of exam-first teaching gone wrong: two B1 attempts, plenty of grammar rules, zero confidence speaking. We rebuilt from the conversation up. Eight months later she passed B2 comfortably — and, more importantly, her first semester in Aachen felt like arriving somewhere she already knew.",
  },
  {
    slug: "arjun-blue-card-munich",
    name: "Arjun S.",
    location: "Munich, Germany",
    outcome: "Senior Engineer, Blue Card relocation",
    program: "Professionals",
    quote:
      "My company moved me to Munich with 'English is fine'. It wasn't. Six months with Jeet and I run stand-ups in German — that changed how the team sees me.",
    narrative:
      "Arjun's employer relocated him with the standard reassurance that English would be enough. It was enough for the job description — not for the team dinners, the reviews, or the promotion conversations. Six months of focused 1:1 sessions built around his actual meetings changed that. His next performance review was conducted in German, at his request.",
  },
  {
    slug: "kavya-hotel-management",
    name: "Kavya R.",
    location: "Freiburg, Germany",
    outcome: "Hotel management Ausbildung",
    program: "Ausbildung Track",
    quote:
      "The mock interviews were harder than the real one. When the hotel director asked me why Germany, I had answered that question twenty times already — in German.",
    narrative:
      "Kavya wanted hospitality, a field where personality matters as much as paperwork. Alongside B1 preparation, we drilled the cultural details German interviewers actually test: directness, eye contact, concrete answers. Her interview at a Freiburg hotel lasted twenty minutes; her preparation for it lasted ten months. She signed the same week.",
  },
];

export const featuredStory = stories.find((s) => s.featured) ?? stories[0];
