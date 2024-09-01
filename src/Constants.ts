import designIco from "./assets/images/icon-design.svg";
import webDevIco from "./assets/images/icon-dev.svg";
import mobIco from "./assets/images/icon-app.svg";
import serverIco from "./assets/images/server-outline.svg";

export type Skill = {
  name: string;
  icon?: string; // icon is optional
  svgURL?: string; // svgURL is optional
};

type EduSKill = {
  title: string;
  date: string;
  description: string;
};

type CareerSkill = {
  title: string;
  date: string;
  description: string;
};

type serviceOBJ = {
  src: string;
  alt: string;
  title: string;
  text: string;
};

export const serviceObj: serviceOBJ[] = [
  {
    src: designIco,
    alt: "design icon",
    title: "Web Design",
    text: "The most modern and high-quality design made at a professional level.",
  },
  {
    src: webDevIco,
    alt: "Web development icon",
    title: "Web Development",
    text: " High-quality development of sites at the professional level.",
  },
  {
    src: mobIco,
    alt: "mobile app icon",
    title: "App Development",
    text: "Professional development of applications for iOS and Android.",
  },
  {
    src: serverIco,
    alt: "server icon",
    title: "Backend Development",
    text: "Development of secure, scalable and robust backend services.",
  },
];

export const skillTree: Skill[] = [
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain",
  },
  {
    name: "C",
    icon: "devicon-c-plain-wordmark",
  },
  {
    name: "C++",
    icon: "devicon-cplusplus-plain",
  },
  {
    name: "React JS",
    icon: "devicon-react-original-wordmark",
  },
  {
    name: "React Native",
    icon: "devicon-react-original",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain",
  },
  {
    name: "Python",
    icon: "devicon-python-plain-wordmark",
  },
  {
    name: "HTML5",
    icon: "devicon-html5-plain-wordmark",
  },
  {
    name: "CSS3",
    icon: "devicon-css3-plain-wordmark",
  },
  {
    name: "NodeJs",
    icon: "devicon-nodejs-plain-wordmark",
  },
  {
    name: "bash",
    icon: "devicon-bash-plain",
  },
  {
    name: "git",
    icon: "devicon-git-plain-wordmark",
  },
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain-wordmark",
  },
  {
    name: "SQL",
    icon: "devicon-mysql-plain-wordmark",
  },
  {
    name: "Postgres SQL",
    icon: "devicon-postgresql-plain-wordmark",
  },
  {
    name: "Firebase CloudStore",
    icon: "devicon-firebase-line",
  },
  {
    name: "Mongo Atlas",
    icon: "devicon-mongoose-original",
  },
  {
    name: "Github",
    icon: "devicon-github-original-wordmark",
  },
  {
    name: "VsCode",
    icon: "devicon-vscode-plain-wordmark",
  },
  {
    name: "MongoCompass",
    icon: "devicon-mongodb-plain",
  },
  {
    name: "Expo",
    icon: "",
    svgURL:
      "https://raw.githubusercontent.com/expo/expo/main/.github/resources/banner.png",
  },
  {
    name: "linux",
    icon: "devicon-linux-plain",
  },
  {
    name: "docker",
    icon: "devicon-docker-plain-wordmark",
  },
  {
    name: "kubernetes",
    icon: "devicon-kubernetes-plain-wordmark",
  },
  {
    name: "netlify",
    icon: "devicon-netlify-plain-wordmark",
  },
  {
    name: "google cloud",
    icon: "devicon-googlecloud-plain-wordmark",
  },
  {
    name: "Cloudflare",
    icon: "devicon-cloudflare-plain-wordmark",
  },
  {
    name: "play console",
    icon: "",
    svgURL: "https://i.imgur.com/BJoddjS.png",
  },
  {
    name: "Express",
    icon: "devicon-express-original-wordmark",
  },
  {
    name: "puppeteer web scraping",
    icon: "devicon-puppeteer-plain",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-plain-wordmark",
  },
  {
    name: "SCSS",
    icon: "devicon-sass-original",
  },
  {
    name: "Zustand",
    icon: "",
    svgURL:
      "https://raw.githubusercontent.com/pmndrs/zustand/main/examples/demo/public/logo192.png",
  },
  {
    name: "Nginx",
    icon: "devicon-nginx-original",
  },
];

export const EduTimeLine: EduSKill[] = [
  {
    title: "Secondary School",
    date: "Mar 2017- Apr 2018",
    description:
      "Completed secondary in Arwachin International School scoring 95 percent under CBSE board",
  },
  {
    title: "Senior Secondary School",
    date: "Mar 2019- Apr 2020",
    description:
      "Completed senior secondary in Arwachin International School scoring 88.83 percent under CBSE board",
  },
  {
    title: "Graduation",
    date: "Sep 2020- Jun 2024",
    description:
      "Completed graduation in B.Tech (IT) in Guru Gobind Singh University scoring 92 percent",
  },
];

export const CareerTimeline: CareerSkill[] = [
  {
    title: "Tathastu - Scholar intern",
    date: "Jan 2022- Mar 2022",
    description:
      "Created a responsive react web app for client according to their specified requirements",
  },
  {
    title: "Acowale - Junior web developer Intern",
    date: "Aug 2022- Jan 2023",
    description:
      "Developed an advanced authentication system for a new product, which included integrating Oauth along with a custom MFA OTP-based system. Through collaboration with international teams, played a key role in developing and launching a web application using Modern frontend and backend frameworks, where I optimized the codebase and created custom services to enhance performance. Additionally, I worked closely with the CEO, contributing innovative ideas that significantly influenced the app's development.",
  },
  {
    title: "TCS trainee",
    date: "Aug 2024 - Present",
    description: "Currently working in Tata Consultancy services",
  },
];
