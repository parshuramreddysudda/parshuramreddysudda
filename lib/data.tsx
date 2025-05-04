import React from "react";
import {
  FaChartBar,
  FaCogs,
  FaReact,
} from "react-icons/fa";
import {
  SiDotnet,
  SiFreelancer,
  SiGooglehome,
  SiGreenhouse,
  SiHilton,
  SiMastercard,
} from "react-icons/si";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
  faJava,
  faJenkins,
  faBootstrap,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBroadcastTower,
  faChartLine,
  faDatabase,
  faExchangeAlt,
  faFileAlt,
  faFileCode,
  faFire,
  faLeaf,
  faLock,
  faMap,
  faSatellite,
  faTerminal,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import {BsTerminal } from "react-icons/bs";

import { SiGithub, SiGmail, SiHackerrank, SiLeetcode, SiLinkedin } from "react-icons/si";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Testimonials",
    hash: "#testimonials",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

type Experience = {
  title: string;
  company: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  date: string;
};

export const experiencesData: Experience[] = [
  {
    title: ".NET Full Stack Engineer",
    company: "Xpand Corporation",
    description: (
      <ul className="mt-1 font-normal text-gray-700 list-disc dark:text-white/75">
        <li className="mb-2">
          <span className="mr-2">🚀</span> Client: Contributed to the
          CareerOneStop project (U.S. government initiative).
        </li>
        <li className="mb-2">
          <span className="mr-2">💻</span> Led migration to a React-based
          architecture, using Tailwind CSS and Redux, significantly improving
          website performance.
        </li>
        <li className="mb-2">
          <span className="mr-2">🛡️</span> Improved microservice resilience by
          implementing Polly and Microsoft Resilience frameworks (circuit
          breaker, retry, fallback patterns).
        </li>
        <li className="mb-2">
          <span className="mr-2">✅</span> Achieved 90% test coverage for
          microservices through comprehensive unit and integration testing.
        </li>
        <li className="mb-2">
          <span className="mr-2">☁️</span> Deployed applications to Azure,
          configuring CI/CD pipelines for seamless integration and delivery.
        </li>
      </ul>
    ),
    icon: React.createElement(SiDotnet),
    date: "Jul 2024 - Present",
  },
  {
    title: "Linux Engineer",
    company: "Michigan Technological University",
    description: (
      <ul className="mt-1 font-normal text-gray-700 list-disc dark:text-white/75">
        <li className="mb-2">
          🖥️ Provided hardware and software support, addressing Linux-based
          issues for faculty, staff, and students.
        </li>
        <li className="mb-2">
          🛠️ Orchestrated deployment and testing of applications in diverse
          Linux environments.
        </li>
        <li className="mb-2">
          🔍 Implemented new Linux systems, ensuring optimal configuration and
          security practices.
        </li>
        <li className="mb-2">
          📝 Documented precise installation instructions and facilitated
          knowledge sharing.
        </li>
      </ul>
    ),
    icon: React.createElement(BsTerminal),
    date: "May 2023 - Present",
  },
  {
    title: "Full Stack Developer",
    company: "Mastercard",
    description: (
      <ul className="mt-1 font-normal text-gray-700 list-disc dark:text-white/75">
        <li className="mb-2">
          🌐 Developed interactive UI web pages using React, HTML5, CSS, and
          JavaScript for MasterCard's Rewards Services.
        </li>
        <li className="mb-2">
          🔄 Implemented Spring Framework with MVC architecture, integrating JSP
          for backend development.
        </li>
        <li className="mb-2">
          🛠️ Managed CI/CD integration, ensuring smooth deployment processes.
        </li>
        <li className="mb-2">
          📊 Utilized Splunk and Sonar for monitoring, debugging, and enhancing
          application security.
        </li>
      </ul>
    ),
    icon: React.createElement(SiMastercard),
    date: "Dec 2020 - Aug 2022",
  },
  {
    title: "Technical Lead & Frontend Developer",
    company: "Halfway",
    description: (
      <ul className="mt-1 font-normal text-gray-700 list-disc dark:text-white/75">
        <li className="mb-2">
          🚀 Led frontend development using ReactJS, Google Maps API, and Twilio
          API for a dynamic company website.
        </li>
        <li className="mb-2">
          🌍 Integrated Vercel for automated deployments and real-time log
          monitoring.
        </li>
        <li className="mb-2">
          📈 Enhanced user engagement with rich animations and responsive design
          principles.
        </li>
        <li className="mb-2">
          🔍 Collaborated across teams, optimizing project progress and
          efficiency.
        </li>
      </ul>
    ),
    icon: React.createElement(SiFreelancer),
    date: "Jul 2019 - Dec 2020",
  },
];

export const projectsData = [
  {
    title: "Arcgis - Redux Middleware",
    description:
      "Developed a geospatial data visualization application using ArcGIS API for JavaScript. Integrated external data sources, implemented dynamic mapping functionalities, and utilized spatial analysis techniques.",
    tags: ["ArcGIS", "Redux.js", "React.js"],
    imageUrl: require("../public/images/projects/kttp.jpeg"),
  },
  {
    title: "Spotify Clone",
    description:
      "Created a Spotify clone using Next.js, Tailwind CSS, and Firebase. Added Google Authenticator for secure user authentication.",
    tags: ["Next.js", "Tailwind CSS", "Firebase"],
    imageUrl: "/images/projects/spotify.png",
  },
  {
    title: "Pronoxis (PHP Static Source Code Analyzer)",
    description:
      "Developed a PHP static source code analyzer to scan for 13 types of security attacks, enhancing code security and reliability.",
    tags: ["PHP", "Security Analysis"],
    imageUrl: "/images/projects/pronoxis.png",
  },
  {
    title:
      "React + Redux Web Application with RBAC, OpenAPI v3, and Amcharts Integration",
    description:
      "Built a dynamic web application using React and Redux, featuring Role-Based Access Control (RBAC), OpenAPI v3 integration, and interactive data visualization with Amcharts.",
    tags: ["React.js", "Redux.js", "RBAC", "OpenAPI v3", "Amcharts"],
    imageUrl: "/images/projects/React-Dashboard.gif",
  },
] as const;

export const skillsData = [
  { skill: "HTML", icon: "faHtml5" },
  { skill: "CSS", icon: "faCss3Alt" },
  { skill: "JavaScript", icon: "faJs" },
  { skill: "React.js", icon: "FaReact" },
  { skill: "Redux.js", icon: "faReact" },
  { skill: "Python", icon: "faPython" },
  { skill: "Java", icon: "faJava" },
  { skill: "SQL", icon: "faDatabase" },
  { skill: "Firebase", icon: "faFire" },
  { skill: "Jenkins", icon: "faJenkins" },
  { skill: "ArcGIS Engine", icon: "faMap" },
  { skill: "Bootstrap", icon: "faBootstrap" },
  { skill: "Linux Administration", icon: "faLinux" },
  { skill: "Networking", icon: "faNetworkWired" },
  { skill: "Amcharts", icon: "FaChartBar" },
  { skill: "CI/CD", icon: "FaCogs" },
  { skill: "Command-line tools", icon: "faTerminal" },
  { skill: "OpenAPI v3", icon: "faFileCode" },
  { skill: "AJAX", icon: "faExchangeAlt" },
  { skill: "Spring MVC", icon: "faLeaf" },
  { skill: "Foreman", icon: "faTools" },
  { skill: "Kickstart Files", icon: "faFileAlt" },
  { skill: "RedHat Network Satellite", icon: "faSatellite" },
  { skill: "ESAPI Encoders and Validators", icon: "faLock" },
  { skill: "Sonar", icon: "faBroadcastTower" },
  { skill: "Splunk", icon: "faChartLine" },
] as const;

export const skills_icons = {
  faHtml5,
  faCss3Alt,
  faJs,
  FaReact,
  faReact,
  faPython,
  faJava,
  faDatabase,
  faFire,
  faJenkins,
  faMap,
  faBootstrap,
  faLinux,
  FaChartBar,
  FaCogs,
  faTerminal,
  faFileCode,
  faExchangeAlt,
  faLeaf,
  faTools,
  faFileAlt,
  faSatellite,
  faLock,
  faBroadcastTower,
  faChartLine,
};

export const linkTexts = {
  Home: "<Ram/>",
  About: "Me",
  Projects: "Creations",
  Skills: "Abilities",
  Experience: "Journey",
  Contact: "Connect",
};


export const socialBarData ={
  navbar: [
    { href: "/", icon: SiGooglehome, label: "Home",navbar:true },
    { href: "/blog", icon: SiHilton, label: "Blog",navbar:false },
  ],
  contact:{
          social: {
            GitHub: {
              name: "GitHub",
              url: "https://github.com/parshuramreddysudda",
              icon: SiGithub,
              navbar: true,
            },
            LinkedIn: {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/parshuramreddy/",
              icon: SiLinkedin,
      
              navbar: true,
            },
            LeetCode: {
              name: "Leetcode",
              url: "https://leetcode.com/u/ParshuramSudda/",
              icon: SiLeetcode,
      
              navbar: true,
            },
            HackerRank: {
              name: "Hacker Rank",
              url: "https://www.hackerrank.com/profile/parshuram_sudda",
              icon: SiHackerrank,
              navbar: true,
            },
            Email: {
              name: "Send Email",
              url: "mailto:parshuram.sudda@gmail.com",
              icon: SiGmail,
              navbar: true,
            },
          },
    }
}


export const testimonials = [
  {
    text: "Ram is a hardworking professional, approaches all his tasks with a positive attitude. Cheerful guy to work with, very understandable and collaborative in nature.",
    image: "https://via.placeholder.com/100", // Replace with actual image URL if available
    name: "Sasi Jeyarajan",
    title: "Senior Software Engineer",
    rating: 4.8,
  },
  {
    text: "Parshuram joined our team as a fresher last year and picked up the pace very quickly. He is now our go-to guy for any brainstorming related tasks to explore ideas.",
    image: "https://via.placeholder.com/100",
    name: "Sanfer S",
    title: "Full Stack Developer at Wipro",
    rating: 4.9,
  },
  {
    text: "It’s rare that you come across standout talent like Parshuram. If you’re looking for a talented Full Stack Developer, I’d highly recommend hiring Parshuram!",
    image: "https://via.placeholder.com/100",
    name: "Mohammed Munaff",
    title: "Director at AT Digitals",
    rating: 5.0,
  },
  {
    text: "Parshuram is a gem of a person to work with. He always comes with original ideas and implements them in no time. He constantly updates his knowledge through courses and workshops.",
    image: "SiLinkedin",
    name: "Madhu Kalyan",
    title: "Mobile Application Architect",
    rating: 4.9,
  },
];