import {
  Brain,
  CloudRain,
  Satellite,
  LineChart,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold">
          Powerful AI Features
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Advanced artificial intelligence tools built specially
          for Punjab farmers and agricultural forecasting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
            <Brain className="text-green-400 w-12 h-12 mx-auto mb-5" />
            <h3 className="text-2xl font-semibold">
              AI Predictions
            </h3>
            <p className="text-gray-400 mt-4">
              Predict mandi prices using deep learning models.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
            <CloudRain className="text-green-400 w-12 h-12 mx-auto mb-5" />
            <h3 className="text-2xl font-semibold">
              Weather Tracking
            </h3>
            <p className="text-gray-400 mt-4">
              Real-time weather analytics for better decisions.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
            <Satellite className="text-green-400 w-12 h-12 mx-auto mb-5" />
            <h3 className="text-2xl font-semibold">
              Satellite Data
            </h3>
            <p className="text-gray-400 mt-4">
              NASA FIRMS satellite monitoring integration.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
            <LineChart className="text-green-400 w-12 h-12 mx-auto mb-5" />
            <h3 className="text-2xl font-semibold">
              Live Analytics
            </h3>
            <p className="text-gray-400 mt-4">
              Interactive dashboards and live mandi insights.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}