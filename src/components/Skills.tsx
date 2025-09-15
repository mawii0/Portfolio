import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      skills: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
      skills: ["Python", "PostgreSQL", "MongoDB", "Express", "Django"]
    },
    {
      title: "Mobile Development",
      description: "Deploying and managing applications with little, tiny screens.",
      skills: ["Flutter", "Wala na"]
    },
    {
      title: "Artificial Intelligence",
      description: "Implementation of AI and Robotics to my work.",
      skills: ["Machine Learning", "Artificial Neural Networks"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-6">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I work with a diverse set of technologies and tools to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}