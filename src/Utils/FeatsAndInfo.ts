import {
  informationCircle,
  starOutline,
  settingsOutline,
  server,
  lockClosed,
  desktopOutline,
  phonePortraitOutline,
  colorPaletteOutline,
  shieldCheckmark,
  notificationsOutline,
  mapOutline,
  barChartOutline,
  peopleOutline,
  cloudUploadOutline,
  leafOutline,
  cloudOutline,
  syncOutline,
  locationOutline,
  searchOutline,
  cameraOutline,
  phoneLandscapeOutline,
  shieldCheckmarkOutline,
  fingerPrintOutline,
} from "ionicons/icons";

export type FeatureDetail = {
  title?: string;
  icon?: string;
  description?: string;
  sections?: Array<FeatureDetail>;
  features?: Array<string | FeatureDetail>;
  gitURL?: string;
  deployURL?: string;
};

export type EcosorterFeature = {
  title: string;
  icon?: string;
  description?: string;
  features?: EcosorterFeature[];
};

export const attendexFeatures: FeatureDetail[] = [
  {
    title: "Purpose",
    icon: informationCircle,
    description: "To take attendance the smart, hassle-free way.",
  },
  {
    title: "General App Features",
    icon: starOutline,
    features: [
      {
        title: "Smart Attendance",
        description:
          "Takes attendance using four accurate methods: NFC, geofencing, passkey biometrics, and dynamic QR codes.",
      },
      {
        title: "Employee Dashboard",
        features: [
          "Track attendance with charts, graphs, heatmaps, and detailed data points.",
          "Request leaves and track their status.",
          "Real-time chat communication with admins and a chatbot.",
        ],
      },
      {
        title: "Admin Dashboard",
        features: [
          "Monitor employee attendance with detailed charts, heatmaps, and interactive tables.",
          "Manage leave requests and view attendance-leave data on a monthly, weekly, and yearly basis.",
          "Support for multiple organizations and real-time chat with employees.",
        ],
      },
      {
        title: "Advanced Technology",
        description:
          "Utilizes multiple ML models for image processing, face detection, OCR, and language processing.",
      },
      {
        title: "Multi-Platform Support",
        description:
          "Available as a responsive website, PWA, native Windows/Mac app, and a companion mobile app.",
      },
    ],
  },
  {
    title: "Technical Features",
    icon: settingsOutline,
    sections: [
      {
        title: "Backend Features",
        icon: server,
        features: [
          "Developed with Supabase, Node.js, and Express.",
          "Uses PostgreSQL as the main database, Redis for caching, and Supabase buckets for image storage. Implements views, indexes, triggers, and parameterized queries for clean, efficient SQL.",
          "Nginx is used as a reverse proxy.",
          {
            title: "Security",
            icon: shieldCheckmark,
            features: [
              "HTTP/2 setup with SSL/TLS, HSTS policies to enforce HTTPS, protecting against MITM and protocol downgrade attacks.",
              "Rate limiting on API endpoints to prevent brute force attacks.",
              "Web Application Firewall (easyWaf) to block SQL injection, XSS, and other malicious inputs.",
              "Secure session management with secure cookies, environment-based SSL certificates, and Helmet for reducing attack surface.",
              "Use of parameterized SQL queries and comprehensive client/server-side data sanitization/validation.",
            ],
          },
          {
            title: "Authentication",
            icon: lockClosed,
            features: [
              "Rate-limited implementation of Supabase Auth with social authentication.",
              "Email verification required.",
              "MFA via time-sensitive codes.",
            ],
          },
          "Extensive logging using Winston.",
        ],
      },
      {
        title: "Frontend Features",
        icon: desktopOutline,
        features: [
          "Responsive website built with React and Vite, PWA using Vite PWA plugin.",
          "Windows and macOS apps developed with Tauri; Companion app for Android/iOS made with React Native, all written in TypeScript.",
          "Employee and Admin dashboards designed with Ant Design library.",
          "Implementation of file-based public and protected routes using TanStack Router with cache support and Turnstile CAPTCHA for bot protection.",
          "Frontend API data caching with TanStack Query.",
        ],
      },
      {
        title: "Deployment Features",
        icon: cloudUploadOutline,
        features: [
          "Docker containers and volumes used for full application containerization.",
          "Custom domain attendex.shop managed by Cloudflare for enhanced security.",
          "Automatic CI/CD pipeline implemented with Netlify and GitHub Actions.",
        ],
      },
    ],
  },
];

export const memoFeatures: FeatureDetail[] = [
  {
    title: "Purpose",
    icon: informationCircle,
    description: "To share photo memories with your loved ones.",
  },
  {
    title: "General App Features",
    icon: starOutline,
    features: [
      {
        title: "Photo Sharing",
        icon: cameraOutline,
        description: "Allows users to share various photos.",
      },
      {
        title: "Photo Comments",
        icon: phoneLandscapeOutline,
        description: "Users can comment on the photos they view.",
      },
      {
        title: "Personalized Profiles",
        icon: peopleOutline,
        description:
          "Users can create and update their personalized profiles on the web app.",
      },
    ],
  },
  {
    title: "Technical Features",
    icon: settingsOutline,
    sections: [
      {
        title: "Backend Features",
        icon: server,
        features: [
          "Built with Firebase, Node.js, and Express.",
          "Main database is MongoDB, with Mongoose used for NoSQL data management.",
          "Employs image compression techniques to save space.",
          {
            title: "Backend Security",
            icon: shieldCheckmark,
            features: [
              "Uses mongo-sanitize to clean data before processing.",
              "Enforces client-side, server-side, and database validation constraints.",
              "Sensitive keys are hidden in .env files.",
            ],
          },
          {
            title: "Authentication",
            icon: lockClosed,
            features: [
              "Implemented via Firebase with options for email/password or social authentication (Google/GitHub).",
              "Supports public and protected routes.",
              "Business logic is secured with Firebase Functions.",
            ],
          },
        ],
      },
      {
        title: "Frontend Features",
        icon: desktopOutline,
        features: [
          "Responsive website frontend developed using React.",
          "UI designed with Flowbite and Tailwind CSS libraries.",
          "Custom skeletons created for loading components.",
        ],
      },
    ],
  },
];

export const otherFeatures: FeatureDetail[] = [
  {
    title: "CSV Parser",
    description:
      "A react web app that parses input attendance csv records to display them in tables along with sorting and searching functions",
    deployURL: "https://rainbow-dodol-91dea3.netlify.app/",
    gitURL: "https://github.com/Megahedron69/T6-attendace-",
  },
  {
    title: "Speechly: Voice Assisted Expense Tracker",
    description:
      "A react web app that helps track expenses and income with help of beautiful charts and can work with help of speech",
    deployURL: "https://voicedexpenses.netlify.app/",
    gitURL: "https://github.com/Megahedron69/expense-app",
  },
  {
    title: "Tensorflow model GUI",
    description:
      "A HTML website that runs the first tensorflow model created by me to find and classify waste",
    deployURL: "https://splendid-buttercream-813ef2.netlify.app/",
    gitURL: "https://github.com/Megahedron69/wasteSegregationmodel",
  },
  {
    title: "Pokedex",
    description: "A react pokedex",
    deployURL: "https://megahedron69.github.io/Pokedex/",
    gitURL: "https://github.com/Megahedron69/Pokedex",
  },
];

export const ecosorterFeatures: FeatureDetail[] = [
  {
    title: "Cross-Platform Support",
    icon: phonePortraitOutline,
    description: "Seamless operation on both iOS and Android devices.",
  },
  {
    title: "Dynamic Visuals",
    icon: colorPaletteOutline,
    description:
      "Experience fluid, interactive animations with vibrant light and dark themes.",
  },
  {
    title: "Secure Authentication",
    icon: shieldCheckmark,
    description: "Firebase-powered authentication ensures secure user access.",
  },
  {
    title: "Push Notifications",
    icon: notificationsOutline,
    description:
      "Scheduled and custom push notifications powered by Firebase Cloud Messaging (FCM).",
  },
  {
    title: "Interactive Maps",
    icon: mapOutline,
    description: "Find waste centers with integrated maps.",
  },
  {
    title: "Educational Content",
    icon: barChartOutline,
    description:
      "Detailed charts, videos, heatmaps, and pictures educate users about waste categories.",
  },
  {
    title: "Engagement & Gamification",
    icon: peopleOutline,
    description:
      "Custom avatars and competitive leaderboards foster user engagement.",
  },
  {
    title: "Real-Time Data",
    icon: cloudUploadOutline,
    description:
      "Custom API and caching techniques implemented for faster data retrieval.",
    features: [
      {
        title: "Cloud Integration",
        icon: cloudUploadOutline,
        description: "Real-time score updates powered by Cloud Firestore.",
      },
    ],
  },
  {
    title: "Eco-Friendly Initiative",
    icon: leafOutline,
    description:
      "Educates users on waste management with a focus on environmental awareness.",
  },
  {
    title: "Cross-Platform Support",
    icon: phonePortraitOutline,
    description: "Seamless operation on both iOS and Android devices.",
  },
  {
    title: "Dynamic Visuals",
    icon: colorPaletteOutline,
    description:
      "Experience fluid, interactive animations with vibrant light and dark themes.",
  },
  {
    title: "Secure Authentication",
    icon: shieldCheckmark,
    description: "Firebase-powered authentication ensures secure user access.",
  },
  {
    title: "Push Notifications",
    icon: notificationsOutline,
    description:
      "Scheduled and custom push notifications powered by Firebase Cloud Messaging (FCM).",
  },
  {
    title: "Interactive Maps",
    icon: mapOutline,
    description: "Find waste centers with integrated maps.",
  },
  {
    title: "Educational Content",
    icon: barChartOutline,
    description:
      "Detailed charts, videos, heatmaps, and pictures educate users about waste categories.",
  },
  {
    title: "Engagement & Gamification",
    icon: peopleOutline,
    description:
      "Custom avatars and competitive leaderboards foster user engagement.",
  },
  {
    title: "Real-Time Data",
    icon: cloudUploadOutline,
    description:
      "Custom API and caching techniques implemented for faster data retrieval.",
    features: [
      {
        title: "Cloud Integration",
        icon: cloudUploadOutline,
        description: "Real-time score updates powered by Cloud Firestore.",
      },
    ],
  },
  {
    title: "Eco-Friendly Initiative",
    icon: leafOutline,
    description:
      "Educates users on waste management with a focus on environmental awareness.",
  },
];

export const weatherooFeatures: FeatureDetail[] = [
  {
    title: "Real-time Weather Updates",
    icon: cloudOutline,
    description:
      "Stay informed with up-to-the-minute weather information for your location or any place in the world.",
  },
  {
    title: "Beautiful and Optimized UI",
    icon: colorPaletteOutline,
    description:
      "Experience a visually appealing interface, crafted with React Native Paper for a smooth and responsive user experience.",
  },
  {
    title: "Caching API",
    icon: syncOutline,
    description:
      "Powered by React Query, ensuring quick access to weather data by efficiently caching API responses.",
  },
  {
    title: "Location-based Weather",
    icon: locationOutline,
    description:
      "Automatically fetches and displays local weather using your device's location services.",
  },
  {
    title: "Search for Any Place",
    icon: searchOutline,
    description:
      "Easily search for weather updates from any location around the globe.",
  },
];

export const companFeatures: FeatureDetail[] = [
  {
    title: "Cross-Platform Compatibility",
    icon: phonePortraitOutline,
    description:
      "Seamlessly works on both iOS and Android with a user-friendly interface and captivating Lottie animations.",
  },
  {
    title: "Secure Authentication",
    icon: shieldCheckmarkOutline,
    description:
      "Backend authentication is protected with rate limiting, MFA, and Cloudflare Turnstile, ensuring secure access.",
  },
  {
    title: "Multiple Attendance Methods",
    icon: fingerPrintOutline,
    description:
      "Users can choose from NFC, geofencing, biometric passkeys, or dynamic QR codes, each method implemented with speed and security in TypeScript.",
  },
  {
    title: "Attendance Reminders",
    icon: notificationsOutline,
    description:
      "Stay on top of your schedule with widgets and notifications that remind you to log your attendance.",
  },
];
