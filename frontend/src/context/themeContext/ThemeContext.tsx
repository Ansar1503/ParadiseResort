import { createContext } from "react";
import type { ThemeContextType } from "@/types/Theme";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});
