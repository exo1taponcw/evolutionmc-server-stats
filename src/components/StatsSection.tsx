
import { Heart } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: Heart,
      value: "99%",
      label: "Uptime Server",
      color: "text-red-400"
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gaming-green minecraft-font mb-4">
          Statistici Server
        </h2>
        <p className="text-lg text-slate-400">
          Cifrele care demonstrează calitatea experienței noastre
        </p>
      </div>

      <div className="flex justify-center">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div 
              key={index}
              className="glass-effect p-6 rounded-xl border border-gaming-green/30 text-center hover:border-gaming-green/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`${stat.color} mb-4 flex justify-center`}>
                <IconComponent className="w-8 h-8" />
              </div>
              <div className={`text-3xl font-bold ${stat.color} minecraft-font mb-2`}>
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
