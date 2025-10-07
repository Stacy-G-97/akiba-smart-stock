import { Card, CardContent } from "@/components/ui/card";
import { Brain, CloudRain, WifiOff, CreditCard, TrendingUp, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Brain,
      titleKey: "features.ai.title",
      descKey: "features.ai.desc",
      color: "text-primary"
    },
    {
      icon: CloudRain,
      titleKey: "features.weather.title",
      descKey: "features.weather.desc",
      color: "text-secondary"
    },
    {
      icon: WifiOff,
      titleKey: "features.offline.title",
      descKey: "features.offline.desc",
      color: "text-accent"
    },
    {
      icon: CreditCard,
      titleKey: "features.payment.title",
      descKey: "features.payment.desc",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      titleKey: "features.analytics.title",
      descKey: "features.analytics.desc",
      color: "text-secondary"
    },
    {
      icon: Shield,
      titleKey: "features.secure.title",
      descKey: "features.secure.desc",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
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
                <h3 className="text-xl font-semibold mb-3">{t(feature.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(feature.descKey)}
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
