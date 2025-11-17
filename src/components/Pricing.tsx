import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

interface Plan {
  id: string;
  name: string;
  price: number;
  currency: string;
  features: string[];
  is_popular: boolean;
}

const Pricing = () => {
  const { t } = useLanguage();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      const { data, error } = await supabase
        .from('subscription_plans')
        .select('*')
        .order('price', { ascending: true });

      if (error) {
        console.error('Error fetching plans:', error);
      } else if (data) {
        const formattedPlans: Plan[] = data.map(plan => ({
          id: plan.id,
          name: plan.name,
          price: plan.price,
          currency: plan.currency,
          features: (plan.features as unknown as string[]) || [],
          is_popular: plan.is_popular
        }));
        setPlans(formattedPlans);
      }
      setLoading(false);
    };

    fetchPlans();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">{t('loading')}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t('pricingTitle')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('pricingSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative ${plan.is_popular ? 'border-primary shadow-lg scale-105' : ''}`}
            >
              {plan.is_popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {t('mostPopular')}
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price === 0 ? t('free') : `${plan.currency} ${plan.price.toLocaleString()}`}
                  </span>
                  {plan.price > 0 && <span className="text-muted-foreground">/{t('month')}</span>}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.is_popular ? "default" : "outline"}
                >
                  {plan.price === 0 ? t('getStarted') : t('subscribe')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
