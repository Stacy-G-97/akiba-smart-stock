import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Cloud, Droplets, Wind, Package, AlertCircle } from "lucide-react";

const Dashboard = () => {
  const predictions = [
    { name: "Nyama Choma", demand: "high", change: "+15%", stock: "low", icon: TrendingUp },
    { name: "Ugali", demand: "medium", change: "+5%", stock: "good", icon: Package },
    { name: "Sukuma Wiki", demand: "high", change: "+20%", stock: "medium", icon: TrendingUp },
    { name: "Pilau", demand: "low", change: "-10%", stock: "high", icon: TrendingDown },
  ];

  const weatherData = {
    temp: "28°C",
    condition: "Partly Cloudy",
    humidity: "65%",
    wind: "12 km/h",
    impact: "Higher demand for cold drinks and light meals expected"
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Dashboard
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-time predictions for your restaurant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Today's Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">KES 12,450</p>
              <p className="text-sm text-muted-foreground mt-1">+12% from yesterday</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Waste Reduced</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-secondary">68%</p>
              <p className="text-sm text-muted-foreground mt-1">This month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Food Items</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">24</p>
              <p className="text-sm text-muted-foreground mt-1">Active inventory</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-accent">KES 45K</p>
              <p className="text-sm text-muted-foreground mt-1">Last 30 days</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Weather Widget */}
          <Card className="lg:col-span-1 hover:shadow-lg transition-all border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-primary" />
                Weather Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center py-4">
                <p className="text-5xl font-bold text-foreground">{weatherData.temp}</p>
                <p className="text-muted-foreground mt-2">{weatherData.condition}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Humidity</p>
                    <p className="font-semibold">{weatherData.humidity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Wind</p>
                    <p className="font-semibold">{weatherData.wind}</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
                <p className="text-sm text-foreground">{weatherData.impact}</p>
              </div>
            </CardContent>
          </Card>

          {/* AI Predictions */}
          <Card className="lg:col-span-2 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle>AI Food Predictions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictions.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.demand === "high" ? "bg-primary/10" : 
                        item.demand === "medium" ? "bg-secondary/10" : "bg-muted"
                      }`}>
                        <item.icon className={`w-5 h-5 ${
                          item.demand === "high" ? "text-primary" : 
                          item.demand === "medium" ? "text-secondary" : "text-muted-foreground"
                        }`} />
                      </div>
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Demand: <span className="capitalize">{item.demand}</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Badge variant={item.stock === "low" ? "destructive" : "secondary"}>
                        Stock: {item.stock}
                      </Badge>
                      <span className={`font-semibold ${
                        item.change.startsWith("+") ? "text-primary" : "text-destructive"
                      }`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">AI Recommendation</p>
                  <p className="text-sm text-muted-foreground">
                    Increase Sukuma Wiki stock by 30% tomorrow. Weather forecast shows rainy conditions, 
                    typically increasing demand for warm meals.
                  </p>
                </div>
              </div>

              <Button className="w-full mt-4 bg-gradient-to-r from-primary to-primary/90">
                Update Inventory
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
