import PricingComponent from "@/components/Pricing";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import OfflineIndicator from "@/components/OfflineIndicator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      <LanguageSwitcher />
      <OfflineIndicator />
      
      <div className="container mx-auto px-4 pt-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>
      
      <PricingComponent />
    </main>
  );
};

export default Pricing;
