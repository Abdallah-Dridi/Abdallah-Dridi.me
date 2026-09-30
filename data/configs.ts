import type {
  CertificationId,
  ConfigId,
  ExperienceId,
  ProjectId,
} from "./content";

export type Configuration = {
  id: ConfigId;
  experience: readonly ExperienceId[];
  projects: readonly ProjectId[];
  certifications: readonly CertificationId[];
  tools: readonly string[];
};

export const configurations: Record<ConfigId, Configuration> = {
  blue: {
    id: "blue",
    experience: ["soar"],
    projects: ["latrodectus", "wirecat"],
    certifications: ["ejpt", "rhcsa", "btl1"],
    tools: ["Splunk SOAR", "MISP", "VirusTotal", "Python", "YARA"],
  },
  cloud: {
    id: "cloud",
    experience: [],
    projects: ["orchestryx"],
    certifications: ["aws-saa", "rhcsa", "aws-security", "cka"],
    tools: ["AWS", "AWS CDK", "Docker", "Cognito", "SQS"],
  },
  pipeline: {
    id: "pipeline",
    experience: ["scanner"],
    projects: ["orchestryx"],
    certifications: ["google-python", "ejpt"],
    tools: ["Python", "Gobuster", "SQLMap", "XSStrike", "AWS CDK"],
  },
  mind: {
    id: "mind",
    experience: ["soar"],
    projects: ["kooretna"],
    certifications: [],
    tools: ["Gemini API", "Groq API", "LangChain", "RAG"],
  },
};

export const defaultConfigOrder: readonly ConfigId[] = [
  "blue",
  "cloud",
  "pipeline",
  "mind",
];

