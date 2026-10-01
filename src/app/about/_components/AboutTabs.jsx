"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PhilosophyGrid from "./PhilosophyGrid";
import JourneyTimeline from "./JourneyTimeline";
import ApproachBlock from "./ApproachBlock";

const tabs = [
  { id: "philosophy", label: "Teaching Philosophy" },
  { id: "journey", label: "Career Journey" },
  { id: "approach", label: "My Approach" },
];

export default function AboutTabs() {
  return (
    <section className="editorialSection">
      <div className="editorialInner">
        <Tabs defaultValue="philosophy" className="w-full">
          <TabsList className="editorialTabs h-auto bg-transparent p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="editorialTab"
              >
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
