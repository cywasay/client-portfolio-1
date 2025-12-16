"use client";

import { useEffect, useRef } from 'react';
import GalleryCard from './GalleryCard';

export default function MasonryGrid({ items, animationOffset = 100 }) {
  const gridRef = useRef(null);

  useEffect(() => {
    let instance;
    (async () => {
      const Masonry = (await import('masonry-layout')).default;
      if (gridRef.current) {
        instance = new Masonry(gridRef.current, {
          itemSelector: '.gallery-card',
          columnWidth: '.gallery-sizer',
          gutter: 24,
          percentPosition: true,
          transitionDuration: '0.25s'
        });
      }
    })();
    const resize = () => instance?.layout();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      instance?.destroy();
    };
  }, [items.length]);

  return (
    <div ref={gridRef} className="relative">
      <div className="gallery-sizer w-full sm:w-1/2 lg:w-1/3 h-0 pointer-events-none select-none" />
      {items.map((item, index) => (
        <GalleryCard key={item.id} item={item} delay={index * animationOffset} />
      ))}
    </div>
  );
}

