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
        count: achievements.length,
      },
      {
        id: "teaching",
        label: "Teaching Excellence",
        count: counts("teaching"),
      },
      {
        id: "innovation",
        label: "Innovation",
        count: counts("innovation"),
      },
      {
        id: "leadership",
        label: "Leadership",
        count: counts("leadership"),
      },
      {
        id: "research",
        label: "Research",
        count: counts("research"),
      },
      {
        id: "technology",
        label: "Technology",
        count: counts("technology"),
      },
      {
        id: "community",
        label: "Community",
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
      <section className="editorialSection !pb-4">
        <div className="editorialInner">
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <div>
              <TabsList className="editorialTabs h-auto bg-transparent p-0">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="editorialTab"
                  >
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
      <section className="editorialSection !pt-8">
        <div className="editorialInner grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
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
