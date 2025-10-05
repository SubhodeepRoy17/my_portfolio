import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "Smart Surplus",
    description: "Smart Food Redistribution for Zero-Waste Campus",
    image: project1,
    tags: ["React", "TypeScript", "CSS", "Node.js"],
    category: "Web App",
    github: "https://github.com/SubhodeepRoy17/hh25",
    demo: "https://hh25-olive.vercel.app/",
  },
  {
    id: 2,
    title: "Exam Scanner",
    description: "AI-Powered Exam Paper Scanner and Grader",
    image: project2,
    tags: ["React", "Javascript", "OCR", "Typescript"],
    category: "Web App",
    github: "https://github.com/SubhodeepRoy17/exam-scanner",
    demo: "https://exam-scanner.vercel.app/",
  },
  {
    id: 3,
    title: "Medicare Blockchain",
    description: "Decentralized Healthcare Records Management System",
    image: project3,
    tags: ["Ethereum", "Sepolia", "React", "Solidity"],
    category: "Blockchain",
    github: "https://github.com/SubhodeepRoy17/Medicare_blockchain",
    demo: "https://demo.com",
  },
];

const categories = ["All", "Web App", "Blockchain"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const titleAnimation = useScrollAnimation();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Create animation hooks for the maximum possible projects
  const projectAnimations = projects.map(() => useScrollAnimation());

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          ref={titleAnimation.ref}
          className={`text-center mb-16 animate-on-scroll ${
            titleAnimation.isVisible ? "visible" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "hero" : "glass"}
              onClick={() => setActiveCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              ref={projectAnimations[project.id - 1].ref} // Use project id to get the correct animation
              className={`glass overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer animate-on-scroll ${
                projectAnimations[project.id - 1].isVisible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* ... rest of your card content remains the same */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button variant="glass" size="sm">
                      <Github size={16} />
                      Code
                    </Button>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button variant="hero" size="sm">
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};