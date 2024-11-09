import { link } from "fs";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Tech Stacks", link: "#tech-stack" },
  { name: "Projects", link: "#projects" },
  // { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const upperTechStackList = [
  {
    name: "ReactJS",
    icon: "/react.svg"
  },
  {
    name: "NodeJS",
    icon: "/node.svg"
  },
  {
    name: "Express",
    icon: "/express.svg"
  },
  {
    name: "MongoDB",
    icon: "/mongo.svg"
  },
  {
    name: "JavaScript",
    icon: "/js.svg"
  },
  {
    name: "TailWind CSS",
    icon: "/tss.svg"
  },
  
]

export const lowerTechStackList = [
  {
    name: "HTML5",
    icon: "/html.svg"
  },
  {
    name: "CSS3",
    icon: "/css.svg"
  },
  {
    name: "Next JS",
    icon: "/next.svg"
  },
  {
    name: "React Redux",
    icon: "/redux.svg"
  },
  {
    name: "Framer Motion",
    icon: "/fm.svg"
  },
  {
    name: "Git",
    icon: "/hub.svg"
  },
]



export const gridItems = [
  
  {
    id: 4,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },


  {
    id: 5,
    title: "Do you want to start a project together?",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "items-center justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [

  {
    id: 1,
    title: "ZMeet",
    des: "Simplify your video conferencing experience with ZMeet. Seamlessly connect with colleagues and friends and schedule meetings",
    img: "/Zmeet.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://z-meet-acro.vercel.app/",
  },
  {
    id: 2,
    title: "JEE-PYQ",
    des: "A Software to store previous year questions of Join Entrance Examinations",
    img: "/jee.jpg",
    iconLists: ["/re.svg", "/js.svg", "/nodejs.svg"],
    link: "https://jeepyq.vercel.app/",
  },

];





export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Lead a Five Member Team for College Hackathon",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Structures And Algorithms",
    desc: "Proficient in implementing and optimizing data structures and algorithms in Java for efficient problem-solving.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/acroop"
  },
  {
    id: 2,
    img: "/insta.svg",
    link: 'https://www.instagram.com/acro_gamer_op'
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/supratik-das86/"
  },
];