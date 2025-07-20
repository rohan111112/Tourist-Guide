import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Places from "./pages/Places";
import Activities from "./pages/Activities";
import Festivals from "./pages/Festivals";
import PlanTrip from "./pages/PlanTrip";
import TravelUpdates from "./pages/TravelUpdates";
import NotFound from "./pages/NotFound";
import './i18n';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/places" element={<Places />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/plan-trip" element={<PlanTrip />} />
          <Route path="/travel-updates" element={<TravelUpdates />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
