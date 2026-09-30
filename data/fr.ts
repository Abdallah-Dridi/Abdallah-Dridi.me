import type { Dictionary } from "./en";

export const fr = {
  locale: "fr",
  seo: {
    title: "Abdallah Dridi — Sécurité cloud & IA",
    description:
      "Je suis Abdallah Dridi, étudiant ingénieur en cybersécurité. Je développe des automatisations pour le SOC, le cloud, le DevSecOps et l’analyse assistée par IA.",
  },
  nav: {
    home: "AD / Ciel dégagé",
    languageAria: "Choisir la langue",
  },
  common: {
    skip: "Aller au contenu",
    illustration: "Illustration",
    earned: "Obtenue",
    inProgress: "En cours",
    native: "Langue maternelle",
    downloadCv: "Télécharger mon CV",
  },
  hero: {
    altitude: "0 m · Décollage",
    title: "Je suis Abdallah. Je construis l’automatisation qui maintient le cloud sous un ciel dégagé.",
    subtitle:
      "Je suis étudiant ingénieur en cybersécurité et je travaille à la rencontre de la détection, du cloud, de l’automatisation et de l’IA.",
    availability: "Disponible en février 2027 · PFE de 6 mois · France",
    cue: "Commencer l’ascension",
    fallbackStatus: "Atmosphère de secours active",
  },
  foundation: {
    eyebrow: "Phase 01 · Système de vol",
    title: "Voici la trajectoire que je construis.",
    lead:
      "Je pars de l’alerte au sol, je monte vers le cloud, puis vers l’automatisation et l’IA qui accélèrent le travail de sécurité sans écarter le jugement humain.",
    mappingLabel: "Ouvrir mon dossier de preuves",
  },
  layers: {
    ground: {
      altitude: "0 m",
      short: "Décollage",
      label: "Sol · Aube",
      title: "Je commence par le signal.",
      body: "Je cherche ce qui a changé, ce qui peut être vérifié et ce qui mérite l’attention d’un analyste.",
    },
    soc: {
      altitude: "FL 040",
      short: "SOC",
      label: "Troposphère · Tour de contrôle",
      title: "J’automatise la première réponse.",
      body: "Chez Amen Bank, j’ai automatisé le triage des alertes avec des playbooks Splunk SOAR au sein d’un SOC existant, enrichi les alertes avec MISP et VirusTotal, puis intégré une analyse assistée par Gemini.",
    },
    cloud: {
      altitude: "FL 120",
      short: "Cloud",
      label: "Couche nuageuse · Au-dessus des nuages",
      title: "Je crée un espace isolé pour les activités de sécurité.",
      body: "J’ai construit Orchestryx pour provisionner de façon asynchrone des environnements isolés de cyber range et de CTF sur AWS.",
    },
    pipeline: {
      altitude: "FL 240",
      short: "Pipeline",
      label: "Courant-jet · Trajectoire",
      title: "Je transforme le travail répétable en flux.",
      body: "Je relie les outils de sécurité en workflows : de la découverte web et des tests aux rapports, playbooks, files de messages et provisionnements cloud.",
    },
    ai: {
      altitude: "FL 400",
      short: "IA",
      label: "Stratosphère · Prévision",
      title: "La sécurité de l’IA est la direction que je prends.",
      body: "J’ai déjà appliqué un LLM à de véritables alertes SOC et construit un assistant de statistiques footballistiques fondé sur un LLM et un pipeline RAG. Mon expérience est encore récente, concrète et en progression.",
    },
    space: {
      altitude: "Limite de l’espace",
      short: "Contact",
      label: "Autorisation d’atterrir · Journal de vol",
      title: "Ciel dégagé à partir de février 2027. Échangeons.",
      body: "Je recherche un PFE de six mois en France pour continuer à construire des automatisations de sécurité utiles et défendables en entretien.",
    },
  },
  dossier: {
    eyebrow: "Mon dossier de vol",
    title: "Ne vous fiez pas uniquement aux prévisions. Examinez les preuves.",
    portraitAlt: "Je suis Abdallah Dridi et je travaille avec du matériel technique",
    identity: {
      label: "Transpondeur d’identité",
      name: "Je suis Abdallah Dridi.",
      role: "J’étudie la sécurité des systèmes et des réseaux.",
      route: "Tunisie · Allemagne · France",
      status: "Prêt pour un PFE à partir de février 2027",
    },
    projects: {
      eyebrow: "Projets sélectionnés",
      title: "J’apprends en construisant des systèmes que je peux inspecter.",
      selectorAria: "Choisir l’un de mes projets",
      visualAria: "Vue système illustrée du projet sélectionné",
      stack: "Stack et éléments concrets",
      categories: {
        orchestryx: "Sécurité cloud",
        latrodectus: "Détection · Académique",
        wirecat: "Analyse réseau",
        kooretna: "IA · RAG",
      },
    },
    experience: {
      eyebrow: "Journal terrain",
      title: "J’ai appliqué l’automatisation pendant deux stages en cybersécurité.",
    },
    academics: {
      eyebrow: "Parcours académique",
      title: "Mon parcours d’ingénieur traverse trois pays.",
      activitiesTitle: "En dehors des cours",
      activities: [
        "J’ai obtenu la 2e place avec l’équipe CTF SudoSec à Securicon Tunisia.",
        "Je suis membre de Securinets et d’IEEE TEK-UP.",
      ],
    },
    certifications: {
      eyebrow: "Certifications",
      title: "Ce que j’ai obtenu et ce que je prépare actuellement.",
    },
    contact: {
      eyebrow: "Autorisation d’atterrir",
      title: "Ciel dégagé à partir de février 2027. Échangeons.",
      body: "Je recherche un PFE de six mois en France autour de la sécurité cloud, de l’automatisation, de la détection ou de la sécurité pratique de l’IA.",
      email: "M’écrire",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Télécharger mon CV",
    },
  },
  experience: {
    soar: {
      role: "Mon stage en automatisation SOC/SOAR",
      period: "Juin–septembre 2026",
      bullets: [
        "J’ai développé et adapté des playbooks Splunk SOAR pour automatiser le triage des alertes au sein d’un SOC existant.",
        "J’ai automatisé l’enrichissement Threat Intelligence avec MISP et VirusTotal.",
        "J’ai intégré l’API Gemini pour assister l’analyse des alertes par LLM.",
      ],
    },
    scanner: {
      role: "Mon stage en évaluation des vulnérabilités web",
      period: "Août 2025",
      bullets: [
        "J’ai développé un scanner automatisé des vulnérabilités OWASP Top 10 combinant Gobuster, SQLMap et XSStrike.",
        "J’ai généré des rapports HTML présentant les vulnérabilités, leur impact et les recommandations de remédiation.",
      ],
    },
  },
  projects: {
    orchestryx: {
      name: "Orchestryx",
      description:
        "J’ai construit une plateforme cloud-native de cyber range et de CTF qui provisionne des environnements isolés de façon asynchrone.",
    },
    latrodectus: {
      name: "Analyse du malware Latrodectus",
      description:
        "J’ai réalisé, dans un cadre académique, le triage, l’analyse statique et l’analyse en sandbox d’un véritable loader Windows. J’ai documenté les IOCs, la cartographie MITRE ATT&CK, YARA et les pistes de détection, avec une forte entropie de .rsrc et un taux de packing estimé à environ 82 %.",
    },
    wirecat: {
      name: "WireCat",
      description:
        "J’ai construit un analyseur de paquets en temps réel avec capture live, inspection Ethernet/IP/TCP, filtrage par protocole et export en .pcap, .csv et .txt.",
    },
    kooretna: {
      name: "Kooretna",
      description:
        "J’ai construit un assistant de statistiques footballistiques avec l’API Groq et un pipeline RAG alimenté par des API sportives.",
    },
    "risk-management": {
      name: "Mon projet de gestion des risques cyber",
      description:
        "J’ai réalisé une analyse académique des risques avec EBIOS, ISO 27005, ALE et ROSI, complétée par une charte projet, un WBS, PERT et l’Earned Value Management.",
    },
  },
  education: {
    "tek-up": {
      location: "Tunisie",
      description: "Je prépare un diplôme d’ingénieur en sécurité des systèmes et réseaux.",
    },
    schmalkalden: {
      location: "Allemagne",
      description: "J’ai effectué un échange Erasmus+.",
    },
    cesi: {
      location: "France",
      description: "J’effectue une mobilité académique.",
    },
  },
  languages: {
    french: "Français",
    english: "Anglais",
    german: "Allemand",
    arabic: "Arabe",
  },
} as const satisfies Dictionary;
