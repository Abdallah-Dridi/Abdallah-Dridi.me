export type NavItem = {
  label: string;
  href: string;
};

export type Investigation = {
  index: string;
  title: string;
  format: string;
  year: string;
  summary: string;
  motive: string;
  inquiry: string;
  tags: string[];
};

export type Note = {
  index: string;
  text: string;
};

export const navItems: NavItem[] = [
  { label: "Method", href: "#manifesto" },
  { label: "Current", href: "#identity" },
  { label: "Systems", href: "#systems" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" }
];

export const heroData = {
  eyebrow: "Cybersecurity Engineering / Systems Observation / 2026",
  lead: "Reading systems by their traces, their defaults, and the moments where they stop behaving politely.",
  metadata: [
    "Field: cybersecurity engineering student",
    "Current orientation: blue-team / SOC-side thinking",
    "Certifications: AWS SAA / eJPT / RHCSA"
  ],
  quickLinks: [
    { label: "Enter the dossier", href: "#manifesto" },
    { label: "GitHub", href: "https://github.com/Abdallah-Dridi" }
  ]
};

export const manifestoData = {
  heading:
    "I am most interested in the moment a system stops looking finished and starts revealing how it actually works.",
  body: [
    "Security, to me, is not branding, posture, or a fixed badge. It is a practice of attention. Watch the signal. Question the defaults. Follow the sequence underneath the interface until the surface story stops being enough.",
    "That is why my work stays exploratory. I move through environments, controls, telemetry, and operating systems with the same intent: understand what is happening beneath the visible layer, and why."
  ],
  attribution: "Working principle, not slogan."
};

export const identityData = {
  lead:
    "I’m a cybersecurity engineering student with a present bias toward blue-side analysis and SOC thinking, but I do not treat one specialty as a permanent identity. The work is deliberately non-linear.",
  paragraphs: [
    "I study systems by interrogating their internals: where privilege collects, where logging becomes narrative, where convenience quietly introduces risk, and where operational knowledge sharpens security judgment.",
    "The goal is not to perform a label. It is to build a way of seeing that holds up across changing tooling, environments, and problem spaces."
  ],
  callouts: [
    {
      label: "Discipline",
      value: "Cybersecurity engineering",
      note: "Student, builder, operator-in-training"
    },
    {
      label: "Current bias",
      value: "Blue-team / SOC-side attention",
      note: "Detection logic, context, and sequence"
    },
    {
      label: "Approach",
      value: "Non-linear exploration",
      note: "Cloud, Linux, telemetry, identity"
    }
  ],
  certifications: ["AWS SAA", "eJPT", "RHCSA"]
};

export const investigations: Investigation[] = [
  {
    index: "01",
    title: "Signal Triage",
    format: "Investigation",
    year: "Current line of work",
    summary:
      "A continuing focus on how telemetry becomes judgment during alert review: moving from isolated events to coherent incident narratives.",
    motive:
      "What mattered here was learning to read past noise. Blue-side work becomes useful when the signal is arranged into sequence instead of treated as a dashboard artifact.",
    inquiry:
      "I was trying to understand what separates raw visibility from actual analyst clarity.",
    tags: ["SIEM thinking", "Alert context", "Log analysis"]
  },
  {
    index: "02",
    title: "Cloud Surface Audit",
    format: "Environment Study",
    year: "AWS-informed exploration",
    summary:
      "An ongoing examination of cloud posture through identity boundaries, public exposure, and the operational cost of convenience-first configuration.",
    motive:
      "This matters because cloud literacy is only half-finished until it becomes attack-surface literacy.",
    inquiry:
      "I was trying to understand where permission sprawl, weak defaults, and architecture shortcuts begin to reshape risk.",
    tags: ["AWS", "IAM", "Configuration review"]
  },
  {
    index: "03",
    title: "Linux As Substrate",
    format: "Operational Practice",
    year: "RHCSA-backed discipline",
    summary:
      "A systems-first thread built around Linux administration, services, permissions, automation, and recovery under pressure.",
    motive:
      "Security reasoning improves when the underlying platform is not abstract. Knowing how systems are operated changes how they are defended.",
    inquiry:
      "I was trying to understand how machines fail quietly before they fail loudly.",
    tags: ["RHEL", "Shell", "Systemd", "Hardening"]
  }
];

export const notes: Note[] = [
  {
    index: "A1",
    text: "Logs are not neutral. They are evidence filtered through design decisions."
  },
  {
    index: "A2",
    text: "A quiet system is not always a healthy system. Sometimes it is just blind."
  },
  {
    index: "A3",
    text: "The question is rarely whether a control exists. The question is what it fails to notice."
  },
  {
    index: "A4",
    text: "Operational fluency turns security from opinion into diagnosis."
  },
  {
    index: "A5",
    text: "I trust interfaces less after I understand the machinery underneath them."
  }
];

export const contactData = {
  heading: "If the work matters, reach out directly.",
  body:
    "I’m interested in security engineering, blue-team, and technically rigorous early-career roles that value curiosity, systems thinking, and disciplined execution.",
  email: "dridi.abdallah1@gmail.com",
  github: "https://github.com/Abdallah-Dridi",
  domain: "https://abdallah-dridi.me"
};
