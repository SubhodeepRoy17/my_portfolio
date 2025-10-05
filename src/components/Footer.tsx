import { Github, Linkedin, Mail, Heart, TwitterIcon } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="glass border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-muted-foreground">
              Building digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/SubhodeepRoy17"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-lg hover:bg-white/10 transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/subhodeep-roy-423a2a274/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-lg hover:bg-white/10 transition-all hover:scale-110"
              >
                <Linkedin size={20} />
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
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Made with <Heart className="text-primary" size={16} fill="currentColor" /> by
            Subhodeep Roy © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
