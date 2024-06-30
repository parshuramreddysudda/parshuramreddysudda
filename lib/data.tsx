import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaChartBar, FaCogs, FaCss3Alt, FaHtml5, FaJs, FaLinux, FaReact } from "react-icons/fa";
import { SiCodesandbox, SiFreelancer, SiNextdotjs, SiRedux, SiReduxsaga } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
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
} from '@fortawesome/free-brands-svg-icons';
import { faBroadcastTower, faChartLine, faDatabase, faExchangeAlt, faFileAlt, faFileCode, faFire, faLeaf, faLock, faMap, faSatellite, faTerminal, faTools } from "@fortawesome/free-solid-svg-icons";
import { BsFillPersonFill, BsTerminal } from "react-icons/bs";


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
    title: "Linux Engineer",
    company: "Michigan Technological University",
    description: (
      <ul className="mt-1 font-normal text-gray-700 list-disc dark:text-white/75">
        <li className="mb-2">
          🖥️ Provided hardware and software support, addressing Linux-based issues for faculty, staff, and students.
        </li>
        <li className="mb-2">
          🛠️ Orchestrated deployment and testing of applications in diverse Linux environments.
        </li>
        <li className="mb-2">
          🔍 Implemented new Linux systems, ensuring optimal configuration and security practices.
        </li>
        <li className="mb-2">
          📝 Documented precise installation instructions and facilitated knowledge sharing.
        </li>
      </ul>
    ),
    icon: React.createElement(BsTerminal),
    date: "May 2023 - Present",
  },
  {
    title: "Full Stack Developer",
    company: "Wipro Limited",
    description: (
      <ul className="mt-1 font-normal text-gray-700 list-disc dark:text-white/75">
        <li className="mb-2">
          🌐 Developed interactive UI web pages using React, HTML5, CSS, and JavaScript for MasterCard's Rewards Services.
        </li>
        <li className="mb-2">
          🔄 Implemented Spring Framework with MVC architecture, integrating JSP for backend development.
        </li>
        <li className="mb-2">
          🛠️ Managed CI/CD integration, ensuring smooth deployment processes.
        </li>
        <li className="mb-2">
          📊 Utilized Splunk and Sonar for monitoring, debugging, and enhancing application security.
        </li>
      </ul>
    ),
    icon: React.createElement(SiCodesandbox),
    date: "Dec 2020 - Aug 2022",
  },
  {
    title: "Technical Lead & Frontend Developer",
    company: "Halfway",
    description: (
      <ul className="mt-1 font-normal text-gray-700 list-disc dark:text-white/75">
        <li className="mb-2">
          🚀 Led frontend development using ReactJS, Google Maps API, and Twilio API for a dynamic company website.
        </li>
        <li className="mb-2">
          🌍 Integrated Vercel for automated deployments and real-time log monitoring.
        </li>
        <li className="mb-2">
          📈 Enhanced user engagement with rich animations and responsive design principles.
        </li>
        <li className="mb-2">
          🔍 Collaborated across teams, optimizing project progress and efficiency.
        </li>
      </ul>
    ),
    icon: React.createElement(BsFillPersonFill),
    date: "Jul 2019 - Dec 2020",
  },
  {
    title: "Freelance Web Developer",
    company: "Aftertutor",
    description: (
      <ul className="mt-1 font-normal text-gray-700 list-disc dark:text-white/75">
        <li className="mb-2">
          🎨 Developed HTML pages with animations and minimized code for aesthetic designs.
        </li>
        <li className="mb-2">
          🕒 Managed project timelines and client relations, delivering projects on schedule.
        </li>
      </ul>
    ),
    icon: React.createElement(SiFreelancer),
    date: "Mar 2018 - Jun 2019",
  },
];

export const projectsData = [
  {
    title: "Arcgis - Redux Middleware",
    description:
      "Developed a geospatial data visualization application using ArcGIS API for JavaScript. Integrated external data sources, implemented dynamic mapping functionalities, and utilized spatial analysis techniques.",
    tags: ["ArcGIS", "Redux.js", "React.js"],
    imageUrl: "https://via.placeholder.com/192",
  },
  {
    title: "Instagram Clone",
    description:
      "Built an Instagram clone using Next.js, Tailwind CSS, and RecoilJs. Integrated Google Authenticator with NextAuth for enhanced security.",
    tags: ["Next.js", "Tailwind CSS", "RecoilJs"],
    imageUrl: "https://via.placeholder.com/192",
  },
  {
    title: "Spotify Clone",
    description:
      "Created a Spotify clone using Next.js, Tailwind CSS, and Firebase. Added Google Authenticator for secure user authentication.",
    tags: ["Next.js", "Tailwind CSS", "Firebase"],
    imageUrl: "https://via.placeholder.com/192",
  },
  {
    title: "Pronoxis (PHP Static Source Code Analyzer)",
    description:
      "Developed a PHP static source code analyzer to scan for 13 types of security attacks, enhancing code security and reliability.",
    tags: ["PHP", "Security Analysis"],
    imageUrl: "https://via.placeholder.com/192",
  },
  {
    title: "Departmental Website For Engineering College",
    description:
      "Created a comprehensive website for an engineering college to manage student attendance and academic records.",
    tags: ["Web Development", "Student Management"],
    imageUrl: "https://via.placeholder.com/192",
  },
  {
    title: "React + Redux Web Application with RBAC, OpenAPI v3, and Amcharts Integration",
    description:
      "Built a dynamic web application using React and Redux, featuring Role-Based Access Control (RBAC), OpenAPI v3 integration, and interactive data visualization with Amcharts.",
    tags: ["React.js", "Redux.js", "RBAC", "OpenAPI v3", "Amcharts"],
    imageUrl: "https://via.placeholder.com/192",
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
