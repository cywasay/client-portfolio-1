import GalleryHero from './_components/GalleryHero';
import GalleryClient from './_components/GalleryClient';
import StoryHighlights from './_components/StoryHighlights';
import CallToExplore from './_components/CallToExplore';
import { galleryCategories, galleryItems, storyHighlights } from './data';

export default function Gallery() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-x-hidden">
      <GalleryHero />
      <GalleryClient categories={galleryCategories} items={galleryItems} />
      <StoryHighlights highlights={storyHighlights} />
      <CallToExplore />
    </main>
  );
}