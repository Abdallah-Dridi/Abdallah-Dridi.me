export const configIds = ["blue", "cloud", "pipeline", "mind"] as const;
export type ConfigId = (typeof configIds)[number];

export const experienceIds = ["soar", "scanner"] as const;
export type ExperienceId = (typeof experienceIds)[number];

export const projectIds = [
  "orchestryx",
  "latrodectus",
  "wirecat",
  "kooretna",
  "obsec",
  "risk-management",
] as const;
export type ProjectId = (typeof projectIds)[number];

export const certificationIds = [
  "aws-saa",
  "rhcsa",
  "ejpt",
  "google-python",
  "aws-security",
  "cka",
  "btl1",
] as const;
export type CertificationId = (typeof certificationIds)[number];

export type CertificationStatus = "earned" | "in-progress";

export const content = {
  identity: {
    name: "Abdallah Dridi",
    email: "dridi.abdallah1@gmail.com",
    linkedin: "https://www.linkedin.com/in/abdallah-dridi-93589a184/",
    github: "https://github.com/Abdallah-Dridi",
    location: "France",
  },
  availability: {
    start: "2027-02",
    durationMonths: 6,
    type: "PFE",
  },
  education: [
    {
      id: "tek-up",
      institution: "TEK-UP University",
      location: "Tunisia",
      period: "2022–2027",
    },
    {
      id: "schmalkalden",
      institution: "Hochschule Schmalkalden",
      location: "Germany",
      period: "2026",
    },
    {
      id: "cesi",
      institution: "CESI École d’Ingénieurs",
      location: "France",
      period: "2026–2027",
    },
  ],
  experience: {
    soar: {
      organization: "Tunisian Bank",
      location: "Tunis",
      period: "2026-06/2026-09",
      tools: ["Splunk SOAR", "MISP", "VirusTotal", "Gemini API"],
    },
    scanner: {
      organization: "Tunisian Bank",
      location: "Tunis",
      period: "2025-08",
      tools: ["Gobuster", "SQLMap", "XSStrike", "HTML"],
    },
  } satisfies Record<ExperienceId, unknown>,
  projects: {
    orchestryx: {
      kind: "product",
      tools: [
        "AWS",
        "AWS CDK",
        "FastAPI",
        "PostgreSQL",
        "SQS",
        "Celery",
        "Cognito",
        "Docker",
        "SQLAlchemy",
        "Alembic",
        "boto3",
      ],
    },
    latrodectus: {
      kind: "academic",
      tools: [
        "MalwareBazaar",
        "VirusTotal",
        "Hybrid Analysis",
        "Triage",
        "Detect It Easy",
        "peframe",
        "FLOSS",
        "capa",
        "YARA",
        "MITRE ATT&CK",
      ],
    },
    wirecat: {
      kind: "product",
      tools: ["Java", "JavaFX", "Pcap4J", "Maven", "MVC"],
    },
    kooretna: {
      kind: "product",
      tools: ["Groq API", "LangChain", "Hugging Face datasets", "RAG"],
    },
    obsec: {
      kind: "concept",
      aliases: ["AnonChat"],
      tools: ["Python"],
      todo:
        "TODO: Confirm implemented OBSEC features before replacing the concept-level description.",
    },
    "risk-management": {
      kind: "academic",
      tools: ["EBIOS", "ISO 27005", "ALE", "ROSI", "WBS", "PERT", "EVM"],
    },
  } satisfies Record<ProjectId, unknown>,
  certifications: {
    "aws-saa": {
      name: "AWS Certified Solutions Architect – Associate",
      status: "earned",
    },
    rhcsa: { name: "RHCSA", status: "earned" },
    ejpt: { name: "eJPT", status: "earned" },
    "google-python": {
      name: "Google IT Automation with Python",
      status: "earned",
    },
    "aws-security": {
      name: "AWS Certified Security – Specialty",
      status: "in-progress",
    },
    cka: { name: "CKA", status: "in-progress" },
    btl1: {
      name: "CyberDefenders Blue Team Level 1",
      status: "in-progress",
    },
  } satisfies Record<
    CertificationId,
    { name: string; status: CertificationStatus }
  >,
  languages: [
    { id: "french", level: "C1" },
    { id: "english", level: "C1" },
    { id: "german", level: "A2" },
    { id: "arabic", level: "native" },
  ],
  activities: {
    sudosec: { result: "2nd place", event: "Securicon Tunisia" },
    memberships: ["Securinets", "IEEE TEK-UP"],
  },
  cv: {
    en: "/cv/Abdallah-Dridi-CV-EN.pdf",
    fr: "/cv/Abdallah-Dridi-CV-FR.pdf",
  },
} as const;

