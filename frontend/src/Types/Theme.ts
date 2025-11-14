export type ThemeType = "light" | "dark";

export const ThemeEnum = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}
