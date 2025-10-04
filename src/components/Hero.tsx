import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Hero = () => {
  const textAnimation = useScrollAnimation();
  const imageAnimation = useScrollAnimation();

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div
            ref={textAnimation.ref}
            className={`flex-1 text-center lg:text-left animate-on-scroll ${
              textAnimation.isVisible ? "visible" : ""
            }`}
          >
            <p className="text-secondary font-medium mb-4 text-lg">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">John Anderson</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-6">
              Full-Stack Developer & UI/UX Enthusiast
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Crafting beautiful, functional, and user-centered digital experiences.
              Specialized in React, TypeScript, and modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={scrollToProjects}
              >
                View My Work
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-lg hover:bg-white/10 transition-all hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-lg hover:bg-white/10 transition-all hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="glass p-3 rounded-lg hover:bg-white/10 transition-all hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            ref={imageAnimation.ref}
            className={`flex-1 flex justify-center lg:justify-end animate-scale-up ${
              imageAnimation.isVisible ? "visible" : ""
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 animate-pulse-glow" />
              <img
                src={heroPortrait}
                alt="John Anderson"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/10 glass shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={32} />
      </div>
    </section>
  );
};
