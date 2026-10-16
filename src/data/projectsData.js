export const projectsData = [
  {
    id: 'grievance',
    num: '01',
    year: '2026',
    title: 'Smart Public Grievance Management System',
    shortDesc: 'An intelligent system to streamline the reporting, tracking, and resolution of civic grievances with multilingual submission, automated department routing, and administrator workflows.',
    featured: true,
    previewImage: '/projects/grievance-preview.png',
    tags: ['React.js', 'Spring Boot', 'MySQL', 'REST APIs', 'Vercel'],
    github: 'https://github.com/Nithish23013509/Smart-Public-Grievance-Managment-System.git',
    live: 'https://smart-public-grievance-managment.vercel.app',
    category: 'Full-Stack Civic Platform',
    role: 'Lead Full-Stack Developer',
    duration: '2025 – 2026',
    overview:
      'The Smart Public Grievance Management System is a public-sector digital service engineered to bridge communication gaps between citizens and municipal municipal departments. Traditional grievance filing often suffers from jurisdictional confusion, language barriers, and lack of transparent status tracking. This solution provides a centralized, transparent portal where citizens can report civic issues in their preferred language, while administrators and field officers receive automated categorizations and department assignments.',
    problemStatement:
      'Citizens in urban and rural jurisdictions frequently encounter bureaucratic delays and lack visibility into whether their complaints have reached the appropriate department. In multilingual regions like Tamil Nadu, submitting grievances in native languages without losing context presents a major operational bottleneck.',
    solution:
      'Built an end-to-end full-stack web application supporting multilingual complaint registration (Tamil, Tanglish, and English) with automated category recommendations, geolocation mapping, and role-differentiated access for citizens, department officers, and executive administrators.',
    features: [
      {
        icon: '🌐',
        title: 'Multilingual Complaint Registration',
        desc: 'Allows citizens to articulate complaints in Tamil, Tanglish, or English with text parsing that preserves context for administrative routing.'
      },
      {
        icon: '🤖',
        title: 'Department & Category Recommendation',
        desc: 'Text-heuristic analysis automatically suggests the responsible government department (Water, Roads, Sanitation, Electricity) and grievance priority.'
      },
      {
        icon: '📍',
        title: 'Interactive Map Geotagging',
        desc: 'Enables citizens to pinpoint exact incident coordinates on interactive maps, assisting ground officers in dispatching field teams swiftly.'
      },
      {
        icon: '🔍',
        title: 'Duplicate Complaint Detection',
        desc: 'Detects similar submissions reported in close geographic and temporal proximity to prevent redundant backlogs.'
      },
      {
        icon: '👥',
        title: 'Three-Tier Role Architecture',
        desc: 'Dedicated views and permissions for Citizens (reporting & tracking), Field Officers (resolution updates & proofs), and Admins (auditing & analytics).'
      },
      {
        icon: '📊',
        title: 'Audit Trails & Status Lifecycles',
        desc: 'Every complaint moves through verified stages (Submitted → Assigned → In-Progress → Resolved) with timestamped audit records.'
      }
    ],
    technologies: {
      frontend: ['React.js', 'Vite', 'Vanilla CSS', 'Framer Motion', 'Leaflet / OpenStreetMap'],
      backend: ['Java', 'Spring Boot', 'Spring Security', 'RESTful API Services'],
      database: ['MySQL', 'Spring Data JPA', 'Hibernate'],
      deployment: ['Vercel (Frontend SPA)', 'Railway / Cloud VM', 'Git Version Control']
    },
    architecture:
      'Designed using a clean layered architecture with a decoupled React SPA frontend interacting with a Spring Boot REST API. The backend implements controller-service-repository patterns with transactional boundaries to ensure complaint record integrity. Role-based authorization controls access to administrative endpoints, while SQL indices optimize grievance search by department, location, and filing date.',
    challenges: [
      {
        challenge: 'Handling Tanglish and Regional Language Context',
        solution: 'Implemented phonetic normalization and keyword dictionary mapping to accurately categorize non-standardized Tanglish phonetics into standard administrative buckets.'
      },
      {
        challenge: 'Preventing Duplicate Submissions from Overwhelming Officers',
        solution: 'Engineered a proximity-checking heuristic combining geo-radius thresholds (within 200m) with category matching to cluster related complaints.'
      }
    ]
  },
  {
    id: 'banking',
    num: '02',
    year: '2026',
    title: 'Banking Management System',
    shortDesc: 'A secure full-stack banking platform with stateless JWT authentication, role-based API protection, deposits, withdrawals, fund transfers, and ledger transaction tracking.',
    featured: true,
    previewImage: '/projects/banking-preview.png',
    tags: ['Spring Boot', 'Spring Security', 'JWT', 'React.js', 'MongoDB Atlas', 'Railway', 'Vercel'],
    github: 'https://github.com/Nithish23013509/BankingSystem',
    live: 'https://banking-system-web.vercel.app/',
    category: 'Enterprise Fintech Application',
    role: 'Backend & Full-Stack Architect',
    duration: '2026',
    overview:
      'NexBank is a full-stack banking management system designed to replicate the core transactional requirements of a contemporary digital retail bank. The platform implements stringent security controls, stateless authorization, and transactional guarantees across customer accounts, money movements, and auditing.',
    problemStatement:
      'Educational and portfolio banking demonstrations often cut corners on concurrency control, password hashing, and authorization boundaries, resulting in insecure systems vulnerable to balance inconsistencies and privilege escalation.',
    solution:
      'Engineered an enterprise-grade backend with Spring Boot, Spring Security, and JWT stateless tokens, paired with an animated React frontend. Implemented transactional atomicity for fund transfers, immutable ledger histories, and BCrypt encrypted customer credentials.',
    features: [
      {
        icon: '🔐',
        title: 'Stateless JWT Authentication',
        desc: 'Tokens with cryptographic signatures, configurable expiry, and Spring Security filter chains protecting sensitive financial endpoints.'
      },
      {
        icon: '💸',
        title: 'ACID Fund Transfers',
        desc: 'Atomic inter-account transfers ensuring that debits and credits occur simultaneously or rollback entirely upon any failure.'
      },
      {
        icon: '📈',
        title: 'Cash Inflow & Outflow Operations',
        desc: 'Validated deposit and withdrawal workflows with balance floor checks, withdrawal limit enforcement, and instantaneous account balance updates.'
      },
      {
        icon: '📑',
        title: 'Immutable Transaction Ledger',
        desc: 'Comprehensive historical audit logs recording transaction IDs, timestamps, counterparty account details, and transaction types.'
      },
      {
        icon: '🛡️',
        title: 'Role-Based Access Control (RBAC)',
        desc: 'Strict demarcation between account-holder dashboards and managerial oversight portals.'
      },
      {
        icon: '⚡',
        title: 'Cloud-Connected Database',
        desc: 'Cloud-hosted MongoDB Atlas with optimized indexing for rapid transaction filtering and account lookups.'
      }
    ],
    technologies: {
      frontend: ['React.js', 'Vite', 'Modern Glassmorphic CSS', 'Lucide Icons'],
      backend: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JSON Web Tokens (JWT)'],
      database: ['MongoDB Atlas', 'Spring Data MongoDB', 'Mongo Transactions'],
      deployment: ['Vercel', 'Railway Cloud Backend', 'Docker']
    },
    architecture:
      'The architecture follows an API-driven micro-service pattern. The client authenticates via credentials to receive a signed JWT bearer token. Requests to transfer funds invoke transactional service methods that verify sender balances, execute concurrent-safe atomic updates, and write ledger documents within an isolated database session.',
    challenges: [
      {
        challenge: 'Maintaining Ledger Integrity during Concurrent Transactions',
        solution: 'Utilized Spring declarative transaction management with optimistic locking to prevent race conditions during rapid consecutive transfers.'
      },
      {
        challenge: 'Ensuring Secure Cross-Origin API Communications',
        solution: 'Configured rigorous CORS filters with explicit origin whitelisting and CSRF protection headers tailored for stateless JWT authorization.'
      }
    ]
  },
  {
    id: 'kanban',
    num: '03',
    year: '2026',
    title: 'Kanban Task Manager',
    shortDesc: 'A full-stack collaborative productivity board featuring drag-and-drop workflows via @dnd-kit, authenticated workspaces, smooth Framer Motion animations, and Recharts analytics.',
    featured: false,
    previewImage: '/projects/kanban-preview.png',
    tags: ['React.js', 'Spring Boot', '@dnd-kit', 'Framer Motion', 'MongoDB', 'JWT'],
    github: 'https://github.com/Nithish23013509/Task_Manager',
    live: 'https://task-manager-one-web.vercel.app/',
    category: 'Productivity & Workflow Tool',
    role: 'Full-Stack Developer Intern (Infosys Springboard)',
    duration: 'Feb 2026 – Apr 2026',
    overview:
      'Created as a capstone project during the Infosys Springboard Internship 6.0 program, this Kanban Task Manager provides engineering teams with an intuitive visual board for task planning, column transitions, and sprint velocity analytics.',
    problemStatement:
      'Many task boards are either cumbersome enterprise tools with steep learning curves or simplistic prototypes lacking persistence, multi-user workspace boundaries, and visual progress charts.',
    solution:
      'Developed a fluid, responsive Kanban board powered by modern drag-and-drop accessibility libraries (@dnd-kit), backed by Spring Boot REST APIs and MongoDB, with real-time sprint completion analytics rendered through Recharts.',
    features: [
      {
        icon: '📋',
        title: 'Accessible Drag-and-Drop Board',
        desc: 'Fluid card movement between Backlog, In Progress, Review, and Done columns with visual drop indicators and keyboard navigation.'
      },
      {
        icon: '🏢',
        title: 'Personalized Workspace Isolation',
        desc: 'JWT-authenticated user sessions ensuring individuals and teams manage their own isolated boards and tasks securely.'
      },
      {
        icon: '📊',
        title: 'Sprint & Productivity Analytics',
        desc: 'Visual progress charts, status breakdown distributions, and completion velocity curves powered by Recharts.'
      },
      {
        icon: '✨',
        title: 'Micro-Interactions with Framer Motion',
        desc: 'Delightful layout animations when reordering tasks, expanding cards, or applying priority tag filters.'
      },
      {
        icon: '🏷️',
        title: 'Priority & Due Date Tracking',
        desc: 'Urgency tagging (High, Medium, Low), milestone deadlines, and visual indicators for overdue tasks.'
      }
    ],
    technologies: {
      frontend: ['React.js', '@dnd-kit/core', '@dnd-kit/sortable', 'Framer Motion', 'Recharts'],
      backend: ['Java', 'Spring Boot', 'Spring Security', 'JWT'],
      database: ['MongoDB', 'Spring Data MongoDB'],
      deployment: ['Vercel', 'Railway']
    },
    architecture:
      'Built around a decoupled React client and Spring Boot server. State updates are performed optimistically on the client using React state hooks to guarantee zero drag lag, followed by debounced asynchronous API synchronizations to persist column positions and task ordering in MongoDB.',
    challenges: [
      {
        challenge: 'Preventing UI Jitter during Cross-Column Drag and Drop',
        solution: 'Implemented @dnd-kit collision detection algorithms with specialized pointer constraints and custom drag overlay portals.'
      },
      {
        challenge: 'Maintaining Fast Performance on Large Task Counts',
        solution: 'Memoized card items with React.memo and implemented optimistic client state updates to maintain 60fps responsiveness.'
      }
    ]
  },
  {
    id: 'traffic',
    num: '04',
    year: '2025',
    title: 'Real-Time Web Traffic Visualizer',
    shortDesc: 'A live analytics dashboard monitoring concurrent user sessions, page views, and traffic patterns with WebSocket-based data streaming and high-frequency rendering optimizations.',
    featured: false,
    previewImage: '/projects/traffic-preview.jpg',
    tags: ['JavaScript', 'Node.js', 'WebSocket', 'Chart.js', 'Analytics'],
    github: 'https://github.com/Nithish23013509/DESIGN-AND-IMPLEMENTATION-OF-A-REAL-TIME-WEB-TRAFFIC-VISUALIZER',
    live: null,
    category: 'Real-Time Data Streaming System',
    role: 'Lead Developer',
    duration: '2025',
    overview:
      'The Real-Time Web Traffic Visualizer is an engineering telemetry dashboard designed to observe, measure, and visually communicate server traffic, active visitor connections, and concurrent page interaction patterns without polling delays.',
    problemStatement:
      'Traditional analytics packages rely on batch processing or polling intervals that introduce significant latency, making it impossible to detect sudden traffic spikes, distributed attacks, or viral surges in real time.',
    solution:
      'Built a lightweight bidirectional telemetry pipeline leveraging Node.js and WebSockets to push live connection metrics to a high-performance Chart.js dashboard, enabling sub-second visibility into site activity.',
    features: [
      {
        icon: '⚡',
        title: 'Sub-Second WebSocket Streaming',
        desc: 'Continuous real-time data pipe delivering connection events, active session counts, and page view counters.'
      },
      {
        icon: '📈',
        title: 'High-Frequency Canvas Visualizations',
        desc: 'Dynamic live-updating multi-line charts with glowing neon gradients visualizing concurrent users and historical averages.'
      },
      {
        icon: '⏱️',
        title: 'Server Latency & Performance Gauges',
        desc: 'Real-time telemetry measuring client-to-server ping, response latencies, and regional server load status.'
      },
      {
        icon: '🔔',
        title: 'Anomaly & Spike Detection',
        desc: 'Threshold heuristics triggering visual status alerts when concurrent volume exceeds baseline deviations.'
      }
    ],
    technologies: {
      frontend: ['JavaScript (ES6+)', 'Chart.js', 'HTML5 Canvas', 'Modern CSS Grid'],
      backend: ['Node.js', 'Express', 'WebSocket (ws)'],
      database: ['In-Memory Sliding Windows', 'JSON Event Streams'],
      deployment: ['Node.js Server', 'GitHub Repository']
    },
    architecture:
      'An event-driven architecture where connection events are captured by an Express middleware and broadcast over a WebSocket server. The client canvas consumes streams into circular data buffers that prune stale points, allowing smooth 60fps graph updates without memory leaks.',
    challenges: [
      {
        challenge: 'Browser Freezing during Rapid High-Volume Metric Ingestion',
        solution: 'Implemented client-side requestAnimationFrame throttling and data aggregation buckets to ensure charts refresh at 60fps regardless of packet rate.'
      }
    ]
  },
  {
    id: 'think-click',
    num: '05',
    year: '2026',
    title: 'Think Before You Click',
    shortDesc: 'A zero-latency Chrome Extension engineered to protect non-technical users from phishing, typosquatting, and deceptive downloads using an offline heuristics security engine.',
    featured: false,
    previewImage: '/projects/think-click-preview.jpg',
    tags: ['JavaScript', 'Chrome Ext (MV3)', 'HTML/CSS', 'Security Engine'],
    github: 'https://github.com/Nithish23013509/Think-Before-You-Click.git',
    live: null,
    category: 'Cybersecurity Browser Tool',
    role: 'Security & Extension Developer',
    duration: '2026',
    overview:
      'Think Before You Click is a client-side Chrome security extension built under Manifest V3 specifications. It aims to empower everyday web users by performing real-time offline heuristic evaluation of hyperlinks, domain registrations, and download URLs before users click.',
    problemStatement:
      'Phishing sites and spoofed domains frequently deceive users before reputation blacklists update. Furthermore, cloud-based URL scanner extensions often introduce browsing latency and compromise user privacy by transmitting full history logs.',
    solution:
      'Developed an offline heuristic analysis engine operating entirely inside the browser without external telemetry, providing instant safety scores, typosquatting alerts, and deceptive download warnings.',
    features: [
      {
        icon: '🛡️',
        title: 'Offline Heuristics Engine',
        desc: 'Calculates link safety scores locally using Levenshtein distance, domain entropy checks, and suspicious top-level domain flags.'
      },
      {
        icon: '🔍',
        title: 'Typosquatting Detection',
        desc: 'Identifies visually deceptive domain mutations (e.g., using Cyrillic homoglyphs or minor character substitutions imitating popular banking and tech portals).'
      },
      {
        icon: '⚠️',
        title: 'Deceptive Download Defense',
        desc: 'Flags executable and script extensions (.exe, .bat, .vbs, .scr) masquerading as document or media files in download links.'
      },
      {
        icon: '🔒',
        title: 'Privacy-First Architecture',
        desc: 'Zero user tracking or cloud log transmission. All URL parsing and risk calculations remain entirely inside the local browser sandbox.'
      }
    ],
    technologies: {
      frontend: ['JavaScript', 'HTML5', 'CSS3 Glassmorphic Interface', 'Chrome Extension MV3'],
      backend: ['Chrome Runtime APIs', 'DeclarativeNetRequest', 'Content Scripts'],
      deployment: ['Chrome Web Store Package', 'GitHub Repository']
    },
    architecture:
      'Adheres to Chrome Manifest V3 using background service workers, isolated content scripts for DOM hyperlink inspection, and an interactive popup UI that displays the active tab security assessment score.',
    challenges: [
      {
        challenge: 'Zero-Latency Evaluation without Slowing Page Interaction',
        solution: 'Implemented lazy hover-based link evaluation and regular expression pre-filtering to evaluate links in under 5 milliseconds.'
      }
    ]
  }
];
