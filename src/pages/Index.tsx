
import { Header } from "@/components/Header";
import { ServerStatus } from "@/components/ServerStatus";
import { PlayerList } from "@/components/PlayerList";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8 space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-gaming-green glow-text animate-glow mb-4">
              EvolutionMC
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
              Join our amazing Minecraft community and experience the ultimate survival adventure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <ServerStatus />
            <PlayerList />
          </div>

          <NewsSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
