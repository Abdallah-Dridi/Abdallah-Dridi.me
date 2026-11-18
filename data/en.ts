export const en = {
  locale: "en",
  seo: {
    title: "Abdallah Dridi — security engineer in training",
    description:
      "Cybersecurity engineering student building SOC automation, cloud security and AI-assisted analysis. Open to a six-month internship in France from February 2027.",
  },
  common: {
    skip: "Skip to content",
    languageAria: "Choose language",
    medium: "Medium",
  },
  rail: {
    aria: "Page sections",
    goTo: "Go to",
    stages: {
      foot: "Foot",
      climb: "The climb",
      works: "Works",
      tickets: "Tickets",
      summit: "Summit",
    },
  },
  foot: {
    kicker: "Abdallah Dridi, security engineer in training",
    title: "Still climbing.",
    lead: "I build the automation that helps defenders keep up: SOC workflows, cloud security and AI-assisted analysis. Same stone, a little higher each time.",
    tape: "Open to a 6-month internship from Feb 2027",
  },
  climb: {
    title: "The climb",
    lead: "Every step so far, in order. What I did, and what it taught me.",
    stations: [
      {
        when: "2022",
        title: "TEK-UP University, Tunisia",
        body: "Started an engineering degree in systems and network security.",
        lesson: "Networks first. Everything else sits on top of them.",
      },
      {
        when: "August 2025",
        title: "Amen Bank, Tunis",
        body: "Built an automated OWASP Top 10 scanner combining Gobuster, SQLMap and XSStrike, with HTML reports covering impact and remediation.",
        lesson: "Finding the hole is half the job. The report is what gets it fixed.",
      },
      {
        when: "2026",
        title: "Hochschule Schmalkalden, Germany",
        body: "Erasmus+ exchange semester.",
        lesson: "A new country is a fast course in starting from zero.",
      },
      {
        when: "June – September 2026",
        title: "Amen Bank SOC, Tunis",
        body: "Built and adapted Splunk SOAR playbooks for alert triage, automated threat-intel enrichment with MISP and VirusTotal, and added Gemini-assisted alert analysis.",
        lesson: "Switched sides, from breaking in to keeping watch. Automation only helps if the analyst trusts it.",
      },
      {
        when: "2026 – 2027",
        title: "CESI École d’Ingénieurs, France",
        body: "Engineering cycle on academic mobility.",
        lesson: "Learning to explain the work, not only to do it.",
      },
    ],
    carryTitle: "What I carry",
  },
  works: {
    title: "Works",
    lead: "Things I built to understand how they break.",
    items: {
      orchestryx: {
        title: "Orchestryx",
        category: "Cloud security",
        body: "A cloud-native cyber range and CTF platform that provisions isolated environments asynchronously on AWS.",
      },
      latrodectus: {
        title: "Latrodectus",
        category: "Malware analysis, academic",
        body: "Triage, static and sandbox analysis of a real Windows loader. Documented IOCs, MITRE ATT&CK mapping, YARA and detection opportunities, including high .rsrc entropy and an estimated 82% packing level.",
      },
      wirecat: {
        title: "WireCat",
        category: "Network analysis",
        body: "A real-time packet analyzer: live capture, Ethernet, IP and TCP inspection, protocol filters, and export to .pcap, .csv and .txt.",
      },
      kooretna: {
        title: "Kooretna",
        category: "AI, retrieval",
        body: "A football statistics assistant built on the Groq API and a RAG pipeline fed by sports APIs.",
      },
    },
    risk: {
      title: "Risk management study",
      category: "Governance, academic",
      body: "An EBIOS and ISO 27005 risk analysis with ALE and ROSI, a project charter, WBS, PERT and earned value management.",
    },
    etch: {
      request: "Request",
      queue: "Queue",
      workers: "Workers",
      environment: "Isolated range",
      sample: "Windows loader",
      highEntropy: "High entropy",
      packed: "82% packed",
      capture: "Live capture",
      filter: "Filter",
      export: "Export",
      question: "Question",
      sources: "Sports APIs",
      retrieve: "Retrieve",
      answer: "Answer",
    },
  },
  tickets: {
    title: "Tickets",
    lead: "You can’t win without buying the ticket. Everything I tried, including what’s still a draw.",
    items: [
      {
        title: "SudoSec CTF team",
        body: "Competed at Securicon Tunisia.",
        serial: "2nd place",
      },
      {
        title: "Started on offense",
        body: "eJPT and web scanners first. Then moved to the blue team, where the work is keeping things standing.",
        serial: "Changed direction",
      },
      {
        title: "QuotePilot",
        body: "An AI quote assistant for small repair businesses. Market study, business model and break-even, built as a team.",
        serial: "2026",
      },
      {
        title: "AI support for artisans",
        body: "An agentic assistant that answers client questions, books sessions and takes orders. Pitched as a two-person project at CESI.",
        serial: "2026",
      },
      {
        title: "Securinets and IEEE TEK-UP",
        body: "Showed up, kept showing up.",
        serial: "Member",
      },
      {
        title: "AWS Certified Security – Specialty",
        body: "Studying.",
        serial: "Draw pending",
      },
      {
        title: "CKA",
        body: "Studying.",
        serial: "Draw pending",
      },
      {
        title: "CyberDefenders Blue Team Level 1",
        body: "Studying.",
        serial: "Draw pending",
      },
    ],
  },
  summit: {
    title: "Next: a six-month internship, from February 2027.",
    body: "I’m looking for a PFE in France in SOC automation, incident response, cloud security or practical AI security.",
    email: "Email me",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "Download my CV",
    portraitAlt: "Abdallah Dridi, black and white, working on a small robot",
    portraitCaption: "At the workbench. Photograph.",
    languagesTitle: "Languages",
    languages: [
      { name: "French", level: "C1" },
      { name: "English", level: "C1" },
      { name: "German", level: "A2" },
      { name: "Arabic", level: "Native" },
    ],
    rollBack: "Roll it back",
    rollBackHint: "Back to the foot of the hill",
    colophon: "Set in Redaction and Archivo.",
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
