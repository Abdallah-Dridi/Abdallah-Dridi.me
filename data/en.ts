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
  },
  works: {
    title: "Works",
    lead: "Things I built to understand how they break.",
    items: {
      forenmate: {
        title: "ForenMate",
        category: "DFIR and AI agents, team project in progress",
        body: "One case workspace for PCAPs, disk images and memory dumps. Isolated workers extract the artifacts, normalize them into searchable events, and AI agents correlate network, disk and memory evidence into timelines, with every finding traced back to its source for the analyst.",
      },
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
    etch: {
      isolated: "Isolated workers",
      timeline: "Timeline",
      agents: "AI agents",
      findings: "Findings",
      pcap: "PCAP",
      disk: "Disk image",
      memory: "Memory dump",
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
    lead: "You can’t win without buying the ticket. Every exam sat and every CTF entered, with what each one taught me.",
    items: [
      {
        title: "eJPT",
        body: "Taught me to work like an attacker: enumerate everything before touching anything, then pivot through a network one host at a time.",
        serial: "Certified",
      },
      {
        title: "SudoSec CTF team",
        body: "Competed at Securicon Tunisia. Learned to split a board fast and trust teammates with the parts I can’t do.",
        serial: "2nd place",
      },
      {
        title: "Securinets CTF, forensics",
        body: "Static analysis of a remote-access trojan: strings, imports and config before ever running it.",
        serial: "Forensics",
      },
      {
        title: "SickSociety CTF, “hateme”",
        body: "Docker layer forensics, unpacking a PyInstaller binary, decompiling Python bytecode, then reversing an LCG-based XOR stream cipher. One flag, five skills.",
        serial: "Forensics",
      },
      {
        title: "CI/CD Goat",
        body: "Eleven challenges on poisoned pipeline execution, token escalation and supply-chain compromise. The build pipeline is part of the attack surface.",
        serial: "11 challenges",
      },
      {
        title: "RHCSA",
        body: "Hands-on Linux administration under exam pressure: permissions, SELinux, systemd, storage. You defend a system better once you’ve built one.",
        serial: "Certified",
      },
      {
        title: "AWS Solutions Architect – Associate",
        body: "VPCs, IAM and resilient design. Most cloud incidents start with a configuration choice, so that’s where security starts too.",
        serial: "Certified",
      },
      {
        title: "Google IT Automation with Python",
        body: "Scripting, regex and Git. The habit of automating a task the second time I do it, which led straight to SOAR.",
        serial: "Certified",
      },
      {
        title: "Started on offense",
        body: "eJPT and web scanners first. Then moved to the blue team, where the work is keeping things standing.",
        serial: "Changed direction",
      },
      {
        title: "Securinets and IEEE TEK-UP",
        body: "Showed up, kept showing up.",
        serial: "Member",
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
