
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, Users, Zap } from "lucide-react";

const Rules = () => {
  const rules = [
    {
      icon: Shield,
      title: "Respectul Mutual",
      description: "Tratează toți jucătorii cu respect. Nu sunt tolerate insulte, hărțuirea sau discriminarea.",
      color: "text-gaming-green"
    },
    {
      icon: AlertTriangle,
      title: "Fără Griefing",
      description: "Nu distruge, nu fura și nu modifica construcțiile altor jucători fără permisiune.",
      color: "text-gaming-blue"
    },
    {
      icon: Users,
      title: "Limbaj Adecvat",
      description: "Păstrează o atmosferă prietenoasă. Evită limbajul ofensator și spam-ul în chat.",
      color: "text-gaming-green"
    },
    {
      icon: Zap,
      title: "Fără Hack-uri",
      description: "Orice forme de cheat-uri, hack-uri sau mod-uri neautorizate sunt strict interzise.",
      color: "text-gaming-blue"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gaming-green glow-text mb-4">
              Regulile Serverului
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Pentru a menține o experiență plăcută pentru toți jucătorii
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {rules.map((rule, index) => {
              const IconComponent = rule.icon;
              return (
                <Card key={index} className="glass-effect border-gaming-green/20 hover:border-gaming-green/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-3 ${rule.color}`}>
                      <IconComponent className="w-6 h-6" />
                      <span>{rule.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{rule.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="glass-effect border-gaming-blue/20">
            <CardHeader>
              <CardTitle className="text-gaming-blue text-2xl text-center">
                Sancțiuni
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-slate-300">
                <h3 className="text-gaming-green font-semibold mb-2">Avertisment</h3>
                <p className="text-sm">Prima încălcare a regulilor va rezulta într-un avertisment.</p>
              </div>
              <div className="text-slate-300">
                <h3 className="text-gaming-blue font-semibold mb-2">Mute Temporar</h3>
                <p className="text-sm">Limbaj inadecvat sau spam vor rezulta în restricționarea chat-ului.</p>
              </div>
              <div className="text-slate-300">
                <h3 className="text-gaming-green font-semibold mb-2">Ban Temporar</h3>
                <p className="text-sm">Încălcări repetate sau grave vor rezulta în suspendarea temporară.</p>
              </div>
              <div className="text-slate-300">
                <h3 className="text-red-400 font-semibold mb-2">Ban Permanent</h3>
                <p className="text-sm">Hack-uri, griefing masiv sau comportament extrem de toxic.</p>
              </div>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Rules;
