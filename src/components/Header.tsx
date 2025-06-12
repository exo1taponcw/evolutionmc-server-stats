
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Rules", href: "#rules" },
    { name: "Discord", href: "#discord" },
    { name: "Forum", href: "#forum" },
  ];

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-gaming-green/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gaming-green rounded-lg flex items-center justify-center">
              <span className="text-gaming-dark font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-gaming-green minecraft-font">
              EvolutionMC
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-gaming-green transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-slate-300 hover:text-gaming-green transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gaming-green/20">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-gaming-green transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
