import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/functional/Hero";
import { Timeline } from "@/components/functional/Timeline";
import { ProjectGrid } from "@/components/functional/ProjectGrid";
import { Publications } from "@/components/functional/Publications";
import { NeuralBackground } from "@/components/ui/NeuralBackground";

function App() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary/20">
      <NeuralBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Timeline />
          <ProjectGrid />
          <Publications />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
