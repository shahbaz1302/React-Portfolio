import htmlLogo from './src/assets/tech_logo/html.png';
import cssLogo from './src/assets/tech_logo/css.png';
import javascriptLogo from './src/assets/tech_logo/javascript.png';
import reactjsLogo from './src/assets/tech_logo/reactjs.png';
import reduxLogo from './src/assets/tech_logo/redux.png';
import queryLogo from './src/assets/tech_logo/query.png';
import tailwindcssLogo from './src/assets/tech_logo/tailwindcss.png';
import nodejsLogo from './src/assets/tech_logo/nodejs.png';
import expressjsLogo from './src/assets/tech_logo/express.png';
import mysqlLogo from './src/assets/tech_logo/mysql.png';
import mongodbLogo from './src/assets/tech_logo/mongodb.png';
import firebaseLogo from './src/assets/tech_logo/firebase.png';
import cLogo from './src/assets/tech_logo/c.png';
import javaLogo from './src/assets/tech_logo/java.png';
import githubLogo from './src/assets/tech_logo/github.png';
import gitLogo from './src/assets/tech_logo/git.png'
import vscodeLogo from './src/assets/tech_logo/vscode.png';
import netlifyLogo from './src/assets/tech_logo/netlify.png';

// Education Section Logo's
import bhpsLogo from './src/assets/education_logo/bhps.jpeg';
import bbdLogo from './src/assets/education_logo/bbd.jpeg';

// Project Section Logo's
import khaneduhubLogo from './src/assets/work_logo/khaneduhub.png';
import khanstoreLogo from './src/assets/work_logo/khanstore.png';
import netflixcloneLogo from './src/assets/work_logo/netflixclone.png';
import realestateLogo from './src/assets/work_logo/realestate.png';
import worldatlasLogo from './src/assets/work_logo/worldatlas.png';
import pokemonLogo from './src/assets/work_logo/pokemon.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Query', logo: queryLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: bbdLogo,
      school: "BBD University, Lucknow",
      date: "Sept 2022 - July 2026",
      grade: "9.02 CGPA",
      desc: "Pursuing my Bachelor's degree (B.Tech) in Computer Science from BBd University, Lucknow. During my time at BBD, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at BBD University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: bhpsLogo,
      school: "Ben Hur Public School, Pilibhit",
      date: "Apr 2020 - March 2021",
      grade: "88.4%",
      desc: "I completed my class 12 education from Ben Hur Public School, Pilibhit, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: bhpsLogo,
      school: "Ben Hur Public School, Pilibhit",
      date: "Apr 2018 - March 2019",
      grade: "89.5%",
      desc: "I completed my class 10 education from Ben Hur Public School, Pilibhit, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Khan's Eduhub",
      description:
        "Khan’s Eduhub is a clean, static educational website built using HTML and CSS. It’s designed to provide a responsive and modern interface for showcasing courses, resources, and learning opportunities in a user-friendly way.",
      image: khaneduhubLogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/shahbaz1302/Khan-s-Eduhub",
      webapp: "https://khaneduhub.netlify.app/",
    },
    {
      id: 1,
      title: "Khan Store",
      description:
        "Khan Store is a simple and stylish eCommerce website built using HTML, CSS, and JavaScript. It showcases a responsive storefront with interactive features, perfect for practicing front-end web development and UI/UX design.",
      image: khanstoreLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/shahbaz1302/Khan-Store",
      webapp: "https://khanstore.netlify.app/",
    },
    {
      id: 2,
      title: "Netflix Clone",
      description:
        "A Netflix-inspired web application built with React.js and Firebase, featuring secure authentication, real-time movie data from the TMDB API, and YouTube trailer integration for an immersive streaming experience.",
      image: netflixcloneLogo,
      tags: ["React JS", "API", "FireBase", "Axios"],
      github: "https://github.com/shahbaz1302/Netflix-Clone",
      webapp: "https://flixoraaa.netlify.app/",
    },
    {
      id: 3,
      title: "World Atlas",
      description:
        "World Atlas is a fully responsive and interactive React web application that allows users to explore countries around the globe. Users can search, sort, and filter countries, and view detailed information about each one using real-time data from a public API.",
      image: worldatlasLogo,
      tags: ["React JS", "API", "Axios", "React-Router"],
      github: "https://github.com/shahbaz1302/World-Atlas",
      webapp: "https://worlddatlass.netlify.app",
    },
    {
      id: 4,
      title: "Estateex",
      description:
        "A modern Real Estate Website built with React.js, Tailwind CSS, and Framer Motion.The website features an elegant property showcase with a slider, smooth animations, customer testimonials, and a fully functional contact form powered by Web3Forms and React-Toastify.",
      image: realestateLogo,
      tags: ["React JS", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/shahbaz1302/Real-Estate-Project",
      webapp: "https://estateex.netlify.app",
    },
    {
      id: 5,
      title: "Pokemon Cards",
      description:
        "Pokémon Cards is a mini React project that displays a list of Pokémon fetched from a public API. It fetches summary data for all Pokémon and then retrieves and displays detailed stats for each Pokémon dynamically.",
      image: pokemonLogo,
      tags: ["React JS", "API", "Axios"],
      github: "https://github.com/shahbaz1302/Pokemon-Cards",
      webapp: "https://pokemonzzz.netlify.app",
    },
  ];  