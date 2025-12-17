import { experiences } from "@/data/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Experiência
          </h2>
          <p className="text-muted-foreground">
            Trajetória profissional em gestão de produtos.
          </p>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-12 last:pb-0 border-l border-border"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground" />

              <div className="mb-2">
                <span className="text-xs text-muted-foreground">{exp.period}</span>
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                {exp.role}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
              <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
