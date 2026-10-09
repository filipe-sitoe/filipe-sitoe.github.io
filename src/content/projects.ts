import type { StaticImageData } from "next/image";
import beyondTheContent from "@/assets/projects/beyond-the-content.webp";
import certipm from "@/assets/projects/certipm.webp";
import ejem from "@/assets/projects/ejem.webp";
import mozdevzDataSchool from "@/assets/projects/mozdevz-data-school.webp";

export type Project = {
  name: string;
  subtitle?: string;
  year: string;
  description: string;
  url: string;
  /** Homepage screenshot, 16:10. */
  image: StaticImageData;
  stack: string[];
};

/** The first project is shown as the featured one. */
export const projects: Project[] = [
  {
    name: "Beyond The Content",
    subtitle: "Mozambique Voice Over Summit",
    year: "2026",
    description:
      "Official website for the first national event dedicated to the voice over industry in Mozambique, bringing together event details, panels and speakers, registration and FAQs.",
    url: "https://beyondthecontent.co.mz",
    image: beyondTheContent,
    stack: ["Next.js", "React"],
  },
  {
    name: "CertiPM",
    year: "2025",
    description:
      "Training and certification platform for Project Direct, the first PMI® Authorized Training Partner in Mozambique.",
    url: "https://www.certipm.com",
    image: certipm,
    stack: ["React", "Vite", "Tailwind CSS"],
  },
  {
    name: "Escola de Judo Edson Madeira",
    year: "2025",
    description:
      "Institutional platform for a judo school that uses sport as a tool for education and social change.",
    // ejem.org.mz was not resolving; switch back to https://ejem.org.mz once it is online.
    url: "https://escola-de-judo-edson-madeira.vercel.app",
    image: ejem,
    stack: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "MozDevZ Data School",
    year: "2026",
    description:
      "Course guide that teaches data analysis with Google Sheets and SQL through a mystery case.",
    url: "https://dead-on-arrival-guide.vercel.app",
    image: mozdevzDataSchool,
    stack: ["Next.js", "Tailwind CSS"],
  },
];
