
import { Header } from "@/components/Header";
import { ServerStatus } from "@/components/ServerStatus";
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
              Alătură-te comunității noastre româneşti de Minecraft şi trăieşte aventura de supravieţuire supremă
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="w-full max-w-md">
              <ServerStatus />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
