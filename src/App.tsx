import React from 'react';
import { Sparkles, PlayCircle, ShoppingBag } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid"></div>
      <div className="absolute inset-0 light-rays"></div>
      
      {/* SVG Filter for Grain Effect */}
      <svg className="hidden">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend mode="multiply" />
        </filter>
      </svg>

      {/* Gradient Circle */}
      <div className="absolute top-1/2 right-[-200px] w-[600px] h-[600px] rounded-full gradient-circle opacity-40"></div>
      <div className="absolute top-1/2 right-[-200px] w-[600px] h-[600px] rounded-full glass-effect"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Top Badge */}
        <div className="glass-effect inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/80 mb-12">
          <Sparkles size={16} className="text-purple-400" />
          Built with love for you 💙
        </div>

        {/* Main Content */}
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="underline-effect bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              Elevate
            </span>
            {' '}your success
          </h1>
          
          <h2 className="text-5xl font-bold text-white/90 mb-8">
            it's more than just a simple tool
          </h2>

          <p className="text-xl text-white/70 mb-12">
            Create and manage your online store at minimal cost. Take advantage of a powerful,
            affordable solution to turn your ideas into success while keeping your expenses under control.
          </p>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              <PlayCircle size={20} />
              Watch Demo
            </button>
            <button className="flex items-center gap-2 glass-effect text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
              <ShoppingBag size={20} />
              Create Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;