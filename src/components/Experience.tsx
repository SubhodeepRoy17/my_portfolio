import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description:
      "Leading development of scalable web applications, mentoring junior developers, and implementing best practices across the team.",
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Migrated legacy systems to modern React architecture",
      "Implemented CI/CD pipeline improving deployment efficiency",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects, focusing on responsive design and performance optimization.",
    achievements: [
      "Built 15+ responsive web applications",
      "Introduced TypeScript to improve code quality",
      "Collaborated with design team on UI/UX improvements",
    ],
  },
  {
    title: "Frontend Developer",
    company: "StartUp Hub",
    period: "2019 - 2020",
    description:
      "Created interactive user interfaces and implemented modern design systems for various startup projects.",
    achievements: [
      "Developed reusable component library",
      "Improved accessibility scores by 35%",
      "Implemented responsive designs for mobile-first approach",
    ],
  },
];

export const Experience = () => {
  const titleAnimation = useScrollAnimation();
  
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          ref={titleAnimation.ref}
          className={`text-center mb-16 animate-on-scroll ${
            titleAnimation.isVisible ? "visible" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const expAnimation = useScrollAnimation();
              
              return (
                <div
                  key={index}
                  ref={expAnimation.ref}
                  className={`relative flex flex-col md:flex-row gap-8 animate-on-scroll ${
                    expAnimation.isVisible ? "visible" : ""
                  } ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 md:translate-x-0 glow-primary" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <Card className="glass p-6 hover:bg-white/10 transition-all ml-16 md:ml-0">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="text-primary" size={24} />
                      <span className="text-sm text-secondary font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-primary font-semibold mb-4">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-secondary mt-1">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};
