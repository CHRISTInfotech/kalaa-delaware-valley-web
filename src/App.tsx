
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import UpcomingEvents from "./pages/UpcomingEvents";
import PastEvents from "./pages/PastEvents";
import EventDetail from "./pages/EventDetail";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Membership from "./pages/Membership";
import MembershipForm from "./pages/MembershipForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/events/upcoming" element={<UpcomingEvents />} />
              <Route path="/events/past" element={<PastEvents />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/membership/apply" element={<MembershipForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
