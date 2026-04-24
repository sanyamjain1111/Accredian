import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export function StatCard({ value, label, description, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-neutral-200 shadow-card hover:shadow-elevated transition-shadow duration-300",
        className
      )}
    >
      <span className="text-4xl md:text-5xl font-bold text-gradient mb-2">{value}</span>
      <span className="text-base font-semibold text-neutral-800 mb-1">{label}</span>
      {description && (
        <span className="text-sm text-neutral-500 leading-snug">{description}</span>
      )}
    </div>
  );
}
