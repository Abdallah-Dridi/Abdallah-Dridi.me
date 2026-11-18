export const stageIds = ["foot", "climb", "works", "tickets", "summit"] as const;
export type StageId = (typeof stageIds)[number];

export const projectIds = [
  "forenmate",
  "orchestryx",
  "latrodectus",
  "wirecat",
  "kooretna",
] as const;
export type ProjectId = (typeof projectIds)[number];

export const content = {
  identity: {
    name: "Abdallah Dridi",
    email: "dridi.abdallah1@gmail.com",
    linkedin: "https://www.linkedin.com/in/abdallah-dridi-93589a184/",
    github: "https://github.com/Abdallah-Dridi",
  },
  projects: {
    forenmate: {
      medium: [
        "Python",
        "Zeek",
        "TShark",
        "Volatility",
        "The Sleuth Kit",
        "LLM agents",
      ],
    },
    orchestryx: {
      medium: [
        "AWS",
        "AWS CDK",
        "FastAPI",
        "PostgreSQL",
        "SQS",
        "Celery",
        "Cognito",
        "Docker",
      ],
    },
    latrodectus: {
      medium: [
        "Detect It Easy",
        "peframe",
        "FLOSS",
        "capa",
        "YARA",
        "Triage",
        "MITRE ATT&CK",
      ],
    },
    wirecat: {
      medium: ["Java", "JavaFX", "Pcap4J", "Maven"],
    },
    kooretna: {
      medium: ["Groq API", "LangChain", "RAG", "Hugging Face datasets"],
    },
  } satisfies Record<ProjectId, { medium: readonly string[] }>,
  cv: {
    en: "/cv/Abdallah-Dridi-CV-EN.pdf",
    fr: "/cv/Abdallah-Dridi-CV-FR.pdf",
  },
} as const;
