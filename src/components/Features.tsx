import { Card, CardContent } from "@/components/ui/card";
import { Brain, CloudRain, WifiOff, CreditCard, TrendingUp, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Predictions",
      description: "Akili Bandia inakupa ushauri wa kile cha kuhifadhi kulingana na data ya siku nyingi",
      color: "text-primary"
    },
    {
      icon: CloudRain,
      title: "Weather Integration",
      description: "Ubashiri wa hali ya hewa unatumika kubaini mahitaji ya chakula",
      color: "text-secondary"
    },
    {
      icon: WifiOff,
      title: "Offline Mode",
      description: "Fanya kazi bila mtandao - data itahifadhiwa na kusync baadaye",
      color: "text-accent"
    },
    {
      icon: CreditCard,
      title: "Intasend Payments",
      description: "Lipa na M-Pesa, kadi, au akaunti ya benki kwa usalama",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Pata ripoti kamili za biashara yako na okoa pesa zaidi",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Data yako iko salama na system inafanya kazi kila wakati",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vipengele Vyetu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Teknolojia ya kisasa inayokusaidia kupunguza hasara na kuongeza faida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card 
              key={idx}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur"
            >
              <CardContent className="pt-8 pb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
