export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  index: string;
  title: string;
  status?: string;
  meta?: string;
  summary: string;
  detail: string;
  tags: string[];
  href?: string;
  isExternal?: boolean;
  interactive?: boolean;
};

export type Note = {
  index: string;
  text: string;
};

export const navItems: NavItem[] = [
  { label: "Method", href: "#manifesto" },
  { label: "Current", href: "#identity" },
  { label: "Work", href: "#systems" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" }
];

export const heroData = {
  eyebrow: "Cybersecurity Engineering Student / Blue-Team Bias / 2026",
  lead: "I build and study systems that make more sense under inspection than they do at first glance.",
  metadata: [
    "Current lens: blue-team / SOC-side thinking",
    "Certifications: AWS SAA / eJPT / RHCSA",
    "Ground: cloud labs, Linux, packet inspection, web security"
  ],
  quickLinks: [
    { label: "Selected work", href: "#systems" },
    { label: "GitHub", href: "https://github.com/Abdallah-Dridi" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/abdallah-dridi-93589a184"
    }
  ]
};

export const manifestoData = {
  heading:
    "I trust traces, flow, and failure modes more than polished surfaces.",
  body: [
    "That shows up in the work I keep returning to: cloud lab isolation, vulnerability tracking, packet inspection, and scan pipelines. I like systems that reveal their assumptions once you watch the sequence closely enough."
  ],
  attribution: "Observation before assumption."
};

export const identityData = {
  lead:
    "I’m a cybersecurity engineering student with a current bias toward blue-team work, analyst context, and operational clarity.",
  paragraphs: [
    "I do not want to flatten myself into one label too early. I move between cloud, Linux, web security, telemetry, and packet analysis, then keep the parts that improve how I investigate and defend systems.",
    "What I’m looking for is straightforward: environments where careful reading, technical curiosity, and disciplined execution are useful, not ornamental."
  ],
  callouts: [
    {
      label: "Current focus",
      value: "Blue-team / SOC thinking",
      note: "Signal triage, analyst context, visibility, response"
    },
    {
      label: "Operating ground",
      value: "Cloud, Linux, and web",
      note: "AWS labs, service behavior, permissions, automation"
    },
    {
      label: "Working bias",
      value: "Study before certainty",
      note: "Defaults, sequence, failure paths, evidence"
    }
  ],
  certifications: ["AWS SAA", "eJPT", "RHCSA"]
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Orchestryx",
    status: "In Progress",
    summary:
      "Secure cloud lab orchestration for CTF events, training programs, and cyber ranges.",
    detail:
      "Built around reproducible AWS environments that can be provisioned on demand without treating isolation as an afterthought.",
    tags: ["AWS", "Terraform", "Docker", "Kubernetes"],
    interactive: false
  },
  {
    index: "02",
    title: "OBSEC",
    summary:
      "Privacy-first ecosystem for peer-to-peer communication and anonymous value exchange.",
    detail:
      "Designed around the premise that privacy should live in the architecture itself, not in optional settings layered over it.",
    tags: ["Cryptography", "P2P", "Privacy-by-design"],
    interactive: false
  },
  {
    index: "03",
    title: "OWASP Top 10 Scanner",
    summary:
      "Automated web scanner that chains crawling, enumeration, injection testing, and reporting into one repeatable pipeline.",
    detail:
      "The point was to operationalize the OWASP Top 10 into real scan flow: discover the surface first, then feed targeted testing instead of running tools in isolation.",
    tags: ["Python", "sqlmap", "gospider", "hakrawler"],
    href: "https://github.com/Abdallah-Dridi/AuWASP",
    isExternal: true,
    interactive: true
  },
  {
    index: "04",
    title: "PatchStash",
    summary:
      "Vulnerability tracking dashboard for teams that need CVEs, remediation state, and ownership in one place.",
    detail:
      "Built to make vulnerability management readable instead of spreadsheet-bound, with public data and remediation context presented as operational work rather than passive inventory.",
    tags: ["Symfony", "Twig", "Docker", "CVE tracking"],
    href: "https://github.com/Abdallah-Dridi/PatchStash",
    isExternal: true,
    interactive: true
  },
  {
    index: "05",
    title: "WireCat",
    meta: "Collaborative / fork-derived",
    summary:
      "Network packet analysis toolkit for real-time capture, filtering, and inspection.",
    detail:
      "Featured here as collaborative work centred on analyst workflow, protocol inspection, and export-friendly traffic analysis.",
    tags: ["JavaFX", "PCAP", "Packet inspection", "Collaborative"],
    href: "https://github.com/Abdallah-Dridi/WireCat",
    isExternal: true,
    interactive: true
  }
];

export const notes: Note[] = [
  {
    index: "A1",
    text: "Packet traces change everything once you stop reading protocols in isolation and start reading sequence."
  },
  {
    index: "A2",
    text: "A scanner is only useful if enumeration is disciplined before exploitation begins."
  },
  {
    index: "A3",
    text: "Cloud automation stops being impressive the moment isolation becomes optional."
  },
  {
    index: "A4",
    text: "A vulnerability list without remediation context is just backlog theatre."
  },
  {
    index: "A5",
    text: "Linux keeps me honest because it exposes bad assumptions faster than polished tooling does."
  }
];

export const contactData = {
  heading: "For security engineering, blue-team, or systems work, reach out directly.",
  body:
    "I’m interested in early-career roles where investigation, operational context, and careful execution matter more than buzzwords.",
  email: "dridi.abdallah1@gmail.com",
  github: "https://github.com/Abdallah-Dridi",
  linkedin: "https://linkedin.com/in/abdallah-dridi-93589a184",
  domain: "https://abdallah-dridi.me"
};
