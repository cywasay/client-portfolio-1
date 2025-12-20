import Link from "next/link";
import Image from "next/image";
import { galleryItems } from "../data";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Map IDs to available images (edu-leader1.jpg through edu-leader7.jpg)
const getImageUrl = (id) => {
  const imgNum = ((id - 1) % 7) + 1;
  return `/edu-leader${imgNum}.jpg`;
};

export default async function GalleryDetailPage({ params }) {
  const resolvedParams = await params;
  const item = galleryItems.find((p) => p.id.toString() === resolvedParams.id);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold text-blue-950">Item Not Found</h2>
        <Link href="/gallery" passHref>
          <Button variant="outline">Back to Gallery</Button>
        </Link>
      </div>
    );
  }

  const imageUrl = getImageUrl(item.id);

  return (
    <main className="min-h-screen bg-white">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-12">
        {/* Navigation */}
        <Link
          href="/gallery"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-12 transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Gallery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Sidebar */}
          <div className="relative group">
            <Card className="overflow-hidden rounded-3xl shadow-2xl border-none">
              <div className="aspect-[4/5] relative">
                <Image
                  src={imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </Card>

            {/* Tag */}
            <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md text-blue-950 rounded-full text-sm font-bold shadow-lg border border-white/20">
              {item.date}
            </div>
          </div>

          {/* Content Area */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide uppercase">
                {item.category}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight">
                {item.title}
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full" />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-blue-950">Overview</h3>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed italic border-l-4 border-emerald-500 pl-6 bg-slate-50/50 py-4 rounded-r-2xl">
                {item.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card className="p-6 bg-white border-blue-50 hover:border-blue-200 transition-colors shadow-none border-2">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-blue-950 mb-1">Impact Type</h4>
                <p className="text-gray-600">
                  Focused on {item.category} innovation and student empowerment.
                </p>
              </Card>
              <Card className="p-6 bg-white border-emerald-50 hover:border-emerald-200 transition-colors shadow-none border-2">
                <div className="text-2xl mb-2">📅</div>
                <h4 className="font-bold text-blue-950 mb-1">Timeline</h4>
                <p className="text-gray-600">
                  Successfully completed in {item.date} as part of core
                  educational goals.
                </p>
              </Card>
            </div>

            <div className="pt-10 border-t border-gray-100 flex items-center justify-between">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-8 py-6 rounded-2xl bg-blue-950 hover:bg-blue-900 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                  Discuss Similar Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
