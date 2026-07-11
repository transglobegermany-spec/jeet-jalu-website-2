/**
 * The teaching method — principles shown on /method and previewed on the homepage.
 */
export interface Principle {
  germanWord: string;
  translation: string;
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    germanWord: "Wirklichkeit",
    translation: "reality",
    title: "Real German, not exam German",
    description:
      "Every lesson is built from situations you will actually face: the flat viewing, the doctor's call, the team meeting, the argument with the internet provider. Exams become easy when the language is real — never the other way round.",
  },
  {
    germanWord: "Kultur",
    translation: "culture",
    title: "Culture is half the language",
    description:
      "Germans communicate differently: more direct, more precise, less small talk. We teach the unwritten rules — because knowing the words for an interview matters little if you don't know how a German interview works.",
  },
  {
    germanWord: "Genauigkeit",
    translation: "precision",
    title: "Precision over shortcuts",
    description:
      "Small groups. Cameras on. Every sentence corrected. No recorded lectures pretending to be teaching. It is slower than cramming and faster than failing twice.",
  },
  {
    germanWord: "Ehrlichkeit",
    translation: "honesty",
    title: "Honesty, even when it costs us",
    description:
      "We tell you real timelines, real requirements, and real chances — and we turn away students we cannot honestly help. Trust is the only marketing we do.",
  },
  {
    germanWord: "Begleitung",
    translation: "accompaniment",
    title: "Mentorship, not just classes",
    description:
      "Language is one part of moving your life to another country. Documents, decisions, doubts at 11pm — you have a mentor who has stood exactly where you stand.",
  },
];
