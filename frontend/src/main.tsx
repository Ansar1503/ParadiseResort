import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/context/themeContext/ThemeContext.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
