"use client";

import { useMemo, useState } from "react";
import MasonryGrid from "./MasonryGrid";

export default function GalleryClient({ categories, items }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredItems = useMemo(() => activeCategory === "all" ? items : items.filter((item) => item.category === activeCategory), [activeCategory, items]);
  return (
    <section className="editorialSection">
      <div className="editorialInner">
        <div className="editorialTabs mb-10" role="tablist" aria-label="Gallery categories">
          {categories.map((category) => (
            <button key={category.id} type="button" role="tab" aria-selected={activeCategory === category.id} onClick={() => setActiveCategory(category.id)} className="editorialTab">
              <span>{category.label}</span><span className="opacity-55">{String(category.count).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
        <MasonryGrid items={filteredItems} />
      </div>
    </section>
  );
}
