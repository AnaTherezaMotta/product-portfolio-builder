import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Case } from "@/data/portfolio-data";

interface CaseDetailProps {
  caseData: Case | null;
  open: boolean;
  onClose: () => void;
}

export function CaseDetail({ caseData, open, onClose }: CaseDetailProps) {
  if (!caseData) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                {caseData.company}
              </p>
              <DialogTitle className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                {caseData.title}
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="flex flex-wrap gap-2 mt-4">
          {caseData.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="space-y-8 mt-8">
          <div>
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-muted-foreground" />
              Contexto / Problema
            </h4>
            <p className="text-foreground leading-relaxed">{caseData.context}</p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-muted-foreground" />
              Ação
            </h4>
            <p className="text-foreground leading-relaxed">{caseData.action}</p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-muted-foreground" />
              Resultado
            </h4>
            <p className="text-foreground leading-relaxed">{caseData.result}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 pt-6 mt-6 border-t border-border">
          {caseData.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-xl font-display font-semibold text-foreground">
                {metric}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
