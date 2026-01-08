import { motion } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/img/profile.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Gradient - Reduced opacity to let neural network show through */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background/50 to-background/80" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-4xl"
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
          <img
            src={profileImg}
            alt="Nick Goberville"
            className="rounded-full w-full h-full object-cover border-4 border-primary/20 shadow-2xl relative z-10"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 pb-2">
          Nick Goberville, Ph.D.
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
          Autonomy and AI Software Engineer
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Specializing in real-time edge AI and agentic workflows for autonomous
          systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="/assets/documents/NickGobervilleResume_1225_0.pdf"
              download
            >
              <FileText className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-6 pt-8 text-muted-foreground">
          <a
            href="https://github.com/nickgoberville"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/nick-goberville-5814a9125"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:nickgoberville21@gmail.com"
            className="hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
