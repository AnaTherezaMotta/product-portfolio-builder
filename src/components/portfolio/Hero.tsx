import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/portfolio-data";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-secondary/50 to-background">
      <div className="container-narrow text-center py-20">
        <div className="animate-fade-up">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            {profileData.title}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground mb-6 text-balance">
            {profileData.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            {profileData.tagline}
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <Button variant="outline" size="icon" asChild>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={`mailto:${profileData.email}`} aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {profileData.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                  {metric.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll para baixo"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
