import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio-data";

export function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Recomendações
          </h2>
          <p className="text-muted-foreground">
            O que colegas e gestores dizem sobre trabalhar comigo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-6 bg-card border border-border rounded-lg"
            >
              <Quote className="h-8 w-8 text-muted-foreground/20 mb-4" />
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="pt-4 border-t border-border">
                <p className="font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
