import { useState } from "react";
import { cases } from "@/data/portfolio-data";
import { CaseCard } from "./CaseCard";
import { CaseDetail } from "./CaseDetail";
import type { Case } from "@/data/portfolio-data";

export function Cases() {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  return (
    <section id="cases" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Cases
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projetos selecionados apresentados na metodologia CAR: Contexto, Ação e Resultado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseItem) => (
            <CaseCard
              key={caseItem.id}
              caseData={caseItem}
              onClick={() => setSelectedCase(caseItem)}
            />
          ))}
        </div>

        <CaseDetail
          caseData={selectedCase}
          open={!!selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      </div>
    </section>
  );
}
