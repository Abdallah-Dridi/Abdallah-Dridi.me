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
    overline: "Voici Abdallah · Ingénieur cybersécurité / 2027",
    title: "La sécurité qui s’exécute seule.",
    supporting:
      "Une alerte entre. Le contexte s’assemble. L’infrastructure répond. Le système libère l’analyste du travail répétitif.",
    availability: "Disponible en février 2027 · PFE de 6 mois · France",
    phaseLabel: "La boucle de défense autonome",
    phaseNote: "Du signal brut à la réponse maîtrisée.",
    scroll: "Suivre le signal",
  },
  system: {
    aria: "Système de sécurité autonome reliant détection, IA, cloud et automatisation",
    core: "Noyau sécurité",
    status: "Système prêt",
    mark: "AD",
    edition: "27",
    nodes: {
      detect: "Détecter",
      reason: "Raisonner",
      isolate: "Isoler",
      automate: "Automatiser",
    },
    layers: {
      signal: "01 / Plan signal",
      intelligence: "02 / Plan intelligence",
      infrastructure: "03 / Plan cloud",
      response: "04 / Plan réponse",
    },
  },
  story: {
    eyebrow: "Un signal. Quatre transformations.",
    title: "La sécurité n’est pas un dashboard. C’est une séquence vivante.",
    lead:
      "Abdallah construit les liens entre détection, renseignement, infrastructure isolée et réponse reproductible.",
    stages: [
      {
        label: "Signal",
        title: "Voir ce qui a changé.",
        body: "Commencer par les preuves : alertes, paquets, indicateurs et comportements associés.",
      },
      {
        label: "Intelligence",
        title: "Donner du contexte au signal.",
        body: "Enrichir le signal avec la Threat Intelligence et employer l’IA pour assister l’analyse sans fabriquer de certitude.",
      },
      {
        label: "Infrastructure",
        title: "Contenir l’inconnu.",
        body: "Provisionner des environnements cloud isolés pour exécuter les activités de sécurité sans compromettre le système global.",
      },
      {
        label: "Réponse",
        title: "Transformer le jugement en flux.",
        body: "Automatiser les étapes répétables afin de préserver le contrôle de l’analyste tout en éliminant le travail routinier.",
      },
    ],
    configurationEyebrow: "Choisir un mode opératoire",
    configurationTitle: "Un ingénieur. Quatre accès au même système.",
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
