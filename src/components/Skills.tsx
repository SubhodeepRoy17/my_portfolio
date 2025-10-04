import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 85 },
      { name: "Figma", level: 88 },
    ],
  },
];

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const titleAnimation = useScrollAnimation();

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          ref={titleAnimation.ref}
          className={`text-center mb-16 animate-on-scroll ${
            titleAnimation.isVisible ? "visible" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const cardAnimation = useScrollAnimation();
            
            useEffect(() => {
              if (cardAnimation.isVisible) {
                // Trigger skill bar animations when card becomes visible
                setTimeout(() => {
                  category.skills.forEach((skill) => {
                    setAnimatedSkills((prev) => new Set(prev).add(skill.name));
                  });
                }, catIndex * 200);
              }
            }, [cardAnimation.isVisible]);
            
            return (
              <Card
                key={category.category}
                ref={cardAnimation.ref}
                className={`glass p-6 hover:bg-white/10 transition-all animate-on-scroll ${
                  cardAnimation.isVisible ? "visible" : ""
                }`}
                style={{ transitionDelay: `${catIndex * 100}ms` }}
              >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="gradient-text">{category.category}</span>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {category.skills.length}
                </Badge>
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span
                        className={`text-sm transition-all ${
                          hoveredSkill === skill.name
                            ? "text-primary font-bold scale-110"
                            : "text-muted-foreground"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Skill bar */}
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out relative"
                        style={{
                          width: animatedSkills.has(skill.name) ? `${skill.level}%` : "0%",
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse-glow" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
        </div>
      </div>
    </section>
  );
};
