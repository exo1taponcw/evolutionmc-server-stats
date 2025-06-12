
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Crown, Zap, ExternalLink } from "lucide-react";

const Donate = () => {
  const packages = [
    {
      name: "Supporter",
      price: "25 RON",
      icon: Heart,
      color: "text-gaming-green",
      borderColor: "border-gaming-green/30",
      benefits: [
        "Prefix special [Supporter]",
        "Acces la /kit supporter",
        "2 home-uri suplimentare",
        "Chat colorat"
      ]
    },
    {
      name: "VIP",
      price: "50 RON",
      icon: Star,
      color: "text-gaming-blue",
      borderColor: "border-gaming-blue/30",
      benefits: [
        "Prefix special [VIP]",
        "Acces la /kit vip",
        "5 home-uri suplimentare",
        "Fly în spawn",
        "Acces la /workbench"
      ]
    },
    {
      name: "Premium",
      price: "100 RON",
      icon: Crown,
      color: "text-yellow-400",
      borderColor: "border-yellow-400/30",
      benefits: [
        "Prefix special [Premium]",
        "Acces la /kit premium",
        "10 home-uri suplimentare",
        "Fly pe tot serverul",
        "Acces la /enderchest"
      ]
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
              Susține Serverul
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ajută-ne să menținem cel mai bun server românesc de Minecraft
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <Card key={index} className={`glass-effect ${pkg.borderColor} hover:border-opacity-60 transition-all duration-300`}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 ${pkg.color.replace('text-', 'bg-')}/20 rounded-full flex items-center justify-center`}>
                        <IconComponent className={`w-8 h-8 ${pkg.color}`} />
                      </div>
                    </div>
                    <CardTitle className={`text-2xl ${pkg.color}`}>
                      {pkg.name}
                    </CardTitle>
                    <div className="text-3xl font-bold text-gaming-green">
                      {pkg.price}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {pkg.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-gaming-green" />
                        <span className="text-slate-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                    <Button 
                      className="w-full mt-6 bg-gaming-green hover:bg-gaming-green-dark text-gaming-dark font-semibold"
                      onClick={() => window.open('https://evolutionmc.tebex.io', '_blank')}
                    >
                      Cumpără Acum
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="glass-effect border-gaming-blue/20 mb-8">
            <CardHeader>
              <CardTitle className="text-gaming-blue text-2xl text-center">
                De ce să donezi?
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-slate-300">
                <h3 className="text-gaming-green font-semibold mb-2">Susținere Server</h3>
                <p className="text-sm">Donațiile ajută la plata hosting-ului și îmbunătățirea performanței serverului.</p>
              </div>
              <div className="text-slate-300">
                <h3 className="text-gaming-blue font-semibold mb-2">Dezvoltare Continuă</h3>
                <p className="text-sm">Fondurile sunt folosite pentru noi feature-uri și actualizări regulare.</p>
              </div>
              <div className="text-slate-300">
                <h3 className="text-gaming-green font-semibold mb-2">Comunitate Activă</h3>
                <p className="text-sm">Susții dezvoltarea unei comunități românești puternice în Minecraft.</p>
              </div>
              <div className="text-slate-300">
                <h3 className="text-gaming-blue font-semibold mb-2">Beneficii Exclusive</h3>
                <p className="text-sm">Primești acces la conținut special și privilegii pe server.</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gaming-green hover:bg-gaming-green-dark text-gaming-dark font-bold text-lg px-8 py-4"
              onClick={() => window.open('https://evolutionmc.tebex.io', '_blank')}
            >
              Vizitează Magazinul Nostru
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-slate-400 text-sm mt-4">
              Toate tranzacțiile sunt procesate securizat prin Tebex
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Donate;
