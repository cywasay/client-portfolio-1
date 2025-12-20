"use client";

import { useMemo, useState } from "react";
import AchievementCard from "./AchievementCard";
import AchievementModal from "./AchievementModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AchievementsClient({ achievements }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selected, setSelected] = useState(null);

  const categories = useMemo(() => {
    const counts = (id) => achievements.filter((a) => a.category === id).length;
    return [
      {
        id: "all",
        label: "All Achievements",
        icon: "🌟",
        count: achievements.length,
      },
      {
        id: "teaching",
        label: "Teaching Excellence",
        icon: "👨‍🏫",
        count: counts("teaching"),
      },
      {
        id: "innovation",
        label: "Innovation",
        icon: "💡",
        count: counts("innovation"),
      },
      {
        id: "leadership",
        label: "Leadership",
        icon: "🌟",
        count: counts("leadership"),
      },
      {
        id: "research",
        label: "Research",
        icon: "🔬",
        count: counts("research"),
      },
      {
        id: "technology",
        label: "Technology",
        icon: "🚀",
        count: counts("technology"),
      },
      {
        id: "community",
        label: "Community",
        icon: "🤝",
        count: counts("community"),
      },
    ];
  }, [achievements]);

  const filtered =
    activeCategory === "all"
      ? achievements
      : achievements.filter((a) => a.category === activeCategory);

  return (
    <>
      <section className="py-12 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <div className="flex justify-center">
              <TabsList className="bg-transparent h-auto flex flex-wrap justify-center gap-3 p-0">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex-none flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-xl bg-white text-gray-700 shadow-md hover:shadow-lg hover:-translate-y-1 h-auto border-none"
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="hidden sm:inline">{category.label}</span>
                    <span className="sm:hidden">
                      {category.label.split(" ")[0]}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ml-1 ${
                        activeCategory === category.id
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {category.count}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </div>
      </section>
      <section className="py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((achievement) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              onSelect={setSelected}
            />
          ))}
        </div>
      </section>
      <AchievementModal
        achievement={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
