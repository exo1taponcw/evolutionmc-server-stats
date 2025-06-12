
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass-effect p-6 rounded-xl border border-gaming-green/30 hover:border-gaming-green/50 transition-all duration-300 group hover:scale-105">
      <div className="text-gaming-green mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gaming-green minecraft-font mb-3">
        {title}
      </h3>
      <p className="text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
