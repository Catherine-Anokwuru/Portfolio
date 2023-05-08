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
} from "react-icons/si";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/skills",
    text: "skills",
  },
  {
    id: 4,
    url: "/projects",
    text: "projects",
  },
  {
    id: 5,
    url: "/resume",
    text: "resume",
  },
  {
    id: 6,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaGithub />,
    text: "Github",
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
    text: "Twitter",
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
    text: "Linkedin",
  },
  {
    id: 4,
    url: "https://www.twitter.com",
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
    date: "2020 - 2022",
  },
  {
    id: 3,
    degree: "West African Senior School Certificate Examination (WASSCE)",
    school: "Powerfields Group of Schools",
    date: "2011 – 2017",
  },
  {
    id: 4,
    degree: "First School Leaving Certificate",
    school: "Winsford Nursery and Primary School",
    date: "2005 - 2011",
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
    id: 1,
    icon: <FaHtml5 />,
    title: "HTML5",
    level: "Intermediate",
  },
  {
    id: 2,
    icon: <FaCss3Alt />,
    title: "CSS",
    level: "Intermediate",
  },
  {
    id: 3,
    icon: <FaJsSquare />,
    title: "Javascript",
    level: "Intermediate",
  },
  {
    id: 4,
    icon: <FaSass />,
    title: "SASS",
    level: "Intermediate",
  },
  {
    id: 5,
    icon: <SiTailwindcss />,
    title: "TailwindCSS",
    level: "Intermediate",
  },
  {
    id: 6,
    icon: <FaReact />,
    title: "ReactJs",
    level: "Intermediate",
  },
  {
    id: 7,
    icon: <SiWebflow />,
    title: "Webflow",
    level: "Beginner",
  },
  {
    id: 8,
    icon: <FaGitAlt />,
    title: "Git",
    level: "Beginner",
  },
];

export const otherSkills = [
  {
    id: 1,
    icon: <SiAdobephotoshop />,
    title: "Adobe Photoshop",
    level: "Intermediate",
  },
  {
    id: 2,
    icon: <SiAdobeillustrator />,
    title: "Adobe Illustrator",
    level: "Intermediate",
  },
  {
    id: 3,
    icon: <SiAdobeindesign />,
    title: "Adobe Indesign",
    level: "Intermediate",
  },
];
