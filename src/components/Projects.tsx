import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Farmageddon",
      description: "A game where the farmer has to battle with an AI searching algorithm. Prove that you are stronger and smarter than computers with this game. ",
      image: "/images/Farmageddon.png?v=1",
      technologies: ["Python", "TKinter", "Pixilart", "Artificial Intelligence", "Machine Learning"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "LiveStock",
      description: "LiveStock uses computer vision, aided with an IOT device to accurately predict the livestock's weight",
      image: "/images/LiveStock.png?v=1",
      technologies: ["Flutter", "Dart", "Internet of Things", "AI/ML", "Mobile Application"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "WVSolutions",
      description: "A multi-purpose business solutions platform providing school-related products, along with customized requests as services for fellow Taga-West people.",
      image: "/images/WVSolutions.png?v=1",
      technologies: ["HTML", "CSS", "PHP", "SqLite"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden h-full flex flex-col">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}