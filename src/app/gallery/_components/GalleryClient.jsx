"use client";

import { useMemo, useState } from 'react';
import CategoryFilter from './CategoryFilter';
import MasonryGrid from './MasonryGrid';

export default function GalleryClient({ categories, items }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = useMemo(
    () => (activeCategory === 'all' ? items : items.filter((item) => item.category === activeCategory)),
    [activeCategory, items]
  );

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 mb-12 sm:mb-16">
        <div className="max-w-6xl mx-auto">
          <CategoryFilter categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} />
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

