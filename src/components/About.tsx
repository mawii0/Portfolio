import { Calendar, MapPin, Coffee, Code, Heart, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "2+ Years Experience (School and self-taught)",
      description: "Building web applications and implementing Artificial Intelligence"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "5+ Projects",
      description: "Successfully delivered for teachers and personal projects"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passionate About Code",
      description: "Always learning and exploring new technologies"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my journey, interests, and what drives me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl mb-6">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
              I’m a Computer Science student with a strong aspiration to become a full-stack developer, 
              while also exploring the exciting world of artificial intelligence and robotics. 
              I see technology not just as a tool, but as a way to create meaningful solutions 
              that can improve lives.
            </p>
            <p>
              I believe in the power of clean code, elegant design, and user-centered thinking. 
              To me, every line of code is an opportunity to build something reliable, scalable, 
              and impactful.
            </p>
            <p>
              Beyond academics and coding, I am a student athelete, balancing my time as a badminton varsity player
              at West Visayas State University. When I’m not training or studying, 
              I enjoy playing the guitar, experimenting with new tech ideas, and 
              savoring a good cup of coffee.
            </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Based in Iloilo, PH</span>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Calendar className="h-5 w-5" />
              <span>Available for new opportunities</span>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Coffee className="h-5 w-5" />
              <span>Fueled by coffee and curiosity</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {highlight.icon}
                </div>
                <CardTitle className="text-xl">{highlight.title}</CardTitle>
                <CardDescription>{highlight.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}