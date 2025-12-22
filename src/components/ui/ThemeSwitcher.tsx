import { useEffect, useState } from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Theme = "default" | "emerald" | "amethyst" | "industrial";

export function ThemeSwitcher() {
  // Track theme for potential UI usage (e.g. checkmark)
  const [theme, setTheme] = useState<Theme>("default");
  console.log(theme); // Keep for debugging if needed, or remove unused warning by using it in UI

  useEffect(() => {
    // On mount, check if there's a saved theme
    const savedTheme =
      (localStorage.getItem("portfolio-theme") as Theme) || "default";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    // Remove all theme classes first
    root.classList.remove(
      "theme-emerald",
      "theme-amethyst",
      "theme-industrial"
    );

    // Default is just the absence of a class (relying on .dark)
    if (newTheme !== "default") {
      root.classList.add(`theme-${newTheme}`);
    }

    // Always ensure dark mode is on for this portfolio's aesthetic
    root.classList.add("dark");
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };

  const themes = [
    { id: "default", label: "Deep Space", color: "bg-blue-600" },
    { id: "emerald", label: "Emerald", color: "bg-emerald-500" },
    { id: "amethyst", label: "Amethyst", color: "bg-purple-500" },
    { id: "industrial", label: "Industrial", color: "bg-orange-500" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.id}
            onClick={() => handleThemeChange(t.id as Theme)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className={`w-3 h-3 rounded-full ${t.color}`} />
            {t.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
