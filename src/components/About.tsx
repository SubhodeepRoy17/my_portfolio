import { Code, Palette, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Palette,
    title: "Design First",
    description: "Creating beautiful interfaces with attention to detail",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency in every project",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams and communicating clearly",
  },
];

export const About = () => {
  const titleAnimation = useScrollAnimation();
  const textAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          ref={titleAnimation.ref}
          className={`text-center mb-16 animate-on-scroll ${
            titleAnimation.isVisible ? "visible" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div
            ref={textAnimation.ref}
            className={`animate-slide-in-left ${
              textAnimation.isVisible ? "visible" : ""
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              With over 5 years of experience in web development, I've had the privilege
              of working with startups and established companies to bring their digital
              visions to life.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I specialize in building modern, responsive web applications using cutting-edge
              technologies. My approach combines technical expertise with a keen eye for
              design, ensuring that every project is both functional and beautiful.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div
            ref={cardsAnimation.ref}
            className={`grid grid-cols-2 gap-4 animate-slide-in-right ${
              cardsAnimation.isVisible ? "visible" : ""
            }`}
          >
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glass p-6 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer"
              >
                <item.icon className="text-primary mb-4" size={32} />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
