export default function ContactVisual() {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-2 border-white flex items-center justify-center aspect-square">
        <div className="text-center px-4">
          <div className="text-5xl sm:text-6xl lg:text-7xl mb-3 sm:mb-4">💬</div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Let&apos;s Start a Conversation</h3>
          <p className="text-gray-600 text-sm sm:text-base">I&apos;m here to listen and connect about education, collaboration, or ideas.</p>
        </div>
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-2xl rotate-12 opacity-80 animate-float-slow" />
      <div className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 bg-orange-100 rounded-3xl -rotate-12 opacity-60 animate-float-medium" />
    </div>
  );
}

