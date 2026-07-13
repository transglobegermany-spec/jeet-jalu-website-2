/**
 * Single source of truth for site-wide values.
 * Update contact details, navigation, and SEO defaults here only.
 */
export const site = {
  name: "Jeet Jalu",
  legalName: "Jeet Jalu German Education",
  tagline: "Germany, done right.",
  description:
    "Premium German language education and personal mentorship for students, professionals, and Ausbildung aspirants building careers in Germany.",
  // TODO: replace with the real production domain before launch.
  url: "https://www.jeetjalu.com",
  email: "hello@jeetjalu.com", // TODO: replace with real email
  location: "Rajkot, Gujarat, India",
  social: {
    // TODO: replace with real profile URLs, or remove entries you don't use.
    instagram: "https://instagram.com/jeetjalu",
    linkedin: "https://linkedin.com/in/jeetjalu",
    youtube: "https://youtube.com/@jeetjalu",
  },
} as const;

export const navigation = [
  { label: "The Academy", href: "/courses" },
  { label: "Discover Germany", href: "/germany" },
  { label: "The Journal", href: "/blog" },
  { label: "Mentorship", href: "/programs" },
  { label: "About", href: "/about" },
  { label: "Journeys", href: "/stories" },
] as const;
