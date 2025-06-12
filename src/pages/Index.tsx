
import { Header } from "@/components/Header";
import { ServerStatus } from "@/components/ServerStatus";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { SocialIcons } from "@/components/SocialIcons";
import { FeatureCard } from "@/components/FeatureCard";
import { StatsSection } from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { Pickaxe, Sword, Crown, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const copyServerIP = () => {
    navigator.clipboard.writeText("EvolutionMC.ititan.org");
    toast({
      title: "IP copiat!",
      description: "Adresa serverului a fost copiată în clipboard",
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <SocialIcons />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8 space-y-16">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-gaming-green glow-text animate-glow mb-4">
              EvolutionMC
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-8">
              Alătură-te comunității noastre româneşti de Minecraft Earth şi trăieşte aventura de supravieţuire supremă pe o hartă 1:1000 a Pământului
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gaming-green hover:bg-gaming-green-dark text-gaming-dark font-bold"
                onClick={copyServerIP}
              >
                Începe Aventura
              </Button>
            </div>
          </div>

          <div className="flex justify-center mb-16">
            <div className="w-full max-w-md">
              <ServerStatus />
            </div>
          </div>

          <StatsSection />

          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gaming-green minecraft-font mb-4">
                De Ce EvolutionMC?
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Descoperă ce ne face unici în comunitatea românească de Minecraft
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Pickaxe className="w-8 h-8" />}
                title="Survival Autentic"
                description="Experiență pură de supravieţuire fără modificări excesive"
              />
              <FeatureCard
                icon={<Sword className="w-8 h-8" />}
                title="PvP Epic"
                description="Bătălii intense şi evenimente PvP regulate"
              />
              <FeatureCard
                icon={<Crown className="w-8 h-8" />}
                title="Comunitate Activă"
                description="Jucători români pasionaţi şi staff dedicat"
              />
              <FeatureCard
                icon={<Users className="w-8 h-8" />}
                title="Evenimente Speciale"
                description="Competiţii, premii şi activităţi săptămânale"
              />
            </div>
          </section>

          <section className="py-16 text-center">
            <div className="glass-effect p-8 rounded-2xl border border-gaming-green/30">
              <h3 className="text-3xl font-bold text-gaming-green minecraft-font mb-4">
                Gata să Începi Aventura?
              </h3>
              <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
                Alătură-te miilor de jucători români care au ales EvolutionMC pentru experiența lor de Minecraft
              </p>
              <div className="bg-gaming-dark-light/50 p-6 rounded-lg border border-gaming-green/20 max-w-md mx-auto">
                <p className="text-sm text-slate-400 mb-2">Copiază adresa serverului</p>
                <code className="text-gaming-green font-mono text-xl font-bold">
                  EvolutionMC.ititan.org
                </code>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
