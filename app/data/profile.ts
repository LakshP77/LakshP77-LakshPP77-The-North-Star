export type Experience = {
  id: number;
  title: string;
  organization: string;
  description: string;
  skills: string[];
};

export type Project = {
  id: number;
  name: string;
  description: string;
  skills: string[];
};

export type CareerProfile = {
  name: string;
  education: string;
  graduationYear: number;
  targetRoles: string[];
  interests: string[];
  skills: string[];
  experiences: Experience[];
  projects: Project[];
};

export const mockCareerProfile: CareerProfile = {
  name: "Laksh Patel",
  education: "University of Washington — Informatics",
  graduationYear: 2028,

  targetRoles: [
    "Product Management Intern",
    "Software Engineering Intern",
    "HCI Research Assistant",
  ],

  interests: [
    "Accessibility",
    "Human-centered technology",
    "Ethical AI",
    "Information systems",
  ],

  skills: [
    "Java",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Leadership",
    "Product thinking",
  ],

  experiences: [
    {
      id: 1,
      title: "Sales Associate",
      organization: "Orangetheory Fitness",
      description:
        "Supported customers, handled front-desk operations, and communicated with members in a fast-paced environment.",
      skills: ["Customer service", "Communication", "Operations"],
    },
    {
      id: 2,
      title: "Treasurer",
      organization: "Desi Student Association",
      description:
        "Managed the organization budget and supported event planning and financial decisions.",
      skills: ["Budgeting", "Leadership", "Event planning"],
    },
  ],

  projects: [
    {
      id: 1,
      name: "Polaris",
      description:
        "A career operating system that helps users discover and manage professional opportunities.",
      skills: ["Next.js", "TypeScript", "Product design"],
    },
    {
      id: 2,
      name: "Wildfire Risk Visualization",
      description:
        "A planned visualization system for communicating wildfire risk using public environmental data.",
      skills: ["Data visualization", "Python", "Accessibility"],
    },
  ],
};