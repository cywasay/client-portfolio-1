"use client";

import { useMemo, useState } from "react";
import MasonryGrid from "./MasonryGrid";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GalleryClient({ categories, items }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(
    () =>
      activeCategory === "all"
        ? items
        : items.filter((item) => item.category === activeCategory),
    [activeCategory, items]
  );

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 mb-12 sm:mb-16">
        <div className="max-w-6xl mx-auto">
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

      <section className="px-4 sm:px-6 lg:px-8 xl:px-12 mb-16 sm:mb-20">
        <div className="max-w-7xl mx-auto">
          <MasonryGrid items={filteredItems} />
        </div>
      </section>
    </>
  );
}
