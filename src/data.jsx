import nativity from './assets/nativity.png'
import safemain from './assets/safemain.png'
import hiredom from './assets/hiredom.png'
import { nanoid } from "nanoid";
import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaUser,
  FaUserGraduate,
  FaBriefcase,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaSass,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiWebflow,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiFirebase,
} from "react-icons/si";

export const links = [
  {
    id: nanoid(),
    url: "#home",
    text: "home",
  },
  {
    id: nanoid(),
    url: "#about",
    text: "about",
  },
  {
    id: nanoid(),
    url: "#skills",
    text: "skills",
  },
  {
    id: nanoid(),
    url: "#projects",
    text: "projects",
  },
  // {
  //   id: 5,
  //   url: "/resume",
  //   text: "resume",
  // },
  {
    id: nanoid(),
    url: "#contact",
    text: "contact",
  },
];

export const social = [
  {
    id: nanoid(),
    url: "https://github.com/Catherine-Anokwuru",
    icon: <FaGithub />,
    text: "Github",
  },
  // {
  //   id: nanoid(),
  //   url: "https://www.twitter.com",
  //   icon: <FaTwitter />,
  //   text: "Twitter",
  // },
  {
    id: nanoid(),
    url: "https://www.linkedin.com/in/catherine-anokwuru-5a4694199",
    icon: <FaLinkedin />,
    text: "Linkedin",
  },
  {
    id: nanoid(),
    url: "https://wa.me/9014416358",
    icon: <FaWhatsapp />,
    text: "Whatsapp",
  },
];

export const education = [
  {
    id: 1,

    degree: "B.A. Mass Communication",
    school: "University of Nigeria,Nsukka",
    date: "2017 – 2022",
    cgpa: "Graduated with a Second Class Upper honours(CGPA:4.3)",
  },
  {
    id: 2,
    degree: "Graphic Design Specialization",
    school: "Coursera- California Institute of Arts",
    date: "2022",
  },
  {
    id: 3,
    degree: "JavaScript Tutorial and Projects Course",
    school: "Udemy",
    date: "2023",
  },
  {
    id: 4,
    degree: "React 18 Tutorial and Projects Course",
    school: "Udemy",
    date: "2023",
  },
];

export const experience = [
  {
    position: "Intern",
    company: "City FM",
    date: "October 2019 - December 2019",
    responsibilities: [
      "Processing of E-Business products",
      "Customers account processing and complaints resolutions",
      "Account openings and related functions",
      "Processing of receipts, ATM cards, chequebooks and confirmation Letters",
    ],
  },
  {
    position: "Intern",
    company: "Wish FM",
    date: "April 2021 - June 2021",
    responsibilities: [
      "Processing of E-Business products",
      "Customers account processing and complaints resolutions",
      "Account openings and related functions",
      "Processing of receipts, ATM cards, chequebooks and confirmation Letters",
    ],
  },
  {
    position: "Sales Person",
    company: "Ofama Bakery",
    date: "March 2022 - October 2022",
    responsibilities: [
      "Processing of E-Business products",
      "Customers account processing and complaints resolutions",
      "Account openings and related functions",
      "Processing of receipts, ATM cards, chequebooks and confirmation Letters",
    ],
  },
];

export const personalInfo = [
  {
    name: "Anokwuru, Catherine Ihuoma",
    nationality: "Nigerian",
    sex: "Female",
    dob: "25th September, 2001",
    address: "No 7,Ajaga Street,Cele-Egbe,Ejigbo Lagos.",
    tel: "08056788338",
    email: "catherineanokwuru@gmail.com",
  },
];

export const resumeIcon = [
  {
    icon: <FaUser />,
    title: "Personal Info",
  },
  {
    icon: <FaUserGraduate />,
    title: "Education",
  },
  {
    icon: <FaBriefcase />,
    title: "Experience",
  },
];

export const devSkills = [
  {
    id: nanoid(),
    icon: <FaHtml5 />,
    title: "HTML5",
    level: "Intermediate",
  },
  {
    id: nanoid(),
    icon: <FaCss3Alt />,
    title: "CSS",
    level: "Intermediate",
  },

  {
    id: nanoid(),
    icon: <FaSass />,
    title: "SCSS",
    level: "Intermediate",
  },
  {
    id: nanoid(),
    icon: <SiTailwindcss />,
    title: "TailwindCSS",
    level: "Intermediate",
  },
  {
    id: nanoid(),
    icon: <FaJsSquare />,
    title: "Javascript",
    level: "Intermediate",
  },
  {
    id: nanoid(),
    icon: <FaReact />,
    title: "ReactJS",
    level: "Intermediate",
  },

  {
    id: nanoid(),
    icon: <FaGitAlt />,
    title: "Git",
    level: "Beginner",
  },
  {
    id: nanoid(),
    icon: <SiFirebase />,
    title: "Firebase",
    level: "Beginner",
  },
];

export const otherSkills = [
  {
    id: nanoid(),
    icon: <SiAdobephotoshop />,
    title: "Adobe Photoshop",
    level: "Intermediate",
  },
  {
    id: nanoid(),
    icon: <SiAdobeillustrator />,
    title: "Adobe Illustrator",
    level: "Intermediate",
  },
  {
    id: nanoid(),
    icon: <SiAdobeindesign />,
    title: "Adobe Indesign",
    level: "Intermediate",
  },
  {
    id: nanoid(),
    icon: <SiWebflow />,
    title: "Webflow",
    level: "Beginner",
  },
];


export const projects = [
  {
    id: nanoid(),
    title: "Safemain",
    description: "Company Website for SafeMain Integrated Services Limited",
    image: safemain,
    url: "https://safemain.com.ng/",
    techStack: ["React", "HTML", "CSS"],
  },
  {
    id: nanoid(),
    title: "Nativity",
    description: "E-commerce web application",
    image: nativity,
    url: "https://catherine-anokwuru.github.io/nativity/",
    techStack: ["JavaScript", "HTML", "SCSS"],
  },
  {
    id: nanoid(),
    title: "Hiredom",
    description:
      "Landing page for an app that connects domestic workers with their clients",
    image: hiredom,
    url: "https://catherine-anokwuru.github.io/hiredom/",
    techStack: ["JavaScript", "HTML", "SCSS"],
  },
];
