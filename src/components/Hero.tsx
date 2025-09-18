import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Hi, I am <span className="text-primary">Mawii_____</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6">
            Aspiring Full Stack Developer & Software Engineer?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I create minimalist style applications that combine 
            Artificial Intelligence with love and passion for my work. Mwa.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="h-12 px-8"
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('about')}
            className="h-12 px-8"
          >
            About Me
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 mb-12">
          <a 
            href="https://github.com/mawii0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/joseph-cordero-291a70320/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://mail.google.com/mail/u/0/#inbox"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <button 
          onClick={() => scrollToSection('skills')}
          className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown className="h-6 w-6 mx-auto" />
        </button>
      </div>
    </section>
  );
}