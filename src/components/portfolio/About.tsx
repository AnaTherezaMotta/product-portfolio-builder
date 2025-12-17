import { profileData } from "@/data/portfolio-data";

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
              Sobre Mim
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {profileData.bio}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                <span className="text-sm text-muted-foreground">
                  Foco em métricas e resultados mensuráveis
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                <span className="text-sm text-muted-foreground">
                  Experiência em empresas de diferentes estágios
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                <span className="text-sm text-muted-foreground">
                  Abordagem centrada no usuário
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Sua foto aqui</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-foreground/10 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
