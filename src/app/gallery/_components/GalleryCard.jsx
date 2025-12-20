import Link from "next/link";
import Image from "next/image";

const height = (size) =>
  size === "large" ? "h-80" : size === "small" ? "h-56" : "h-64";

// Map IDs to available images (edu-leader1.jpg through edu-leader7.jpg)
const getImageUrl = (id) => {
  const imgNum = ((id - 1) % 7) + 1;
  return `/edu-leader${imgNum}.jpg`;
};

export default function GalleryCard({ item }) {
  const imageUrl = getImageUrl(item.id);

  return (
    <Link href={`/gallery/${item.id}`} className="block">
      <div className="gallery-card w-full group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col cursor-pointer">
        <div
          className={`bg-gradient-to-br ${item.gradient} ${height(
            item.size
          )} relative overflow-hidden`}
        >
          <Image
            src={imageUrl}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <div className="text-white text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">👁️</div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                View Details
              </p>
            </div>
          </div>
          <div className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 bg-black/40 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm backdrop-blur-sm">
            {item.date}
          </div>
        </div>
        <div className="bg-white p-4 sm:p-5 lg:p-6">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2">
            {item.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-500 capitalize">
              {item.category}
            </span>
            <span className="text-blue-500 font-semibold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
              Explore ›
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      </div>
    </Link>
  );
}
