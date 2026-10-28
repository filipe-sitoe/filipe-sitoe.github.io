import type { StaticImageData } from "next/image";
import beyondTheContent from "@/assets/projects/beyond-the-content.webp";

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
];
