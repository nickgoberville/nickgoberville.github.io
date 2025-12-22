import type { Project } from "@/data/projects";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
  homepage: string | null;
  stargazers_count: number;
  updated_at: string;
}

export async function fetchGitHubProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      "https://api.github.com/users/nickgoberville/repos?sort=updated&per_page=100"
    );
    if (!response.ok) {
      console.error("Failed to fetch GitHub repos");
      return [];
    }
    const repos: GitHubRepo[] = await response.json();

    const portfolioRepos = repos.filter((repo) => {
      // Logic: Include if it has 'portfolio' topic OR is the specific template repo requested
      return (
        repo.topics.includes("portfolio") || repo.name === "python-template"
      );
    });

    return portfolioRepos.map((repo) => mapRepoToProject(repo));
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return [];
  }
}

function mapRepoToProject(repo: GitHubRepo): Project {
  // Determine category based on topics/language
  let category: Project["category"] = "Edge & Systems"; // Default
  const lowerTopics = repo.topics.map((t) => t.toLowerCase());

  if (
    lowerTopics.some((t) => ["robotics", "ros", "ros2", "hardware"].includes(t))
  ) {
    category = "Robotics & Autonomy";
  } else if (
    lowerTopics.some((t) =>
      [
        "ai",
        "ml",
        "computer-vision",
        "deep-learning",
        "pytorch",
        "tensorflow",
      ].includes(t)
    )
  ) {
    category = "AI & Computer Vision";
  }

  // Map tags
  const tags = [repo.language, ...repo.topics]
    .filter((t): t is string => !!t) // Filter nulls
    .filter((t) => t !== "portfolio") // Remove portfolio tag
    .slice(0, 4); // Limit to 4 tags

  return {
    id: `gh-${repo.id}`,
    title: formatTitle(repo.name),
    category: category,
    description: repo.description || "No description provided.",
    fullDescription: repo.description
      ? `## Overview\n\n${repo.description}\n\n[View on GitHub](${repo.html_url})`
      : "No description available.",
    date: repo.updated_at.substring(0, 7), // YYYY-MM
    tags: tags,
    // Use a generic gradient placeholder matching the category
    imageUrl: getPlaceholderImage(category),
    links: [{ label: "GitHub", url: repo.html_url }],

    featured: false, // Don't auto-feature unless specified logic added
  };
}

function formatTitle(name: string): string {
  // Convert kebab-case or snake_case to Title Case
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getPlaceholderImage(category: string): string {
  // Return a path to a generated placeholder or a CSS gradient class if we support that.
  // Since our ProjectCard expects an image URL, let's use a reliable placeholder service
  // or a local asset if we had one.
  // For now, let's use a generated abstract pattern from a service or a solid color image.
  // Better: use a local abstract SVG or similar.
  // Let's rely on a reliable placeholder for now, or just restart to "Software" image.
  // Actually, let's just use the existing project images as fallbacks or a generic one.
  // We'll use a specific placeholder from unsplash or similar for now.

  // Using simple deterministic placeholders based on category
  switch (category) {
    case "Robotics":
      return "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800";
    case "AI/ML":
      return "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800";
    default:
      return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"; // Code
  }
}

export interface CommitInfo {
  sha: string;
  message: string;
  date: string;
  author: string;
  html_url: string;
}

export interface RepoDetails {
  readme: string | null;
  commits: CommitInfo[];
}

export async function fetchGitHubRepoDetails(
  repoName: string
): Promise<RepoDetails> {
  const username = "nickgoberville";

  try {
    // 1. Fetch README
    const readmeRes = await fetch(
      `https://api.github.com/repos/${username}/${repoName}/readme`,
      {
        headers: { Accept: "application/vnd.github.raw" },
      }
    );

    let readme = null;
    if (readmeRes.ok) {
      const fullReadme = await readmeRes.text();
      // Parse: Keep everything from Start up to the END of the "## Overview" section.
      // We look for the start of the section AFTER "## Overview".
      // Regex explanation:
      // ^([\s\S]*?)     : Match content from start (non-greedy)
      // ## Overview     : Explicitly find the Overview header
      // ([\s\S]*?)      : Match content of Overview
      // (?=\n## |$)     : Stop before the NEXT header (## ) or End of String
      const match = fullReadme.match(
        /^([\s\S]*?## Overview[\s\S]*?)(?=\n## |$)/i
      );
      if (match) {
        readme = match[0];
      } else {
        // Fallback: Check if it starts with standard header format
        if (fullReadme.trim().startsWith("#")) {
          readme = fullReadme.split("\n## ")[0] + "...";
          if (fullReadme.includes("## Overview")) {
            // Try to construct if regex failed but section exists?
            // Likely regex works, fallback is just safety.
            readme = fullReadme;
          }
        }
      }
    }

    // 2. Fetch Commits (instead of Tree)
    const commitsRes = await fetch(
      `https://api.github.com/repos/${username}/${repoName}/commits?per_page=5`
    );
    let commits: CommitInfo[] = [];
    if (commitsRes.ok) {
      const data = await commitsRes.json();
      if (Array.isArray(data)) {
        commits = data.map((item: any) => ({
          sha: item.sha,
          message: item.commit.message,
          date: item.commit.author.date,
          author: item.commit.author.name,
          html_url: item.html_url,
        }));
      }
    }

    return { readme, commits };
  } catch (e) {
    console.error("Error fetching repo details", e);
    return { readme: null, commits: [] };
  }
}
