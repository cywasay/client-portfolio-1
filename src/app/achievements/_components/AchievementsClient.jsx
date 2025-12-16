"use client";

import { useMemo, useState } from 'react';
import CategoryFilter from './CategoryFilter';
import AchievementCard from './AchievementCard';
import AchievementModal from './AchievementModal';

export default function AchievementsClient({ achievements }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selected, setSelected] = useState(null);

  const categories = useMemo(() => {
    const counts = (id) => achievements.filter((a) => a.category === id).length;
    return [
      { id: 'all', label: 'All Achievements', icon: '🌟', count: achievements.length },
      { id: 'teaching', label: 'Teaching Excellence', icon: '👨‍🏫', count: counts('teaching') },
      { id: 'innovation', label: 'Innovation', icon: '💡', count: counts('innovation') },
      { id: 'leadership', label: 'Leadership', icon: '🌟', count: counts('leadership') },
      { id: 'research', label: 'Research', icon: '🔬', count: counts('research') },
      { id: 'technology', label: 'Technology', icon: '🚀', count: counts('technology') },
      { id: 'community', label: 'Community', icon: '🤝', count: counts('community') }
    ];
  }, [achievements]);

  const filtered = activeCategory === 'all' ? achievements : achievements.filter((a) => a.category === activeCategory);

  return (
    <>
      <section className="py-12 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <CategoryFilter categories={categories} active={activeCategory} onSelect={setActiveCategory} />
        </div>
      </section>
      <section className="py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((achievement) => (
            <AchievementCard key={achievement.title} achievement={achievement} onSelect={setSelected} />
          ))}
        </div>
      </section>
      <AchievementModal achievement={selected} onClose={() => setSelected(null)} />
    </>
  );
}

