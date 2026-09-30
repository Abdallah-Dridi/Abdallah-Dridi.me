import type { Dictionary } from "./en";

export const fr = {
  locale: "fr",
  seo: {
    title: "Abdallah Dridi — Ingénierie cybersécurité",
    description:
      "Portfolio d’Abdallah Dridi, étudiant ingénieur en cybersécurité à la recherche d’un stage de fin d’études de six mois en France à partir de février 2027.",
  },
  nav: {
    home: "Abdallah Dridi",
    reveal: "Révélation",
    configure: "Configurer",
    specs: "Fiche technique",
    compare: "Comparer",
    contact: "Contact",
    aria: "Navigation principale",
    languageAria: "Choisir la langue",
    menuAria: "Ouvrir ou fermer le menu de navigation",
  },
  intro: {
    overline: "Voici Abdallah.",
    title: "La sécurité qui s’exécute seule.",
    supporting:
      "Un ingénieur. Quatre configurations. Automatiser la sécurité, du signal à l’infrastructure.",
    availability: "Disponible en février 2027 · PFE de 6 mois · France",
    phaseLabel: "Aperçu des fondations",
    phaseNote: "La révélation au défilement arrive à la prochaine phase.",
  },
  configurations: {
    blue: { name: "BLUE", description: "SOC & détection" },
    cloud: { name: "CLOUD", description: "AWS & infrastructure" },
    pipeline: { name: "PIPELINE", description: "DevSecOps & AppSec" },
    mind: {
      name: "MIND",
      description: "Sécurité IA — une orientation émergente, étayée par les faits",
    },
  },
  common: {
    skip: "Aller au contenu",
    inProgress: "En cours",
    native: "Langue maternelle",
    downloadCv: "Télécharger le CV",
  },
  experience: {
    soar: {
      role: "Stagiaire cybersécurité — automatisation SOC/SOAR",
      bullets: [
        "Développer et adapter des playbooks Splunk SOAR pour automatiser le triage des alertes au sein d’un SOC existant.",
        "Automatiser l’enrichissement Threat Intelligence avec MISP et VirusTotal.",
        "Intégrer l’API Gemini pour assister l’analyse des alertes par LLM.",
      ],
    },
    scanner: {
      role: "Stagiaire cybersécurité — évaluation de vulnérabilités web",
      bullets: [
        "Développer un scanner automatisé des vulnérabilités OWASP Top 10 intégrant Gobuster, SQLMap et XSStrike.",
        "Générer des rapports HTML présentant les vulnérabilités, leur impact et les recommandations de remédiation.",
      ],
    },
  },
  projects: {
    orchestryx: {
      name: "Orchestryx",
      description:
        "Concevoir une plateforme cloud-native de cyber range et de CTF assurant le provisionnement asynchrone d’environnements isolés.",
    },
    latrodectus: {
      name: "Analyse du malware Latrodectus",
      description:
        "Analyser, dans un cadre académique, un véritable loader Windows par triage, analyse statique et sandbox ; couvrir les IOCs, la cartographie MITRE ATT&CK, YARA et les pistes de détection. Relever une forte entropie de .rsrc et un taux de packing estimé à environ 82 %.",
    },
    wirecat: {
      name: "WireCat",
      description:
        "Analyser les paquets en temps réel avec capture live, inspection Ethernet/IP/TCP, filtrage par protocole et export en .pcap, .csv et .txt.",
    },
    kooretna: {
      name: "Kooretna",
      description:
        "Développer un assistant de statistiques footballistiques avec l’API Groq et un pipeline RAG alimenté par des API sportives.",
    },
    obsec: {
      name: "OBSEC / AnonChat",
      description:
        "Concevoir un concept de messagerie locale pair-à-pair chiffrée en Python.",
    },
    "risk-management": {
      name: "Gestion des risques cyber",
      description:
        "Réaliser une analyse académique des risques avec EBIOS, ISO 27005, ALE et ROSI, complétée par une charte projet, un WBS, PERT et l’Earned Value Management.",
    },
  },
  education: {
    "tek-up": "Préparer un diplôme d’ingénieur en sécurité des systèmes et réseaux",
    schmalkalden: "Effectuer un échange Erasmus+",
    cesi: "Effectuer une mobilité académique",
  },
  languages: {
    french: "Français",
    english: "Anglais",
    german: "Allemand",
    arabic: "Arabe",
  },
} as const satisfies Dictionary;

