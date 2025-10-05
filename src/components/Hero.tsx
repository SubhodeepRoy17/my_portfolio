import { ArrowDown, Github, Linkedin, Mail, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

export const Hero = () => {
  const textAnimation = useScrollAnimation();
  const imageAnimation = useScrollAnimation();
  const [helloText, setHelloText] = useState("");
  const [nameText, setNameText] = useState("");
  const [helloComplete, setHelloComplete] = useState(false);
  const [nameComplete, setNameComplete] = useState(false);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Typing animation for "Hello, I'm" - character by character
    let helloIndex = 0;
    const hello = "Hello, I'm";
    const helloInterval = setInterval(() => {
      if (helloIndex <= hello.length) {
        setHelloText(hello.substring(0, helloIndex));
        helloIndex++;
      } else {
        clearInterval(helloInterval);
        setHelloComplete(true);
        
        // Start typing name after "Hello, I'm" completes
        setTimeout(() => {
          let nameIndex = 0;
          const name = "Subhodeep Roy";
          const nameInterval = setInterval(() => {
            if (nameIndex <= name.length) {
              setNameText(name.substring(0, nameIndex));
              nameIndex++;
            } else {
              clearInterval(nameInterval);
              setNameComplete(true);
            }
          }, 150); // Slower typing speed for name
        }, 500); // Delay before starting name
      }
    }, 100); // Typing speed for "Hello, I'm"

    return () => {
      clearInterval(helloInterval);
    };
  }, []);

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
            <p className="text-secondary font-medium mb-4 text-lg min-h-[1.5rem]">
              {helloText}
              {!helloComplete && (
                <span className="ml-0.5 w-1 h-5 bg-secondary animate-pulse inline-block"></span>
              )}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight min-h-[4rem] md:min-h-[6rem]">
              <span className="gradient-text">
                {nameText}
                {helloComplete && !nameComplete && (
                  <span className="ml-0.5 w-2 h-12 bg-gradient-to-r from-primary to-secondary animate-pulse inline-block"></span>
                )}
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-6">
              Full-Stack Developer & Blockchain Enthusiast
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
              <Button variant="glass" size="lg" onClick={scrollToContact}>
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/SubhodeepRoy17"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-lg hover:bg-white/10 transition-all hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/subhodeep-roy-423a2a274/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-lg hover:bg-white/10 transition-all hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/R93195Roy"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-lg hover:bg-white/10 transition-all hover:scale-110"
              >
                <TwitterIcon size={24} />
              </a>
              <a
                href="mailto:subhodeeproy37@gmail.com"
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
                alt="Subhodeep Roy"
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