export const PERSONA = {
  name: "Daniel Joseph J. CHABI BOUKO",
  role: "Archiviste & Data Analyst",
  objective: "Archiviste et data analyst, je valorise la donnée au service de la décision en combinant organisation documentaire, analyse statistique et outils numériques. Spécialisé en dématérialisation et en gestion électronique des documents (GED), je transforme des volumes complexes d’informations en données fiables, structurées et exploitables. Rigoureux et orienté résultats, je contribue à l’optimisation des processus, à la sécurisation des données et à l’amélioration de la prise de décision.",
  experienceYears: "1.5+",
  contact: {
    email: "chabidaniel093@gmail.com",
    phone: "01 53 73 62 65",
    location: "Abomey-Calavi, Tankpè",
    whatsapp: "https://wa.me/2290153736265"
  },
  skills: [
    { name: "Archivage Physique et numérique", level: 95, category: "Core" },
    { name: "Installation et maintenance de GED et SAE", level: 90, category: "Core" },
    { name: "Développement web fullstack", level: 80, category: "Tech" },
    { name: "Analyse de données", level: 85, category: "Tech" },
    { name: "Développement Django Web", level: 75, category: "Tech" },
  ],
  languages: [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Professionnel" },
    { name: "Fon", level: "Natif" },
  ],
  experience: [
    {
      company: "Cabinet RM la l la l",
      role: "Technicien en systèmes d’archivage électronique (SAE)",
      period: "Janvier 2026 – En cours",
      description: "Participation à l’installation et au déploiement de logiciels de Système d’Archivage Électronique (SAE) au sein de plusieurs entreprises clientes.",
      tasks: [
        "Mise en place et configuration des solutions d’archivage",
        "Accompagnement des utilisateurs dans la prise en main des outils",
        "Collaboration continue avec les équipes techniques et les clients"
      ]
    },
    {
      company: "Clinique John Holt",
      role: "Technicien informatique / Archivistique (Temps partiel)",
      period: "Novembre 2025 – En cours",
      description: "Organisation et restructuration complète du fonds documentaire médical et administratif.",
      tasks: [
        "Installation, mise à jour et formation à l’utilisation des logiciels",
        "Classement et archivage dans le respect strict de la confidentialité et des normes",
        "Numérisation et indexation pour améliorer l’accessibilité et la traçabilité",
        "Optimisation des flux documentaires entre les services"
      ]
    },
    {
      company: "Cabinet GAEI (Missions Institutionnelles)",
      role: "Stagiaire Archiviste",
      period: "02 Février 2026 – 02 Avril 2026",
      description: "Interventions stratégiques au sein d'institutions publiques majeures.",
      tasks: [
        "ARMP: Traitement, dépouillement et analyse des pièces de marchés publics",
        "Ministère de l'Économie et des Finances: Saisie et enregistrement d'actes officiels",
        "Mairie de Cotonou: Saisie et organisation des données foncières (lotissement)"
      ]
    },
    {
      company: "Cabinet GAEI (Interventions)",
      role: "Stagiaire Archiviste",
      period: "Mai 2025 – Août 2025",
      description: "Missions de traitement documentaire à la SIRAT et au Ministère de l’Économie et des Finances.",
      tasks: [
        "Tri et traitement physique des documents liés aux marchés publics",
        "Classement et organisation selon les normes archivistiques",
        "Numérisation (scan et indexation) et gestion de bases de données dédiées"
      ]
    },
    {
      company: "Cabinet BERSI",
      role: "Archiviste de projet (Stagiaire)",
      period: "10 Octobre 2024 – 22 Novembre 2024",
      description: "Spécialisation dans le traitement de documents d'archives complexes (conteneurs).",
      tasks: [
        "Saisie et enregistrement des données archivistiques",
        "Utilisation du logiciel de gestion documentaire ABCD",
        "Contribution à un projet de réduction de volume documentaire important"
      ]
    }
  ],
  education: [
    {
      degree: "Licence",
      school: "École Nationale d’Administration",
      year: "2025"
    },
    {
      degree: "Formation Data Analyst",
      school: "Africatechup Tours",
      year: "2025 – En cours"
    },
    {
      degree: "Baccalauréat Série D",
      school: "CS Les Premiers",
      year: "2020"
    }
  ],
  references: [
    { name: "Roguy AGBADASSI", role: "Directeur, Cabinet RMBI", phone: "+229 01 96 02 26 92" },
    { name: "Richard Akpoly", role: "Cabinet GAEI", phone: "+229 01 95 40 71 75" },
    { name: "Nouhou Touré", role: "Directeur de la Clinique John Holt", phone: "01 64 67 46 80" },
    { name: "Eustache Megnigbeto", role: "Directeur du Cabinet BERSI", phone: "+229 01 62 03 48 88" },
  ]
};

export const BLOG_POSTS = [
  {
    slug: "impact-ia-archivage",
    title: "L'impact de l'IA sur l'archivage numérique : Vers une gestion intelligente",
    excerpt: "Analyse approfondie sur la manière dont l'IA transforme la classification et l'indexation automatique des documents.",
    date: "12 Mai 2024",
    category: "IA & Data",
    image: "https://images.unsplash.com/photo-1550751827-4c3928a0c612?auto=format&fit=crop&q=80&w=1200",
    content: `
      <div class="space-y-8">
        <p class="text-xl leading-relaxed mb-8 italic text-slate-500 border-l-4 border-amber-500 pl-6">
          L'intégration de l'intelligence artificielle dans le domaine de l'archivage numérique ne représente pas seulement une évolution technique, mais un véritable changement de paradigme dans la valorisation de l'information institutionnelle.
        </p>

        <section class="space-y-4">
          <h3 class="text-2xl font-serif font-bold text-institutional mb-4">1. De l'OCR Classique à l'Analyse Sémantique</h3>
          <p class="mb-4 text-slate-600 leading-relaxed">
            Pendant des décennies, la reconnaissance optique de caractères (OCR) s'est limitée à transformer des images en texte brut. Aujourd'hui, grâce au <strong class="text-institutional">Deep Learning</strong> et aux <strong class="text-institutional">Large Language Models (LLM)</strong>, nous passons à l'analyse sémantique. L'IA ne se contente plus de "lire", elle "comprend" le contexte d'un document.
          </p>
          <p class="mb-4 text-slate-600 leading-relaxed">
            Imaginez un système capable de distinguer automatiquement un contrat de bail d'un acte de cession foncière sans intervention humaine, tout en extrayant les dates clés, les montants et les parties prenantes avec une précision chirurgicale. C'est l'avènement de la donnée structurée à partir du chaos documentaire.
          </p>
        </section>

        <section class="space-y-4">
          <h3 class="text-2xl font-serif font-bold text-institutional mb-4">2. La Classification Automatisée et le Plan de Classement</h3>
          <p class="mb-4 text-slate-600 leading-relaxed">
            Le défi majeur de l'archiviste a toujours été l'indexation. L'IA permet désormais de générer des index dynamiques. En analysant les patterns de documents, les algorithmes peuvent suggérer des catégories de classement basées sur des normes internationales (comme <strong class="text-institutional">ISAD(G)</strong>), réduisant ainsi drastiquement les erreurs humaines et le temps de traitement.
          </p>
          <div class="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500 my-8 shadow-sm">
            <p class="text-amber-800 italic font-medium">
              "L'IA ne remplacera pas l'archiviste, mais l'archiviste qui utilise l'IA remplacera celui qui ne l'utilise pas."
            </p>
          </div>
        </section>

        <section class="space-y-4">
          <h3 class="text-2xl font-serif font-bold text-institutional mb-4">3. Sécurité et Intégrité : Le défi de la confiance</h3>
          <p class="mb-4 text-slate-600 leading-relaxed">
            L'automatisation soulève des questions sur l'intégrité. C'est ici que la combinaison de l'IA et de la <strong class="text-institutional">Blockchain</strong> devient intéressante. En créant des empreintes numériques (hashes) dès l'indexation automatisée, on garantit que le document n'a pas été altéré depuis sa capture.
          </p>
        </section>

        <footer class="mt-12 pt-8 border-t border-slate-200">
          <p class="text-xl font-semibold text-institutional leading-relaxed">
            En conclusion, l'IA transforme l'archiviste en un véritable gestionnaire de connaissances, capable de transformer des téraoctets de données dormantes en actifs stratégiques pour la prise de décision.
          </p>
        </footer>
      </div>
    `
  },
  {
    slug: "guide-ged-2024",
    title: "GED 2024 : Guide stratégique pour un déploiement réussi",
    excerpt: "Les meilleures pratiques pour choisir et déployer un système de gestion électronique des documents efficace et pérenne.",
    date: "03 Avril 2024",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1450101499662-46c-S-C-G-D?auto=format&fit=crop&q=80&w=1200",
    content: `
      <div class="space-y-8">
        <p class="text-xl leading-relaxed mb-8 italic text-slate-500 border-l-4 border-amber-500 pl-6">
          La Gestion Électronique des Documents (GED) est souvent perçue comme un simple outil de stockage. En réalité, c'est la colonne vertébrale de la transformation digitale d'une organisation.
        </p>

        <section class="space-y-4">
          <h3 class="text-2xl font-serif font-bold text-institutional mb-4">Étape 1 : L'Audit Documentaire (La phase critique)</h3>
          <p class="mb-4 text-slate-600 leading-relaxed">
            Beaucoup d'entreprises échouent car elles installent un logiciel avant de comprendre leurs flux. Un audit rigoureux doit répondre à trois questions fondamentales : <strong class="text-institutional">Quoi ? Qui ? Comment ?</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="block font-bold text-institutional mb-1">Le Quoi</span>
              <p className="text-xs text-slate-500">Quels types de documents sont produits ? (Cycle de vie)</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="block font-bold text-institutional mb-1">Le Qui</span>
              <p className="text-xs text-slate-500">Qui a le droit d'accéder à quelle information ? (Droits)</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="block font-bold text-institutional mb-1">Le Comment</span>
              <p className="text-xs text-slate-500">Comment l'information circule-t-elle ? (Workflow)</p>
            </div>
          </div>
        </section>

        <section class="space-y-4">
          <h3 class="text-2xl font-serif font-bold text-institutional mb-4">Étape 2 : Le Choix de la Solution</h3>
          <p class="mb-4 text-slate-600 leading-relaxed">
            L'erreur classique est de choisir la solution la plus connue. Privilégiez l'interopérabilité. Une bonne GED doit pouvoir s'interfacer avec vos outils existants (ERP, CRM) et respecter les standards d'archivage électronique.
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-institutional my-8 shadow-sm">
            <p className="text-institutional font-medium italic">
              "Conseil d'expert : Vérifiez toujours la capacité d'exportation des données. Le risque de 'vendor lock-in' est le danger principal des projets GED."
            </p>
          </div>
        </section>

        <section class="space-y-4">
          <h3 class="text-2xl font-serif font-bold text-institutional mb-4">Étape 3 : L'Accompagnement au Changement</h3>
          <p class="mb-4 text-slate-600 leading-relaxed">
            L'outil le plus performant sera inutile s'il n'est pas adopté. La résistance au changement est naturelle. La clé réside dans la formation continue et la démonstration immédiate du gain de temps pour l'utilisateur final.
          </p>
        </section>

        <footer class="mt-12 pt-8 border-t border-slate-200">
          <p class="text-xl font-semibold text-institutional leading-relaxed">
            Réussir sa GED, c'est avant tout réussir l'adhésion humaine autour d'un processus optimisé.
          </p>
        </footer>
      </div>
    `
  },
  {
    slug: "transition-zero-papier",
    title: "La Transition vers le Zéro Papier : Mythe ou Réalité ?",
    excerpt: "Les défis et opportunités de la dématérialisation totale au sein des administrations publiques et privées.",
    date: "21 Mars 2024",
    category: "Stratégie",
    image: "https://images.unsplash.com/photo-1568667620 la- l'image-est-dynamique",
    content: `
      <div class="space-y-8">
        <p class="text-xl leading-relaxed mb-8 italic text-slate-500 border-l-4 border-amber-500 pl-6">
          Le "Zéro Papier" est devenu le mantra de la modernisation administrative. Mais peut-on réellement supprimer tout support physique sans risquer la perte de la mémoire institutionnelle ?
        </p>

        <section class="space-y-4">
          <h3 class="text-2xl font-serif font-bold text-institutional mb-4">La Valeur Probante : Le verrou juridique</h3>
          <p class="mb-4 text-slate-600 leading-relaxed">
            Numériser un document ne suffit pas à lui donner une valeur légale. Pour qu'une copie numérique remplace l'original, elle doit répondre aux critères de la <strong class="text-institutional">valeur probante</strong> : intégrité, traçabilité et authenticité.
          </p>
          <p class="mb-4 text-slate-600 leading-relaxed">
            L'implémentation d'un Système d'Archivage Électronique (SAE) et de signatures électroniques qualifiées est donc indispensable pour sécuriser la transition juridique.
          </p>
        </section>

        <section class="space-y-4">
          <h3 class="text-2xl font-serif font-bold text-institutional mb-4">Les Pièges de la "Numérisation Massive"</h3>
          <p class="mb-4 text-slate-600 leading-relaxed">
            Une erreur courante consiste à scanner des milliers de pages sans stratégie d'indexation. C'est ce qu'on appelle "numériser le désordre". Le résultat est un cimetière numérique où l'on ne retrouve rien.
          </p>
          <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500 my-8 shadow-sm">
            <p className="text-amber-800 italic font-medium">
              La stratégie doit être : Épurer $\rightarrow$ Classer $\rightarrow$ Numériser $\rightarrow$ Indexer.
            </p>
          </div>
        </section>

        <section class="space-y-4">
          <h3 class="text-2xl font-serif font-bold text-institutional mb-4">Vers un Modèle Hybride</h3>
          <p class="mb-4 text-slate-600 leading-relaxed">
            Le futur n'est peut-être pas le "zéro papier" absolu, mais l'optimisation hybride. Conserver le physique pour le très long terme (archives historiques) et utiliser le numérique pour l'exploitation quotidienne.
          </p>
        </section>

        <footer class="mt-12 pt-8 border-t border-slate-200">
          <p class="text-xl font-semibold text-institutional leading-relaxed">
            Le véritable objectif n'est pas la disparition du papier, mais la fluidité de l'accès à l'information.
          </p>
        </footer>
      </div>
    `
  }
];

export const PROJECTS = [
  {
    title: "Déploiement SAE National",
    description: "Mise en place d'un Système d'Archivage Électronique pour plusieurs institutions publiques, optimisant la conservation à long terme et la valeur probante des actes.",
    tech: ["SAE", "Next.js", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1450101499662-46c-S-C-G-D?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "Optimisation Flux Documentaires",
    description: "Restructuration complète du fonds documentaire pour une clinique privée, réduisant le temps d'accès aux dossiers médicaux de 60%.",
    tech: ["GED", "Analyse de Données", "Python"],
    image: "https://images.unsplash.com/photo-1460925895917-afbe6eda23ca?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "Système de Gestion ABCD",
    description: "Intégration et paramétrage du logiciel ABCD pour la gestion optimisée des dossiers de conteneurs maritimes.",
    tech: ["ABCD Software", "Database Mgmt", "Archivage"],
    image: "https://images.unsplash.com/photo-1586528116311-58- la- l'image-est-dynamique",
    link: "#"
  }
];
