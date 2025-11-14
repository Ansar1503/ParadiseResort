import { BrowserRouter } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import AppRoutes from "@/routes/AppRoutes";

const App = () => (
  <TooltipProvider>
    <Sonner />
    <BrowserRouter>
      <Navigation />
      <div className="pt-16">
        <AppRoutes />
      </div>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
