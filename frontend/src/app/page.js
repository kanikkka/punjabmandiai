import Navbar from "@/components/navbar/Navbar";

import HeroSection from "@/sections/hero/HeroSection";
import StatsSection from "@/sections/stats/StatsSection";
import FeaturesSection from "@/sections/features/FeaturesSection";
import DashboardPreview from "@/sections/ai-showcase/DashboardPreview";
import WeatherCard from "@/components/cards/WeatherCard";
import MandiPrices from "@/components/cards/MandiPrices";
import PredictionCard from "@/components/cards/PredictionCard";
import PriceChart from "@/components/charts/PriceChart";
import LiveActivity from "@/components/dashboard/LiveActivity";
import AIInsights from "@/components/dashboard/AIInsights";
import SmartAlerts from "@/components/dashboard/SmartAlerts";
import FloatingChatbot from "@/components/chatbot/FloatingChatbot";
import PunjabMap from "@/components/maps/PunjabMap";
import RealPrediction from "@/components/ai/RealPrediction";
import AIStatus from "@/components/dashboard/AIStatus";
import VoiceAssistant from "@/components/voice/VoiceAssistant";
import LanguageSwitcher from "@/components/language/LanguageSwitcher";
import LiveNotifications from "@/components/notifications/LiveNotifications";
import MarketTable from "@/components/market/MarketTable";
import AnalyticsChart from "@/components/charts/AnalyticsChart";
import AIPredictionCard from "@/components/ai/AIPredictionCard";
import NewsFeed from "@/components/news/NewsFeed";
import SatelliteFires from "@/components/satellite/SatelliteFires";
import TransportOptimizer from "@/components/transport/TransportOptimizer";
import FestivalPrediction from "@/components/festival/FestivalPrediction";
import MarketAnomaly from "@/components/anomaly/MarketAnomaly";
import ColdStorage from "@/components/storage/ColdStorage";
import NasaFireMonitor from "@/components/nasa/NasaFireMonitor";
import NasaFireMap from "@/components/maps/NasaFireMap";
import PriceForecastChart from "@/components/charts/PriceForecastChart";
import PredictionHistory from "@/components/history/PredictionHistory";
import RealMLPrediction from "@/components/ml/RealMLPrediction";
import AIChatbot from "@/components/chatbot/AIChatbot";
import FooterSection from "@/sections/footer/FooterSection";

export default function HomePage() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">
      <Navbar />
      <LiveNotifications />
       <LanguageSwitcher /> 
      <HeroSection />
      <RealMLPrediction />
      <div className="px-6 -mt-20 relative z-20">
  <div className="max-w-7xl mx-auto">
    <WeatherCard />
    <PriceForecastChart />
    <PredictionCard />
    <MarketTable />
    <AnalyticsChart />
    <AIPredictionCard />
    <SatelliteFires />
  <TransportOptimizer />
  <FestivalPrediction />
  <ColdStorage /> 
  <MarketAnomaly />
  <NasaFireMonitor />
  <NasaFireMap />
    <NewsFeed />
    
  </div>
</div>

      <StatsSection />

      <FeaturesSection />
      <DashboardPreview />
<MandiPrices />
<RealPrediction />
<PriceChart />
<PredictionHistory />
<AIChatbot />
<LiveActivity />
<AIInsights />
<SmartAlerts />
<AIStatus />
<FloatingChatbot />
<VoiceAssistant />
<PunjabMap />
      <FooterSection />
      
    </main>
  );
}