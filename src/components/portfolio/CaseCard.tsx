import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Case } from "@/data/portfolio-data";

interface CaseCardProps {
  caseData: Case;
  onClick: () => void;
}

export function CaseCard({ caseData, onClick }: CaseCardProps) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer p-6 md:p-8 bg-card border border-border rounded-lg hover:border-foreground/20 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
            {caseData.company}
          </p>
          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
            {caseData.title}
          </h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {caseData.summary}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {caseData.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-normal">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
        {caseData.metrics.map((metric, index) => (
          <span key={index} className="text-sm font-medium text-foreground">
            {metric}
          </span>
        ))}
      </div>
    </article>
  );
}
