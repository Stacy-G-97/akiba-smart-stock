import { useEffect, useState } from "react";
import { Wifi, WifiOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { t } = useLanguage();

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <Badge 
        variant={isOnline ? "secondary" : "destructive"}
        className="flex items-center gap-2 px-4 py-2 text-sm shadow-lg"
      >
        {isOnline ? (
          <>
            <Wifi className="w-4 h-4" />
            {t('common.online')}
          </>
        ) : (
          <>
            <WifiOff className="w-4 h-4" />
            {t('common.offline')}
          </>
        )}
      </Badge>
    </div>
  );
};

export default OfflineIndicator;
