import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-foreground text-primary-foreground">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
          Vamos Conversar?
        </h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
          Estou sempre aberto a discutir novas oportunidades, trocar ideias sobre produto ou simplesmente fazer networking.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            asChild
          >
            <a href={`mailto:${profileData.email}`}>
              <Mail className="h-4 w-4 mr-2" />
              Enviar Email
              <ArrowUpRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
