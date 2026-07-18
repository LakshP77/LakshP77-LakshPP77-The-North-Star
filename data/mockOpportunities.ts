import type { Opportunity } from "@/types/opportunity";

export const mockOpportunities: Opportunity[] = [
  {
    title: "Product Management Intern",
    company: "Microsoft",
    type: "Internship",
    location: "Redmond, WA",
    match: 92,
    reason:
      "Strong match with leadership, technical project work, and product thinking.",
    link: "https://careers.microsoft.com/",
  },
  {
    title: "Software Engineer Intern",
    company: "Amazon",
    type: "Internship",
    location: "Seattle, WA",
    match: 84,
    reason:
      "Good match with Python, JavaScript, and web app experience.",
    link: "https://www.amazon.jobs/",
  },
  {
    title: "HCI Research Assistant",
    company: "University Lab",
    type: "Research",
    location: "Seattle, WA",
    match: 88,
    reason:
      "Strong fit with accessibility, information systems, and user-centered design.",
    link: "https://ischool.uw.edu/research",
  },
];
