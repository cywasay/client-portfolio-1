"use client";

import { useState } from 'react';
import PhilosophyGrid from './PhilosophyGrid';
import JourneyTimeline from './JourneyTimeline';
import ApproachBlock from './ApproachBlock';

const tabs = [
  { id: 'philosophy', label: 'Teaching Philosophy', icon: '💭' },
  { id: 'journey', label: 'Career Journey', icon: '🛣️' },
  { id: 'approach', label: 'My Approach', icon: '🎯' }
];

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState('philosophy');

  const renderContent = () => {
    if (activeTab === 'journey') return <JourneyTimeline />;
    if (activeTab === 'approach') return <ApproachBlock />;
    return <PhilosophyGrid />;
  };

  return (
    <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-2xl scale-105'
                  : 'bg-white text-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="transition-all duration-500">{renderContent()}</div>
      </div>
    </section>
  );
}

