import { Moon, Sun, Monitor } from "lucide-react";
import { useThemeStore } from "@/stores/theme";

type Theme = "light" | "dark" | "system";

const themeOrder: Theme[] = ["light", "dark", "system"];
const themeLabels: Record<Theme, string> = {
  light: "浅色",
  dark: "深色",
  system: "系统",
};

export default function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();

  const cycleTheme = () => {
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  const icon = {
    light: <Sun className="h-5 w-5" />,
    dark: <Moon className="h-5 w-5" />,
    system: <Monitor className="h-5 w-5" />,
  }[theme];

  return (
    <button
      onClick={cycleTheme}
      className="flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-muted transition-colors text-sm"
      aria-label="Toggle theme"
      title={`当前: ${themeLabels[theme]}`}
    >
      {icon}
      <span className="text-muted-foreground">{themeLabels[theme]}</span>
    </button>
  );
}
