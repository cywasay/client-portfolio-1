import { contactMethods } from '../data';

export default function ContactCards() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 xl:px-20 mb-12 sm:mb-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {contactMethods.map((method) => (
          <a key={method.title} href={method.action} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
            <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-xl sm:text-2xl text-white mb-3 sm:mb-4 shadow-lg`}>
              {method.icon}
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base break-words">{method.value}</p>
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />
          </a>
        ))}
      </div>
    </section>
  );
}

