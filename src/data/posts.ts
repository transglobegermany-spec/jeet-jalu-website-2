export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "quote"; text: string };

export interface Post {
  slug: string;
  category: "Guide" | "Story";
  title: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  blocks: PostBlock[];
}

/**
 * To add a new article: copy any post object, change the fields, done.
 * The index page and article pages update automatically.
 * Keep roughly 70% Guides, 30% Stories.
 */
export const posts: Post[] = [
  {
    slug: "the-mistake-that-cost-me-a-year",
    category: "Story",
    title: "The Mistake That Cost Me a Year",
    excerpt:
      "A consultant sold my family a smooth plan for Germany. What he left out cost me twelve months of my life — and taught me how I work today.",
    date: "2026-07-12",
    readMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "I want to tell you about the most expensive sentence anyone ever said to me. It was spoken in a consultant's office in Gujarat, and it sounded wonderful: \"Go to Germany, learn the language there, then join Studienkolleg. Simple.\"",
      },
      {
        type: "p",
        text: "My family trusted it. I trusted it. We paid for it. And it was wrong.",
      },
      { type: "h2", text: "What nobody mentioned" },
      {
        type: "p",
        text: "What that smooth plan left out is that Studienkolleg — the foundation year many Indian students need before a German bachelor's — has a competitive entrance examination. The Aufnahmeprüfung. Limited seats. Serious competition. You don't stroll in with enthusiasm; you fight your way in with prepared German and mathematics.",
      },
      {
        type: "p",
        text: "I discovered this standing inside Germany, money already spent, with no plan B. I failed the entrance exam. A university admitted me anyway — and six months later informed me I couldn't continue without Studienkolleg after all. One year of my life, gone. Not because I lacked ability. Because nobody told me the truth when it was cheap to hear it.",
      },
      { type: "h2", text: "What that year bought" },
      {
        type: "p",
        text: "It took me a long time to see it, but that year became the foundation of how I work. Every rule in my practice today traces back to it:",
      },
      {
        type: "list",
        items: [
          "I verify every program requirement at the official source — because nobody verified anything for me.",
          "I say the uncomfortable truths in the first meeting — entrance exams, seat competition, real costs — because comfort is what I was sold, and it cost me a year.",
          "I prepare students before the flight, not after the shock — because I know exactly which shocks are coming.",
        ],
      },
      { type: "quote", text: "A guide who hides the hard parts isn't a guide. He's a salesman." },
      { type: "h2", text: "What this means for you" },
      {
        type: "p",
        text: "If you're planning Germany, ask every advisor one question: \"What are the three hardest parts of my specific path?\" If the answer is vague, or everything sounds easy, walk away. Germany is absolutely achievable — students I've guided are living in Stuttgart, Munich, and Aachen right now. But it's achievable because they knew the terrain before they landed on it.",
      },
      {
        type: "p",
        text: "I couldn't go back and warn the boy who sat in that consultant's office. So I became the warning for everyone who comes after him.",
      },
    ],
  },
  {
    slug: "blocked-account-sperrkonto-guide",
    category: "Guide",
    title: "The Blocked Account (Sperrkonto), Explained Properly",
    excerpt:
      "€11,904, €992 per month, one non-negotiable document. What the blocked account is, how to open it without delays, and the mistakes that stall visas.",
    date: "2026-07-12",
    readMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "If you take one financial document seriously in your German student visa file, make it this one. The blocked account — Sperrkonto — is Germany's proof that you can support yourself for your first year. No blocked account, no visa. It's that binary.",
      },
      { type: "h2", text: "The numbers for 2026" },
      {
        type: "list",
        items: [
          "Required deposit: €11,904 for a 12-month visa.",
          "Monthly release: €992 — paid out to your regular German account each month after you arrive.",
          "The figure follows Germany's BAföG reference rate and is reviewed periodically — always confirm the current amount with your embassy before transferring.",
        ],
      },
      {
        type: "tip",
        text: "Transfer slightly more than the minimum — around €12,000–12,100. International bank fees are sometimes deducted from the transferred amount, and if even €20 less than €11,904 arrives, your confirmation stalls until you top it up.",
      },
      { type: "h2", text: "How it actually works" },
      {
        type: "p",
        text: "You open the account online from India before your visa appointment, transfer the amount, and receive a blocking confirmation — the document the embassy wants. After you land in Germany and activate the account, €992 flows to your current account every month. You cannot withdraw it all at once; that's the entire point of the design.",
      },
      { type: "h2", text: "Choosing a provider" },
      {
        type: "p",
        text: "The established providers — Expatrio, Fintiba, Coracle, Deutsche Bank — all produce embassy-accepted confirmations. Compare setup fees and monthly fees, check recent reviews, and prefer providers your university has experience with. Don't choose on the prettiest website; choose on reliability of payout after arrival.",
      },
      { type: "h2", text: "The mistakes I see every intake" },
      {
        type: "list",
        items: [
          "Opening the account too late — start 6–8 weeks before your embassy appointment, not two.",
          "Name mismatches between passport and account application — one spelling difference can mean redoing the process.",
          "Transferring the exact minimum and losing €30 to bank charges on the way.",
          "Assuming €992/month is a comfortable budget in Munich or Frankfurt — it's a legal minimum, not a lifestyle. Budget cities are your friend in year one.",
        ],
      },
      {
        type: "p",
        text: "Handled early and precisely, the Sperrkonto is a formality. Handled casually, it's the single most common reason visa files stall. Do it the German way: early, exact, documented.",
      },
    ],
  },
  {
    slug: "aps-certificate-india-guide",
    category: "Guide",
    title: "The APS Certificate: Don't Let a Formality Cost You a Semester",
    excerpt:
      "Every Indian student needs APS verification before a German student visa. Here's what it is, the sequence to follow, and where months quietly disappear.",
    date: "2026-07-12",
    readMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "The APS (Akademische Prüfstelle) certificate is the document most Indian students discover too late. It's an authentication of your academic records by the APS office — and since 2022 it has been mandatory for Indian applicants before you can even book a German student visa appointment.",
      },
      { type: "h2", text: "The correct sequence" },
      {
        type: "list",
        items: [
          "Apply for APS as early as possible — ideally while you're still shortlisting universities, not after an admission letter arrives.",
          "Prepare clean scans of your academic documents exactly as the APS checklist specifies.",
          "Pay the fee, submit, and wait — processing takes weeks, and peak season (before winter intake deadlines) is slower.",
          "Receive the APS certificate, then proceed to your visa appointment with it in your file.",
        ],
      },
      {
        type: "tip",
        text: "The APS certificate doesn't expire quickly and isn't tied to one university. Getting it early costs you nothing; getting it late can cost you an intake.",
      },
      { type: "h2", text: "Where students lose months" },
      {
        type: "list",
        items: [
          "Waiting for university admission before starting APS — the two can and should run in parallel.",
          "Inconsistent names or marks across documents — mismatches trigger queries and restarts.",
          "Applying in the exact months everyone else applies. If your intake is Winter 2027, your APS should be moving in 2026.",
        ],
      },
      { type: "h2", text: "My rule for every student" },
      {
        type: "p",
        text: "In my counselling files, APS is step one, not step seven. It's boring, it's bureaucratic, and it's precisely the kind of thing Germany checks without mercy. Fees and portal details change — always verify the current requirements on the official APS India website before applying, and never rely on a screenshot someone shared in a Telegram group two years ago.",
      },
      {
        type: "p",
        text: "Germany rewards people who respect its paperwork. Start the boring documents first, and the exciting ones — the admission letter, the visa — follow far more smoothly.",
      },
    ],
  },
  {
    slug: "public-vs-private-universities-germany",
    category: "Guide",
    title: "Public vs Private Universities in Germany: The Honest Comparison",
    excerpt:
      "One is nearly free and fiercely competitive. The other is faster and costs real money. Neither is 'better' — here's how to decide like an adult.",
    date: "2026-07-12",
    readMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Every week someone asks me whether public or private universities in Germany are 'better'. It's the wrong question. The right question is: which one fits your profile, your timeline, and your budget — honestly assessed?",
      },
      { type: "h2", text: "Public universities: the deal" },
      {
        type: "list",
        items: [
          "Tuition is free or minimal at most public universities (Baden-Württemberg charges non-EU students €1,500 per semester — the notable exception). You pay a small semester contribution that usually includes a transport ticket.",
          "The catch is competition: popular English-taught master's programs receive enormous application volumes, and requirements — grades, ECTS mapping, German level, sometimes GRE — are enforced without flexibility.",
          "Timelines are rigid. Miss a deadline or a document, and the answer isn't 'we'll adjust' — it's 'next intake'.",
        ],
      },
      { type: "h2", text: "Private universities: the deal" },
      {
        type: "list",
        items: [
          "Tuition is real — commonly €10,000–20,000 per year depending on program and institution.",
          "In exchange: more intake dates, faster admission decisions, smaller classes, and often stronger industry placement support.",
          "Quality varies more than in the public system. Some private universities are excellent; some coast on marketing. Accreditation and graduate outcomes are what you check, not Instagram ads.",
        ],
      },
      {
        type: "tip",
        text: "A German degree's value in the job market comes overwhelmingly from the degree being German, your grades, your internships, and your German language level — far more than from the public/private label.",
      },
      { type: "h2", text: "How I actually advise students" },
      {
        type: "p",
        text: "Strong academic profile, patience for one competitive cycle, and a tight budget? Public, every time. Average grades, an urgent timeline, or a specific career-focused program — and the family can genuinely afford tuition without loans that strangle you? A well-chosen private university is a legitimate, honorable path, not a consolation prize.",
      },
      {
        type: "p",
        text: "What I refuse to do is push students toward whichever option pays a higher commission. That's how I was misled once — and it's the one thing that will never happen in my office.",
      },
    ],
  },
  {
    slug: "a1-to-b1-german-roadmap",
    category: "Guide",
    title: "How Long Does German Really Take? The A1 to B1 Roadmap",
    excerpt:
      "Forget '30 days to fluent German'. Here's the honest timeline from your first Hallo to B1 — and the habits that separate finishers from quitters.",
    date: "2026-07-12",
    readMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "I learned German the hard way — inside Bavarian lecture halls where engineering was taught entirely in German, in a dialect my textbook never mentioned. So believe me when I say: I have no patience for '30 days to fluency' promises. Here's the real map.",
      },
      { type: "h2", text: "The honest timeline" },
      {
        type: "list",
        items: [
          "A1 — roughly 2–3 months of consistent study. You learn to introduce yourself, handle numbers, time, basic daily situations.",
          "A2 — another 2–3 months. Past tense arrives, vocabulary widens, you survive simple real conversations.",
          "B1 — the serious level, typically 3–4 months beyond A2. You express opinions, handle work and study situations, and qualify for many visa and Ausbildung pathways.",
        ],
      },
      {
        type: "p",
        text: "Total: roughly 8–12 months from zero to a genuine B1, studying consistently — not 8–12 months of owning a course and opening it on Sundays.",
      },
      { type: "h2", text: "What actually decides your speed" },
      {
        type: "list",
        items: [
          "Daily contact beats weekend marathons. Forty-five focused minutes every day outruns five hours every Saturday.",
          "Speaking from week one. Students who only read and listen build a silent German that collapses in their first real conversation.",
          "Learning nouns with their articles from day one — der Tisch, not Tisch. Retrofitting genders at B1 is misery I wouldn't wish on anyone.",
          "Exam format practice before the exam, not instead of learning. Goethe exams reward familiarity with their structure.",
        ],
      },
      {
        type: "tip",
        text: "The single biggest predictor I see in my students isn't talent. It's whether German has a fixed daily slot in their calendar. Motivation fluctuates; slots don't.",
      },
      { type: "h2", text: "One warning from Bavaria" },
      {
        type: "p",
        text: "Certificate German and street German are cousins, not twins. Germans speak fast, in dialects, over background noise. From A2 onward, feed your ears real German — series, podcasts, YouTube — daily. Your B1 certificate opens the door; your trained ears let you live behind it.",
      },
      {
        type: "p",
        text: "Do the hard work here, so life is easy there. That sentence is on my classroom wall for a reason.",
      },
    ],
  },
  {
    slug: "what-bavaria-taught-me-about-discipline",
    category: "Story",
    title: "What Bavaria Taught Me About Discipline",
    excerpt:
      "I studied engineering entirely in German, in a dialect I couldn't understand — and then lost everything to the one subject no university teaches.",
    date: "2026-07-12",
    readMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "There's a version of my Germany story I could tell you where I'm the hero: boy from Rajkot conquers engineering in a foreign language. It would even be half true. But the half I usually keep for my students is the more valuable one.",
      },
      { type: "h2", text: "Studying everything twice" },
      {
        type: "p",
        text: "My program in Bavaria was taught entirely in German. Not English-taught with German on the side — thermodynamics in German, mathematics in German, questions and answers in German. And not the German I'd studied, either: Bavaria speaks its own melody, one that makes even northern Germans concentrate.",
      },
      {
        type: "p",
        text: "For a year I understood fragments of lectures. So I studied everything twice — once for the engineering, once for the language underneath the engineering. It was brutal, and it worked. My German stopped being a subject and became survival equipment. That's the part of the story where discipline wins.",
      },
      { type: "h2", text: "The subject nobody teaches" },
      {
        type: "p",
        text: "Then comes the other part. Far from home, nobody watching, more freedom than I'd ever held — and no training for it. The parties got louder. The studies stretched. The discipline that had carried a teenager through self-taught visa research dissolved, slowly, in the very country it had won me. My German journey ended in a way I never planned, and the flight home was the longest of my life.",
      },
      {
        type: "quote",
        text: "Grammar didn't end my Germany dream. Discipline did.",
      },
      { type: "h2", text: "What I do differently because of it" },
      {
        type: "p",
        text: "This is why my students hear about more than the language. They hear about money — budgeting €992 a month like it's an engineering constraint. About routines — because freedom without structure is how dreams dissolve at 2am. About the specific loneliness of a German winter, and what to build before it arrives.",
      },
      {
        type: "p",
        text: "Some of them roll their eyes in Rajkot. I smile — I rolled mine once too. The warnings aren't for Rajkot. They're for later, for the difficult moment in Germany when my voice surfaces in their head and carries them through. That's the whole job.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
