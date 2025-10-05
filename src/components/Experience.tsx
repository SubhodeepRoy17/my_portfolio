import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Software Developer Engineer Intern",
    company: "Bluestock Fintech Pvt. Ltd.",
    period: "July 2025 - August 2025",
    description:
      "Worked on enhancing the company's main product by implementing new features and optimizing existing codebase using React and TypeScript.",
    achievements: [
      "Developed 3 major features increasing user engagement by 20%",
      "Optimized application performance reducing load times by 30%",
      "Collaborated with cross-functional teams to deliver high-quality software",
    ],
  },
  {
    title: "Generative AI Intern",
    company: "AI Wallah",
    period: "July 2025 - August 2025",
    description:
      "Contributed to the development of AI-driven applications, focusing on natural language processing and machine learning models.",
    achievements: [
      "Built a chatbot using GPT-3, improving customer support efficiency",
      "Built a personalized weather app and a chatbot using React and OpenAI API",
      "Implemented data preprocessing techniques to enhance model accuracy",
    ],
  },
  {
    title: "AI Trainer",
    company: "Outlier AI",
    period: "November 2024 - January 2025",
    description:
      "Trained and fine-tuned AI models for various applications, ensuring high-quality outputs and performance.",
    achievements: [
      "Trained multiple AI models leading to a 15% increase in accuracy",
      "Collaborated with data scientists to refine training datasets",
      "Conducted performance evaluations and implemented improvements",
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
