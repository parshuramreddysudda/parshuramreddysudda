import { useTheme } from "@/context/theme-context";

export function AnimatedBackground() {
    const { theme } = useTheme();
  
    return (
      <div className={`area ${theme === "dark" ? "dark" : ""}`}>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }