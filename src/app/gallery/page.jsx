import GalleryHero from './_components/GalleryHero';
import GalleryClient from './_components/GalleryClient';
import StoryHighlights from './_components/StoryHighlights';
import CallToExplore from './_components/CallToExplore';
import { galleryCategories, galleryItems, storyHighlights } from './data';

export default function Gallery() {
  return (
    <main id="top" className="interiorPage">
      <GalleryHero />
      <GalleryClient categories={galleryCategories} items={galleryItems} />
      <StoryHighlights highlights={storyHighlights} />
      <CallToExplore />
    </main>
  );
}
