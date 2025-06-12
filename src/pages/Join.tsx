
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Download, Users, Play } from "lucide-react";

const Join = () => {
  const steps = [
    {
      icon: Download,
      title: "Descarcă Minecraft",
      description: "Asigură-te că ai Minecraft Java Edition instalat pe computer.",
      color: "text-gaming-green"
    },
    {
      icon: Monitor,
      title: "Versiunea Corectă",
      description: "Serverul rulează pe versiunea Forge 1.20.1. Setează clientul pe această versiune.",
      color: "text-gaming-blue"
    },
    {
      icon: Users,
      title: "Adaugă Serverul",
      description: "În meniul Multiplayer, adaugă serverul cu IP-ul: EvolutionMC.ititan.org",
      color: "text-gaming-green"
    },
    {
      icon: Play,
      title: "Joacă!",
      description: "Conectează-te și începe aventura pe cel mai bun server românesc!",
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
              Cum să te alături
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Urmează acești pași simpli pentru a te conecta la EvolutionMC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="glass-effect border-gaming-green/20 hover:border-gaming-green/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-3 ${step.color}`}>
                      <div className="w-8 h-8 bg-gaming-green/20 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <IconComponent className="w-6 h-6" />
                      <span>{step.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="glass-effect border-gaming-green/20">
              <CardHeader>
                <CardTitle className="text-gaming-green text-xl">
                  Informații Server
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Adresa Server</p>
                  <code className="text-gaming-green font-mono text-lg bg-slate-800/80 px-3 py-2 rounded">
                    EvolutionMC.ititan.org
                  </code>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Versiune</p>
                  <span className="text-gaming-blue font-semibold">Forge 1.20.1</span>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Tip Server</p>
                  <span className="text-slate-300">Survival, PvP, Română, Cracked</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-gaming-blue/20">
              <CardHeader>
                <CardTitle className="text-gaming-blue text-xl">
                  Cerințe Sistem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-slate-300">
                  <p className="font-semibold text-gaming-green">Minecraft Java Edition</p>
                  <p className="text-sm text-slate-400">Versiunea Forge 1.20.1 sau compatibilă</p>
                </div>
                <div className="text-slate-300">
                  <p className="font-semibold text-gaming-blue">Conexiune Internet</p>
                  <p className="text-sm text-slate-400">Stabilă pentru cea mai bună experiență</p>
                </div>
                <div className="text-slate-300">
                  <p className="font-semibold text-gaming-green">Server Cracked</p>
                  <p className="text-sm text-slate-400">Nu necesită cont premium pentru a juca</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Join;
