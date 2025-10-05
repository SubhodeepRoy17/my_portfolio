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
            <p>I'm a passionate BTech IT student at Heritage Institute of Technology with a strong focus on full-stack development. With a current YGPA of 9.73, I combine academic excellence with practical skills in modern web technologies.</p>
            <br />  
            <p>I have worked as an SDE Intern at Bluestock Fintech, building scalable financial technology solutions. My experience also includes AI training at Outlier AI and a Gen AI internship at AI Wallah, where I worked on cutting-edge artificial intelligence applications and language models.</p>
            <br />
            <p>Through hackathons and collaborative projects, I've developed healthcare platforms, multilingual chatbots, and innovative software solutions. I thrive in environments that challenge me to create user-centric applications while continuously learning emerging technologies.</p>
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
