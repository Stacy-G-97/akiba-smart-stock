import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-4 left-4 z-50 flex items-center gap-2 bg-card/80 backdrop-blur shadow-lg hover:shadow-xl transition-all"
    >
      <Languages className="w-4 h-4" />
      <span className="font-semibold">{language === 'en' ? 'EN' : 'SW'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
