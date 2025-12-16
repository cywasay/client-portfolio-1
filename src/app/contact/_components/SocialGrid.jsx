import { socialLinks } from '../data';

export default function SocialGrid() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 xl:px-20 mb-16 sm:mb-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Connect Through Social Media</h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg px-4">Follow my journey and join the conversation across platforms.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {socialLinks.map((social) => (
            <a key={social.platform} href={social.url} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-lg sm:text-xl lg:text-2xl text-white mb-2 sm:mb-3 lg:mb-4 mx-auto shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                {social.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-xs sm:text-sm lg:text-base mb-1">{social.platform}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{social.description}</p>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

