
import { MessageCircle, Music, Youtube } from "lucide-react";

export const SocialIcons = () => {
  const socialLinks = [
    {
      name: "Discord",
      icon: MessageCircle,
      href: "#discord",
      color: "hover:text-gaming-blue hover:bg-gaming-blue/20",
      bgColor: "bg-gaming-blue/10"
    },
    {
      name: "TikTok",
      icon: Music,
      href: "#tiktok",
      color: "hover:text-pink-400 hover:bg-pink-400/20",
      bgColor: "bg-pink-400/10"
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "#youtube",
      color: "hover:text-red-500 hover:bg-red-500/20",
      bgColor: "bg-red-500/10"
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            className={`
              p-3 rounded-full glass-effect border border-gaming-green/20 
              text-slate-300 transition-all duration-300 group
              ${social.color} ${social.bgColor}
              hover:scale-110 hover:shadow-lg
            `}
            title={social.name}
          >
            <IconComponent className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
};
