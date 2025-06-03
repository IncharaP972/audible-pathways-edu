
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PronunciationGuide from "./pages/PronunciationGuide";
import Courses from "./pages/Courses";
import CodeWithVoice from "./pages/CodeWithVoice";
import PhysicalEducation from "./pages/PhysicalEducation";
import Chatbot from "./pages/Chatbot";
import AINavigation from "./pages/AINavigation";
import Games from "./pages/Games";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pronunciation" element={<PronunciationGuide />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/code-voice" element={<CodeWithVoice />} />
          <Route path="/physical-ed" element={<PhysicalEducation />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/ai-navigation" element={<AINavigation />} />
          <Route path="/games" element={<Games />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
