import type { Dictionary } from "./en";

export const fr = {
  locale: "fr",
  seo: {
    title: "Abdallah Dridi — ingénieur sécurité en formation",
    description:
      "Étudiant ingénieur en cybersécurité : automatisation SOC, sécurité cloud et analyse assistée par IA. Disponible pour un stage de fin d’études de six mois en France à partir de février 2027.",
  },
  common: {
    skip: "Aller au contenu",
    languageAria: "Choisir la langue",
    medium: "Technique",
  },
  rail: {
    aria: "Sections de la page",
    goTo: "Aller à",
    stages: {
      foot: "Le pied",
      climb: "L’ascension",
      works: "Œuvres",
      tickets: "Tickets",
      summit: "Le sommet",
    },
  },
  foot: {
    kicker: "Abdallah Dridi, ingénieur sécurité en formation",
    title: "Toujours en montée.",
    lead: "Je construis l’automatisation qui aide les défenseurs à suivre le rythme : workflows SOC, sécurité cloud et analyse assistée par IA. Le même rocher, un peu plus haut à chaque fois.",
    tape: "Disponible pour un stage de 6 mois dès février 2027",
  },
  climb: {
    title: "L’ascension",
    lead: "Chaque étape jusqu’ici, dans l’ordre. Ce que j’ai fait, et ce que j’en ai appris.",
    stations: [
      {
        when: "2022",
        title: "TEK-UP University, Tunisie",
        body: "Début d’un cycle ingénieur en sécurité des systèmes et des réseaux.",
        lesson: "Les réseaux d’abord. Tout le reste repose dessus.",
      },
      {
        when: "Août 2025",
        title: "Amen Bank, Tunis",
        body: "Développement d’un scanner automatisé OWASP Top 10 combinant Gobuster, SQLMap et XSStrike, avec des rapports HTML détaillant l’impact et la remédiation.",
        lesson: "Trouver la faille, c’est la moitié du travail. C’est le rapport qui la fait corriger.",
      },
      {
        when: "2026",
        title: "Hochschule Schmalkalden, Allemagne",
        body: "Semestre d’échange Erasmus+.",
        lesson: "Un nouveau pays, c’est un cours accéléré pour repartir de zéro.",
      },
      {
        when: "Juin – septembre 2026",
        title: "SOC d’Amen Bank, Tunis",
        body: "Création et adaptation de playbooks Splunk SOAR pour le tri des alertes, enrichissement automatisé par MISP et VirusTotal, et analyse des alertes assistée par Gemini.",
        lesson: "Changement de camp : de l’intrusion à la surveillance. L’automatisation n’aide que si l’analyste lui fait confiance.",
      },
      {
        when: "2026 – 2027",
        title: "CESI École d’Ingénieurs, France",
        body: "Cycle ingénieur en mobilité académique.",
        lesson: "Apprendre à expliquer le travail, pas seulement à le faire.",
      },
    ],
  },
  works: {
    title: "Œuvres",
    lead: "Des choses construites pour comprendre comment elles cassent.",
    items: {
      forenmate: {
        title: "ForenMate",
        category: "DFIR et agents IA, projet d’équipe en cours",
        body: "Un espace d’enquête unique pour les PCAP, images disque et dumps mémoire. Des workers isolés extraient les artefacts et les normalisent en événements consultables, puis des agents IA corrèlent les preuves réseau, disque et mémoire en chronologies, chaque conclusion renvoyant à sa source pour l’analyste.",
      },
      orchestryx: {
        title: "Orchestryx",
        category: "Sécurité cloud",
        body: "Une plateforme cloud-native de cyber range et de CTF qui provisionne des environnements isolés de façon asynchrone sur AWS.",
      },
      latrodectus: {
        title: "Latrodectus",
        category: "Analyse de malware, projet académique",
        body: "Tri, analyse statique et en sandbox d’un vrai loader Windows. IOC, mapping MITRE ATT&CK, règles YARA et pistes de détection documentés, dont une forte entropie .rsrc et un niveau de packing estimé à 82 %.",
      },
      wirecat: {
        title: "WireCat",
        category: "Analyse réseau",
        body: "Un analyseur de paquets en temps réel : capture en direct, inspection Ethernet, IP et TCP, filtres par protocole et export en .pcap, .csv et .txt.",
      },
      kooretna: {
        title: "Kooretna",
        category: "IA, recherche augmentée",
        body: "Un assistant de statistiques de football construit sur l’API Groq et un pipeline RAG alimenté par des API sportives.",
      },
    },
    etch: {
      isolated: "Workers isolés",
      timeline: "Chronologie",
      agents: "Agents IA",
      findings: "Conclusions",
      pcap: "PCAP",
      disk: "Image disque",
      memory: "Dump mémoire",
      request: "Requête",
      queue: "File",
      workers: "Workers",
      environment: "Range isolé",
      sample: "Loader Windows",
      highEntropy: "Forte entropie",
      packed: "82 % packé",
      capture: "Capture",
      filter: "Filtre",
      export: "Export",
      question: "Question",
      sources: "API sportives",
      retrieve: "Recherche",
      answer: "Réponse",
    },
  },
  tickets: {
    title: "Tickets",
    lead: "On ne gagne pas sans acheter le ticket. Chaque examen passé et chaque CTF tenté, avec ce que chacun m’a appris.",
    items: [
      {
        title: "eJPT",
        body: "M’a appris à penser comme un attaquant : tout énumérer avant de toucher à quoi que ce soit, puis pivoter dans un réseau, une machine à la fois.",
        serial: "Certifié",
      },
      {
        title: "Équipe CTF SudoSec",
        body: "Compétition à Securicon Tunisie. Appris à répartir les épreuves vite et à faire confiance à l’équipe sur ce que je ne sais pas faire.",
        serial: "2e place",
      },
      {
        title: "CTF SickSociety, « hateme »",
        body: "Forensics de couches Docker, extraction d’un binaire PyInstaller, décompilation de bytecode Python, puis rétro-ingénierie d’un chiffrement XOR à base de LCG. Un flag, cinq compétences.",
        serial: "Forensics",
      },
      {
        title: "CI/CD Goat",
        body: "Onze défis sur l’empoisonnement de pipeline, l’escalade de jetons et la compromission de la chaîne d’approvisionnement. Le pipeline de build fait partie de la surface d’attaque.",
        serial: "11 défis",
      },
      {
        title: "RHCSA",
        body: "Administration Linux en conditions d’examen : permissions, SELinux, systemd, stockage. On défend mieux un système quand on en a construit un.",
        serial: "Certifié",
      },
      {
        title: "AWS Solutions Architect – Associate",
        body: "VPC, IAM et architectures résilientes. La plupart des incidents cloud commencent par un choix de configuration, donc la sécurité aussi.",
        serial: "Certifié",
      },
      {
        title: "Google IT Automation with Python",
        body: "Scripts, regex et Git. Le réflexe d’automatiser une tâche dès la deuxième fois, qui m’a mené tout droit au SOAR.",
        serial: "Certifié",
      },
      {
        title: "Parti de l’offensif",
        body: "eJPT et scanners web d’abord. Puis passage à la blue team, où le travail consiste à faire tenir les choses debout.",
        serial: "Changement de cap",
      },
      {
        title: "Securinets et IEEE TEK-UP",
        body: "Être là, et continuer à être là.",
        serial: "Membre",
      },
    ],
  },
  summit: {
    title: "Prochaine étape : un stage de six mois, dès février 2027.",
    body: "Je cherche un stage de fin d’études en France en automatisation SOC, réponse à incident, sécurité cloud ou sécurité de l’IA appliquée.",
    email: "M’écrire",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "Télécharger mon CV",
    portraitAlt: "Abdallah Dridi, en noir et blanc, travaillant sur un petit robot",
    portraitCaption: "À l’établi. Photographie.",
    languagesTitle: "Langues",
    languages: [
      { name: "Français", level: "C1" },
      { name: "Anglais", level: "C1" },
      { name: "Allemand", level: "A2" },
      { name: "Arabe", level: "Langue maternelle" },
    ],
    rollBack: "Redescendre",
    rollBackHint: "Retour au pied de la colline",
    colophon: "Composé en Redaction et Archivo.",
  },
} satisfies Dictionary;
