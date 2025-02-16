import { IconCloud } from "../components/magicui/icon-cloud";
import SectionHeading from "./section-heading";

// Import local icons
import angularIcon from "../public/images/Icons/angular.ico";
import java from "../public/images/Icons/java.ico";
import csharp from "../public/images/Icons/csharp.ico";
import dotnet from "../public/images/Icons/dotnet.ico";
import github from "../public/images/Icons/github.ico";
import azureDevops from "../public/images/Icons/azure-devops.ico";

const icons = {
  angular: angularIcon,
  java: java,
  csharp: csharp,
  dotnet: dotnet,
  github: github,
  azureDevops: azureDevops,
};

const slugs = [
  "javascript",
  "typescript",
  "react",
  "angular",
  "java",
  "csharp",
  "dotnet",
  "github",
  "azureDevops",
  "nextdotjs", // Simple Icons
  "html5", // Simple Icons
  "css3", // Simple Icons
  "tailwindcss", // Simple Icons
  "redux", // Simple Icons
  "postgresql", // Simple Icons
  "mysql", // Local import
  "docker", // Local import
  "kubernetes", // Simple Icons
  "jenkins", // Simple Icons
  "vercel", // Simple Icons
  "git", // Local import
  "bitbucket", // Simple Icons
  "github", // Local import
  "postman", // Local import
  "jest", // Local import
  "moq", // Local import
  "testinglibrary", // Simple Icons
  "jira", // Simple Icons
];

const images = slugs.map((slug) => {
  if (icons[slug]) {
    return icons[slug].src; // Use local icon
  } else {
    return `https://cdn.simpleicons.org/${slug}/${slug}`;
  }
});

export default function IconCloudDemo() {
  return (
    <section id="skills" className="scroll-mt-28">
      <SectionHeading>Technical Skills 💻</SectionHeading>
      <div className="relative flex items-center justify-center overflow-hidden size-full">
        <IconCloud images={images} />
      </div>
    </section>
  );
}
