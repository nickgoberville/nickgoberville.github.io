import { motion } from "framer-motion";
import {
  X,
  ExternalLink,
  GitCommit,
  GitPullRequest,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useEffect, useState } from "react";
import { fetchGitHubRepoDetails, type RepoDetails } from "@/lib/github";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [details, setDetails] = useState<RepoDetails | null>(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (project && project.id.startsWith("gh-")) {
      // setLoading(true);
      const ghLink =
        project.links?.find((l) => l.label === "GitHub")?.url || "";
      const match = ghLink.match(/github\.com\/[^\/]+\/([^\/]+)/);
      if (match) {
        const repoName = match[1];
        fetchGitHubRepoDetails(repoName).then((data) => {
          setDetails(data);
          // setLoading(false);
        });
      } else {
        // setLoading(false);
      }
    } else {
      setDetails(null);
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border rounded-xl shadow-2xl flex flex-col"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10 bg-background/50 hover:bg-background/80 rounded-full"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="relative h-64 md:h-80 w-full shrink-0 overflow-hidden bg-muted">
          {project.videoUrl && project.videoUrl.includes("player") ? (
            <iframe
              src={project.videoUrl}
              className="w-full h-full object-cover"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <div>
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium">
                {project.category}
              </span>
              <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-sm">
                {project.date}
              </span>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-stone dark:prose-invert max-w-none">
            {/* Always prioritize the manually curated, senior-persona description if it exists */}
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-2xl font-bold mt-6 mb-4" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-xl font-semibold mt-6 mb-3" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-l-4 border-primary/50 pl-4 italic my-4 bg-muted/20 p-2 rounded-r"
                    {...props}
                  />
                ),
                hr: ({ ...props }) => (
                  <hr className="my-6 border-muted-foreground/20" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-6 space-y-2 my-4" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="marker:text-primary" {...props} />
                ),
              }}
            >
              {project.fullDescription}
            </ReactMarkdown>

            {/* Optional: Show loading state only if we really wanted to mix them, but here we just show commits below. 
                If we wanted to append README, we could, but the user requested SPECIFIC format. 
                So we will stop rendering the README entirely to ensure compliance with the "Senior Persona" format.
            */}
          </div>

          {/* Recent Commits Visualization */}
          {details?.commits && details.commits.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <GitPullRequest className="w-5 h-5 text-primary" />
                Recent Activity
              </h3>
              <div className="relative border-l-2 border-muted ml-3 space-y-6 pb-2">
                {details.commits.map((commit) => (
                  <div key={commit.sha} className="relative pl-6">
                    {/* Dot */}
                    <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-background bg-muted-foreground/50 ring-4 ring-background" />

                    <div className="flex flex-col gap-1">
                      <a
                        href={commit.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium hover:underline text-foreground"
                      >
                        {commit.message.split("\n")[0]}
                      </a>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <GitCommit className="w-3 h-3" />{" "}
                          {commit.sha.substring(0, 7)}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(commit.date).toLocaleDateString()}
                        </span>
                        <span>•</span>
                        <span>by {commit.author}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.links && (
            <div className="flex gap-4 pt-4 border-t">
              {project.links.map((link) => (
                <Button key={link.label} asChild>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.label} <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
