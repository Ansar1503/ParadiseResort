import { ThemeContext } from "@/context/themeContext/ThemeContext";
import { useContext } from "react";

export const useTheme = () => useContext(ThemeContext);
