import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="py-12 bg-secondary/30 border-t">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Interested in discussing automated systems, robotics, or potential
          collaborations? Feel free to reach out.
        </p>

        <div className="flex gap-8 mb-8">
          <a
            href="https://github.com/nickgoberville"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <Github className="h-8 w-8 text-foreground/80 hover:text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/nick-goberville-5814a9125"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <Linkedin className="h-8 w-8 text-foreground/80 hover:text-primary" />
          </a>
          <a
            href="mailto:nickgoberville21@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <Mail className="h-8 w-8 text-foreground/80 hover:text-primary" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nick Goberville. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
