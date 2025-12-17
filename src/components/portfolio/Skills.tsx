import { skills } from "@/data/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Skills & Ferramentas
          </h2>
          <p className="text-muted-foreground">
            Competências técnicas e ferramentas que utilizo no dia a dia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li
                    key={item}
                    className="text-foreground text-sm py-2 border-b border-border last:border-0"
                  >
                    {item}
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
