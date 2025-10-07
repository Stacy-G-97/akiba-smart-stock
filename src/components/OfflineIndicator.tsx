import { useEffect, useState } from "react";
import { Wifi, WifiOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

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
            Online
          </>
        ) : (
          <>
            <WifiOff className="w-4 h-4" />
            Offline Mode
          </>
        )}
      </Badge>
    </div>
  );
};

export default OfflineIndicator;
