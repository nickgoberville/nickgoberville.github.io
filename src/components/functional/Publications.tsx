import { AnimatePresence, motion } from "framer-motion";
import { publications, type Publication } from "@/data/publications";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export function Publications() {
  const [filter, setFilter] = useState<"All" | Publication["type"]>("All");

  const filtered =
    filter === "All"
      ? publications
      : publications.filter((p) => p.type === filter);

  return (
    <section id="publications" className="py-20 px-4 md:px-6 bg-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Publications & Patents
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Research contributions advancing the field of automated driving
            systems, sensor fusion, and safety.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {["All", "Patent", "Journal", "Conference", "Talk/Panel"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f as any)}
            >
              {f}
            </Button>
          ))}
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((pub, index) => (
              <motion.div
                key={pub.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2 items-center">
                        <Badge
                          variant={
                            pub.type === "Patent" ? "default" : "secondary"
                          }
                        >
                          {pub.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground font-mono">
                          {pub.date}
                        </span>
                        <span className="text-sm font-medium text-primary">
                          {pub.authorship}
                        </span>
                        {pub.location && (
                          <span className="text-sm text-muted-foreground italic">
                            • {pub.location}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold leading-tight">
                        {pub.title}
                      </h3>
                    </div>
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0"
                      >
                        <Button variant="ghost" size="icon">
                          <ExternalLink className="h-5 w-5" />
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
