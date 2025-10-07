import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import Features from "@/components/Features";
import OfflineIndicator from "@/components/OfflineIndicator";

const Index = () => {
  return (
    <main className="min-h-screen">
      <OfflineIndicator />
      <Hero />
      <Features />
      <Dashboard />
    </main>
  );
};

export default Index;
