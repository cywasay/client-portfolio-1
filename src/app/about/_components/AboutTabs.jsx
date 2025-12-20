"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PhilosophyGrid from "./PhilosophyGrid";
import JourneyTimeline from "./JourneyTimeline";
import ApproachBlock from "./ApproachBlock";

const tabs = [
  { id: "philosophy", label: "Teaching Philosophy", icon: "💭" },
  { id: "journey", label: "Career Journey", icon: "🛣️" },
  { id: "approach", label: "My Approach", icon: "🎯" },
];

export default function AboutTabs() {
  return (
    <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="philosophy" className="w-full">
          <TabsList className="bg-transparent h-auto flex flex-wrap gap-4 justify-center mb-12 p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex-none flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 bg-white text-gray-700 shadow-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:scale-105 hover:shadow-xl hover:-translate-y-1 h-auto border-none"
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="transition-all duration-500">
            <TabsContent value="philosophy">
              <PhilosophyGrid />
            </TabsContent>
            <TabsContent value="journey">
              <JourneyTimeline />
            </TabsContent>
            <TabsContent value="approach">
              <ApproachBlock />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
