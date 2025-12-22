import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Connected and Automated Vehicle Research Engineer",
    company: "Argonne National Laboratory",
    date: "2023 - Present",
    description:
      "Leading research in VIL architectures, standardized testing frameworks (EcoCAR), and deployment of automated systems (LARS) on physical vehicles.",
    icon: Briefcase,
  },
  {
    id: 2,
    role: "Co-Founder",
    company: "Revision Autonomy",
    date: "2021 - 2023",
    description:
      "Co-founded a startup to commercialize autonomous vehicle perception technology. Secured over $215k in funding through NSF I-Corps.",
    icon: Briefcase,
  },
  {
    id: 3,
    role: "Ph.D. in Automated Systems",
    company: "Western Michigan University",
    date: "2019 - 2023",
    description:
      "Dissertation on automated driving systems in snow. Specialized in computer vision, sensor fusion, and robust control systems.",
    icon: GraduationCap,
  },
];

export function Timeline() {
  return (
    <section id="experience" className="py-20 px-4 md:px-6 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">
            My professional journey in engineering and leadership.
          </p>
        </div>

        <div className="relative border-l border-muted-foreground/30 ml-6 md:ml-12 space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Dot */}
                <div className="absolute -left-3 top-1 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>

                <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {exp.role}
                    </h3>
                    <span className="text-sm text-muted-foreground font-mono bg-secondary px-2 py-1 rounded">
                      {exp.date}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-muted-foreground mb-4">
                    {exp.company}
                  </h4>
                  <p className="text-base text-card-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
