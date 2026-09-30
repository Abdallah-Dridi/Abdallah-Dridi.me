export const en = {
  locale: "en",
  seo: {
    title: "Abdallah Dridi — Cybersecurity Engineering",
    description:
      "Portfolio of Abdallah Dridi, a cybersecurity engineering student seeking a six-month end-of-studies internship in France from February 2027.",
  },
  nav: {
    home: "Abdallah Dridi",
    reveal: "Reveal",
    configure: "Configure",
    specs: "Specs",
    compare: "Compare",
    contact: "Contact",
    aria: "Primary navigation",
    languageAria: "Choose language",
    menuAria: "Toggle navigation menu",
  },
  intro: {
    overline: "Introducing Abdallah.",
    title: "Security that runs itself.",
    supporting:
      "One engineer. Four configurations. Security automation from signal to infrastructure.",
    availability: "Available February 2027 · 6-month PFE · France",
    phaseLabel: "Foundation preview",
    phaseNote: "Scroll-led reveal in the next build phase.",
  },
  configurations: {
    blue: { name: "BLUE", description: "SOC & detection" },
    cloud: { name: "CLOUD", description: "AWS & infrastructure" },
    pipeline: { name: "PIPELINE", description: "DevSecOps & AppSec" },
    mind: {
      name: "MIND",
      description: "AI security — an emerging, evidence-based direction",
    },
  },
  common: {
    skip: "Skip to content",
    inProgress: "In progress",
    native: "Native",
    downloadCv: "Download CV",
  },
  experience: {
    soar: {
      role: "Cybersecurity intern — SOC/SOAR automation",
      bullets: [
        "Develop and adapt Splunk SOAR playbooks for automated alert triage within an existing SOC environment.",
        "Automate Threat Intelligence enrichment through MISP and VirusTotal.",
        "Integrate the Gemini API for LLM-assisted alert analysis.",
      ],
    },
    scanner: {
      role: "Cybersecurity intern — web vulnerability assessment",
      bullets: [
        "Build an automated OWASP Top 10 web vulnerability scanner integrating Gobuster, SQLMap, and XSStrike.",
        "Generate HTML reports with findings, security impact, and remediation guidance.",
      ],
    },
  },
  projects: {
    orchestryx: {
      name: "Orchestryx",
      description:
        "Cloud-native cyber range and CTF platform with asynchronous provisioning of isolated environments.",
    },
    latrodectus: {
      name: "Latrodectus malware analysis",
      description:
        "Academic triage, static analysis, and sandbox analysis of a real Windows loader sample, including IOCs, MITRE ATT&CK mapping, YARA, and detection opportunities. Findings included high .rsrc entropy and an estimated ~82% packing level.",
    },
    wirecat: {
      name: "WireCat",
      description:
        "Real-time packet analyzer with live capture, Ethernet/IP/TCP inspection, protocol filtering, and export to .pcap, .csv, and .txt.",
    },
    kooretna: {
      name: "Kooretna",
      description:
        "Football statistics assistant using the Groq API and a RAG pipeline fed by sports APIs.",
    },
    obsec: {
      name: "OBSEC / AnonChat",
      description: "Peer-to-peer, encrypted local messaging concept built with Python.",
    },
    "risk-management": {
      name: "Cybersecurity risk management",
      description:
        "Academic EBIOS and ISO 27005 risk analysis with ALE, ROSI, a project charter, WBS, PERT, and Earned Value Management.",
    },
  },
  education: {
    "tek-up": "Engineering degree in systems and network security",
    schmalkalden: "Erasmus+ exchange",
    cesi: "Academic mobility",
  },
  languages: {
    french: "French",
    english: "English",
    german: "German",
    arabic: "Arabic",
  },
} as const;

type WidenStrings<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? readonly WidenStrings<Item>[]
    : T extends object
      ? { readonly [Key in keyof T]: WidenStrings<T[Key]> }
      : T;

export type Dictionary = WidenStrings<typeof en>;
