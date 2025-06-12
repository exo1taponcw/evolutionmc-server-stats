
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Discord", href: "#", color: "hover:text-[#5865F2]" },
    { name: "Reddit", href: "#", color: "hover:text-[#FF4500]" },
    { name: "Twitter", href: "#", color: "hover:text-[#1DA1F2]" },
    { name: "YouTube", href: "#", color: "hover:text-[#FF0000]" },
  ];

  const quickLinks = [
    { name: "Server Rules", href: "#rules" },
    { name: "How to Join", href: "#join" },
    { name: "Donations", href: "#donate" },
    { name: "Staff Team", href: "#staff" },
  ];

  return (
    <footer className="glass-effect border-t border-gaming-green/20 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gaming-green rounded-lg flex items-center justify-center">
                <span className="text-gaming-dark font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-gaming-green minecraft-font">
                EvolutionMC
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The ultimate Minecraft survival experience. Join our community and evolve your gameplay!
            </p>
          </div>

          <div>
            <h3 className="text-gaming-green font-semibold mb-4 minecraft-font">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-gaming-green transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gaming-green font-semibold mb-4 minecraft-font">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-slate-400 transition-colors duration-300 text-sm ${link.color}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-4 p-3 bg-gaming-dark-light/50 rounded-lg border border-gaming-green/20">
              <p className="text-xs text-slate-400 mb-1">Server IP</p>
              <code className="text-gaming-green font-mono text-sm">
                EvolutionMC.ititan.org
              </code>
            </div>
          </div>
        </div>

        <div className="border-t border-gaming-green/20 mt-8 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} EvolutionMC. All rights reserved. | Not affiliated with Mojang AB.
          </p>
        </div>
      </div>
    </footer>
  );
};
