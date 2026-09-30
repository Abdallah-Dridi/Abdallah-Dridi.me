export const en = {
  locale: "en",
  seo: {
    title: "Abdallah Dridi — Cloud & AI Security Engineering",
    description:
      "I’m Abdallah Dridi, a cybersecurity engineering student building security automation across SOC, cloud, DevSecOps, and AI-assisted analysis.",
  },
  nav: {
    home: "AD / Clear skies",
    languageAria: "Choose language",
  },
  common: {
    skip: "Skip to content",
    illustration: "Illustration",
    earned: "Earned",
    inProgress: "In progress",
    native: "Native",
    downloadCv: "Download my CV",
  },
  hero: {
    altitude: "0 m · Takeoff",
    title: "I’m Abdallah. I build the automation that keeps cloud skies clear.",
    subtitle:
      "I’m a cybersecurity engineering student working where detection, cloud infrastructure, automation, and AI meet.",
    availability: "Available February 2027 · 6-month PFE · France",
    cue: "Start climbing",
    fallbackStatus: "Atmosphere fallback active",
  },
  foundation: {
    eyebrow: "Phase 01 · Flight system",
    title: "This is the route I’m building.",
    lead:
      "I move from the alert on the ground to the cloud above it, then into the automation and AI that help security work move faster without losing human judgment.",
    mappingLabel: "Open my evidence deck",
  },
  layers: {
    ground: {
      altitude: "0 m",
      short: "Takeoff",
      label: "Ground · Dawn",
      title: "I start with the signal.",
      body: "I look for what changed, what can be verified, and what deserves an analyst’s attention.",
    },
    soc: {
      altitude: "FL 040",
      short: "SOC",
      label: "Troposphere · Control tower",
      title: "I automate the first response.",
      body: "At Amen Bank, I automated alert triage with Splunk SOAR playbooks inside an existing SOC, enriched alerts with MISP and VirusTotal, and integrated Gemini-assisted analysis.",
    },
    cloud: {
      altitude: "FL 120",
      short: "Cloud",
      label: "Cloud layer · Above the clouds",
      title: "I build isolated space for security work.",
      body: "I built Orchestryx to provision isolated cyber-range and CTF environments asynchronously on AWS.",
    },
    pipeline: {
      altitude: "FL 240",
      short: "Pipeline",
      label: "Jet stream · Flight path",
      title: "I turn repeatable work into flow.",
      body: "I connect security tools into workflows: from web discovery and testing to reports, playbooks, queues, and cloud provisioning.",
    },
    ai: {
      altitude: "FL 400",
      short: "AI",
      label: "Stratosphere · The forecast",
      title: "AI security is where I’m heading.",
      body: "So far, I’ve put an LLM to work on real SOC alerts and built an LLM-and-RAG football statistics assistant. My experience is early, practical, and growing.",
    },
    space: {
      altitude: "Edge of space",
      short: "Contact",
      label: "Landing clearance · Flight log",
      title: "Clear skies from February 2027. Let’s talk.",
      body: "I’m looking for a six-month end-of-studies internship in France where I can keep building useful, defensible security automation.",
    },
  },
  dossier: {
    eyebrow: "My flight dossier",
    title: "Don’t take the forecast on trust. Inspect the evidence.",
    portraitAlt: "I’m Abdallah Dridi, working with technical equipment",
    identity: {
      label: "Identity transponder",
      name: "I’m Abdallah Dridi.",
      role: "I study systems and network security.",
      route: "Tunisia · Germany · France",
      status: "Ready for a PFE from February 2027",
    },
    projects: {
      eyebrow: "Selected projects",
      title: "I learn by building systems I can inspect.",
      selectorAria: "Choose one of my projects",
      visualAria: "Illustrated system view for the selected project",
      stack: "Stack and evidence",
      categories: {
        orchestryx: "Cloud security",
        latrodectus: "Detection · Academic",
        wirecat: "Network analysis",
        kooretna: "AI · RAG",
      },
      diagrams: {
        orchestryx: {
          environment: "Isolated environment",
        },
        latrodectus: {
          specimen: "Windows loader sample",
          sampleType: "PE",
          static: "Static analysis",
          sandbox: "Sandbox analysis",
          entropy: "High .rsrc entropy",
          packing: "Estimated packing",
          detection: "Detection opportunities",
        },
        wirecat: {
          capture: "Live capture",
          filter: "Protocol filter",
          export: "Evidence export",
          ethernet: "Ethernet",
          ip: "IP",
          tcp: "TCP",
        },
        kooretna: {
          apis: "Sports APIs",
          modelType: "LLM",
          answer: "Football statistics answer",
        },
      },
    },
    experience: {
      eyebrow: "Field log",
      title: "I’ve used automation in two security internships.",
    },
    academics: {
      eyebrow: "Academic route",
      title: "My engineering route crosses three countries.",
      activitiesTitle: "Outside the classroom",
      activities: [
        "I placed 2nd with the SudoSec CTF team at Securicon Tunisia.",
        "I’m a member of Securinets and IEEE TEK-UP.",
      ],
    },
    certifications: {
      eyebrow: "Credentials",
      title: "What I’ve earned, and what I’m working toward.",
    },
    contact: {
      eyebrow: "Landing clearance",
      title: "Clear skies from February 2027. Let’s talk.",
      body: "I’m looking for a six-month PFE in France where I can work on cloud security, security automation, detection, or practical AI security.",
      email: "Email me",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Download my CV",
    },
  },
  experience: {
    soar: {
      role: "My SOC/SOAR automation internship",
      period: "June–September 2026",
      bullets: [
        "I developed and adapted Splunk SOAR playbooks to automate alert triage inside an existing SOC environment.",
        "I automated Threat Intelligence enrichment with MISP and VirusTotal.",
        "I integrated the Gemini API for LLM-assisted alert analysis.",
      ],
    },
    scanner: {
      role: "My web vulnerability assessment internship",
      period: "August 2025",
      bullets: [
        "I built an automated OWASP Top 10 web vulnerability scanner combining Gobuster, SQLMap, and XSStrike.",
        "I generated HTML reports with findings, impact, and remediation guidance.",
      ],
    },
  },
  projects: {
    orchestryx: {
      name: "Orchestryx",
      description:
        "I built a cloud-native cyber range and CTF platform that provisions isolated environments asynchronously.",
    },
    latrodectus: {
      name: "Latrodectus malware analysis",
      description:
        "I performed academic triage, static analysis, and sandbox analysis of a real Windows loader. I documented IOCs, MITRE ATT&CK mapping, YARA, and detection opportunities, including high .rsrc entropy and an estimated ~82% packing level.",
    },
    wirecat: {
      name: "WireCat",
      description:
        "I built a real-time packet analyzer for live capture, Ethernet/IP/TCP inspection, protocol filtering, and export to .pcap, .csv, and .txt.",
    },
    kooretna: {
      name: "Kooretna",
      description:
        "I built a football statistics assistant using the Groq API and a RAG pipeline fed by sports APIs.",
    },
    "risk-management": {
      name: "My cybersecurity risk-management project",
      description:
        "I completed an academic EBIOS and ISO 27005 risk analysis with ALE, ROSI, a project charter, WBS, PERT, and Earned Value Management.",
    },
  },
  education: {
    "tek-up": {
      location: "Tunisia",
      description: "I’m completing an engineering degree in systems and network security.",
    },
    schmalkalden: {
      location: "Germany",
      description: "I completed an Erasmus+ exchange.",
    },
    cesi: {
      location: "France",
      description: "I’m completing an academic mobility year.",
    },
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
