
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Zap, Shield, Sparkles } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  type: "update" | "event" | "maintenance" | "feature";
  icon: React.ComponentType<any>;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Server Update 1.20.4 - New Features!",
    date: "2025-01-10",
    content: "We've updated to Minecraft 1.20.4! Enjoy new blocks, mobs, and exciting gameplay features. Performance improvements and bug fixes included.",
    type: "update",
    icon: Zap,
  },
  {
    id: 2,
    title: "Weekly PvP Tournament - Saturday 8PM EST",
    date: "2025-01-08",
    content: "Join our weekly PvP tournament this Saturday! Prizes include rare items, custom enchantments, and bragging rights. Register in Discord!",
    type: "event",
    icon: Shield,
  },
  {
    id: 3,
    title: "New Custom Enchantments Added",
    date: "2025-01-05",
    content: "Discover powerful new custom enchantments! Lightning Strike, Auto-Smelt, and Telekinesis are now available. Check the enchanting table!",
    type: "feature",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Scheduled Maintenance - January 15th",
    date: "2025-01-03",
    content: "Server maintenance scheduled for January 15th, 3AM-5AM EST. We'll be optimizing performance and adding new spawn protection features.",
    type: "maintenance",
    icon: Calendar,
  },
];

const getTypeColor = (type: NewsItem["type"]) => {
  switch (type) {
    case "update":
      return "bg-gaming-green text-gaming-dark";
    case "event":
      return "bg-gaming-blue text-white";
    case "feature":
      return "bg-purple-500 text-white";
    case "maintenance":
      return "bg-orange-500 text-white";
    default:
      return "bg-slate-500 text-white";
  }
};

export const NewsSection = () => {
  return (
    <Card className="glass-effect border-gaming-green/20">
      <CardHeader>
        <CardTitle className="text-2xl text-gaming-green flex items-center space-x-2">
          <Calendar className="w-6 h-6" />
          <span>Latest News & Updates</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="p-4 rounded-lg border border-slate-700 hover:border-gaming-green/50 transition-all duration-300 bg-gaming-dark-light/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <IconComponent className="w-5 h-5 text-gaming-green" />
                    <Badge className={getTypeColor(item.type)}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </Badge>
                  </div>
                  <span className="text-sm text-slate-400">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-200 mb-2 minecraft-font">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
