import { compassValues } from '../data';

export default function LvCompass() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">My Leadership Compass</h2>
        <p className="text-lg text-gray-600">Core principles that guide every decision and interaction.</p>
      </div>
      <div className="hidden md:block relative h-[500px] lg:h-[560px] mb-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-100 to-emerald-100 shadow-2xl border-4 border-white flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-2">🧭</div>
            <p className="text-gray-600 font-medium">My Compass</p>
          </div>
        </div>
        {compassValues.map((value) => (
          <div
            key={value.title}
            className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 group"
            style={{ transform: `rotate(${value.angle}deg) translate(200px) rotate(-${value.angle}deg)` }}
          >
            <div className={`w-full h-full bg-gradient-to-br ${value.color} rounded-2xl shadow-lg text-white flex flex-col items-center justify-center p-4 transition duration-500 group-hover:scale-110`}>
              <div className="text-2xl mb-2">{value.icon}</div>
              <div className="text-sm font-semibold text-center">{value.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden grid grid-cols-2 gap-4">
        {compassValues.map((value) => (
          <div key={value.title} className={`bg-gradient-to-br ${value.color} rounded-2xl shadow-lg flex flex-col items-center justify-center text-white p-6 aspect-square`}>
            <div className="text-4xl mb-3">{value.icon}</div>
            <div className="text-base font-semibold text-center">{value.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

