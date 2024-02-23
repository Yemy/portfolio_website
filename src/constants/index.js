import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  bosco_children,
  ecom,
  hms,
  elearn,
  mirchaye,
  dama,
  addis_chat,
  addistweet,
  tga1,
  beteseb,
  EcomAdmin,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Data Analytics",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "System Planner and Data Manager",
    company_name: "TGA Garment",
    icon: tga1,
    iconBg: "#383E56",
    date: "March 2022 - September 2022",
    points: [
      "Developing and maintaining web applications using Django, HTML5, CSS3, JavaScript, React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other Engineers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Location: Gerji, Addis Ababa - Ethiopia",
    ],
  },
  {
    title: "Computer Teacher",
    company_name: "Bosco Childrens TVET",
    icon: bosco_children,
    iconBg: "#E6DEDD",
    date: "November 2022 - september 2023",
    points: [
      "Teaching Basic Technologies Like Networking, Software usage, Computer and Mobile Maintenance",
      "Developing and maintaining Company website using React.js and other related technologies.",
      "Collaborating with managerial teams including General Manager, Academic Dean, and others to make Learning Better and Easier.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Location: Jemo, Addis Ababa - Ethiopia",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "---Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "September 2023 - Present",
    points: [
      "Developing and maintaining web applications using 🔽",
      "FrontEnd:- React.js, React Native, Next.js, Vue Js HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap5, and other related technologies.",
      "BackEnd:-Python( Django, Flask), JavaScript(Node Js), and prevously(PHP, Java, C#, C, C++, R ), Pygame, OpenGL, Pyqt, Kivy, for standalone projects.",
      "Databases:- MySQL, SQLite, PostgreSQL, FirbaseFireStore and others.",
      "Experinces with Docker, and Virtual Environments, Git, GitHub, BitBucket, Firebase, AWS Amplify, Google Cloud, BigQuery, Opendata.",

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a platform that is able to do all my jobs from home and do all managerial works, Inventory, Attendance and almost everthing that from supervisors to production manager and general manager can do untill we hire Yemane and proofed everthing.",
    name: "Getnet Aregawi",
    designation: "General Manager",
    company: "TGA Garment P.L.C",
    image: "",
  },
  {
    testimonial:
      "I've never met a teacher who truly cares about their students' success like Yemane does, and help us build our company website from idea tp design to development.",
    name: "Endalkachew B",
    designation: "Academic Dean",
    company: "Bosco children TVET",
    image: "",
  },
  {
    testimonial:
      "After Yemane developed our website, our connection with our donors and stakeholders became easier and better thank you.",
    name: "Fr Yohannes Mengistu",
    designation: "Director General",
    company: "Salliessians of DonBosco",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Addis Chat(አዲስ ቻት)",
    description:
      "Addis_chat a Social Networking site I developed this social networking site using reactjs for the frontend, firebase for backend, and google authentication system as signin method Web-based platform that allows users to Post photos, videos, text and stories, book, and manage car rent.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: addis_chat,
    source_code_link: "https://github.com/Yemy",
    live_demo: "https://addis-chat-70d75.web.app/",
  },
  {
    name: "DUCE ELearning",
    description:
      "Online Learning System Built with Django and Postgresql, Bootsrap4 and other packages, i developed this Online Learning Managemet System during the COVID19 lockdown cauze education was shut down and i thought it would be great if we learn in home from our college instructors.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: elearn,
    source_code_link: "https://github.com/Yemy",
    live_demo: "http://yemane.pythonanywhere.com/",
  },
  {
    name: "Mirchaye(ምርጫዬ) a Dating App",
    description:
        "I developed this Dating and couple matching App using reactjs for Frontend and Django Rest Framework the python web framework for the backend and a simple SQLITE3 database",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: mirchaye,
    source_code_link: "https://github.com/Yemy",
    live_demo: "https://mrchaye-538a3.web.app/",
  },
  {
    name: "Beteseb chat app",
    description:
      "Beteseb is a chating app that include group and private chating. you don't need to be facebook friends or a follower to chat with your family you just need to add your family to a brand new chat room then boom you can chat with you family. I built this site using reactjs for the frontend, DRF for backend(firebase for demo), and google, and facebook authentication system aswell as new registration system as signin methods",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "purple-text-gradient",
      },
      {
        name: "drf",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: beteseb,
    source_code_link: "https://github.com/Yemy",
    live_demo: "https://beteseb.web.app/",
  },
  {
    name: "AddisTweet(አዲስ ትዊት)",
    description:
      "AddisTweet is a Social Networking site I developed this social networking site using HTML, CSS, JS, FontAwesome for the frontend, Object-Oriented-PHP for the backend, and and MySQL database",
    tags: [
      {
        name: "html-css-js",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: addistweet,
    source_code_link: "https://github.com/Yemy",
    live_demo: "http://addistweet.epizy.com/addischat/",
  },
  {
    name: "Hospital Managment System",
    description:
      "Hospital Management System:- I developed this social networking site using reactjs for the frontend, firebase for backend, and google authentication system as signin method",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firestore",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: hms,
    source_code_link: "https://github.com/Yemy",
  },
  {
    name: "Bold Ecommerce",
    description:
      "Ecommerce Website Bold_Ecommerce built with python-django web framework and postgresql database, Online store with stripe payments intergration and guest user cart",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/Yemy",
  },
  {
    name: "Yegna Dama(የኛ ዳማ)",
    description:
      "Yegna Dama built in python-pygame and minimax algorithm, this Checkers game with single and muliplayer that have an AI that uses minimax algorithm to play against a user when you choose to play as a single player option",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
      {
        name: "minimax",
        color: "pink-text-gradient",
      },
    ],
    image: dama,
    source_code_link: "https://github.com/Yemy",
  },
  {
    name: "IShop Admin Dashboard",
    description:
      "Admin dashboard with almost all needed features like orders, employees, graphs, canban, profile, cart, notification, message and other pages included built using React.js",
    tags: [
      {
        name: "reacjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: EcomAdmin,
    source_code_link: "https://github.com/Yemy",
  },   
  
];

export { services, technologies, experiences, testimonials, projects };

