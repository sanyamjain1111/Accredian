import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DomainCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  className?: string;
}

export function DomainCard({ icon: Icon, title, description, className }: DomainCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white border border-neutral-200 shadow-card hover:border-primary-300 hover:shadow-elevated transition-all duration-300 cursor-default",
        className
      )}
    >
      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
      </div>
      <span className="font-semibold text-neutral-800">{title}</span>
      {description && (
        <span className="text-sm text-neutral-500 leading-snug">{description}</span>
      )}
    </div>
  );
}
