import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg mb-2">Let's work together</h3>
            <p className="text-muted-foreground">
              I'm always interested in new opportunities and collaborations
            </p>
          </div>
          
          <div className="flex items-center gap-6">
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
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Joseph Mari S. Cordero. Made with 
            <Heart className="h-4 w-4 text-red-500" /> 
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}