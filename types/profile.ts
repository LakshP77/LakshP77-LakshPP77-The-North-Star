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
