import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";
import { projects as initialProjects } from "@/data/projects";
import { fetchGitHubProjects } from "@/lib/github";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "./ProjectModal";

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [allProjects, setAllProjects] = useState<Project[]>(initialProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const loadGitHubProjects = async () => {
      const ghProjects = await fetchGitHubProjects();
      // Avoid duplicates if any
      const uniqueGhProjects = ghProjects.filter(
        (gh) => !initialProjects.some((p) => p.title === gh.title)
      );
      setAllProjects([...initialProjects, ...uniqueGhProjects]);
    };
    loadGitHubProjects();
  }, []);

  const categories = [
    "All",
    "Robotics & Autonomy",
    "AI & Computer Vision",
    "Edge & Systems",
    "Leadership",
  ];

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory =
      activeCategory === "All"
        ? true
        : activeCategory === "Leadership"
        ? project.category === "Leadership" ||
          project.tags.includes("Leadership")
        : project.category === activeCategory;

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.fullDescription.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 px-4 md:px-6 container mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of work demonstrating capabilities in Robotics, AI, and
          System Architecture.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mt-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-10 bg-background/50 backdrop-blur-sm"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            onClick={() => setActiveCategory(cat)}
            className="rounded-full"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden bg-muted">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        + {project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
