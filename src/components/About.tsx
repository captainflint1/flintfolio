export default function About() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Top Wave SVG */}
      {/* <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 150" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <path fill="#aabbcc" fillOpacity="1" d="M0,96L60,106.7C120,117,240,139,360,149.3C480,160,600,160,720,138.7C840,117,960,75,1080,69.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div> */}

      {/* Content Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-10 text-[#12255a] font-sans">
        {/* Banner */}
        

        {/* About Text */}
        <div className="text-center mb-20 px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About FlintVerse
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            FlintVerse is a creative space where ideas come to life through code, design, and strategy. We specialize in crafting elegant, user-centric digital experiences that empower brands to stand out.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {[
            {
              title: '🎨 Design-Led Thinking',
              desc: 'We blend creativity with purpose to deliver visually compelling and functional designs tailored to your brand’s identity.',
            },
            {
              title: '💻 Modern Web Development',
              desc: 'From responsive websites to intuitive user interfaces, FlintVerse builds robust, scalable, and fast digital products.',
            },
            {
              title: '🤝 Collaborative Process',
              desc: 'Every project is a partnership. We work closely with clients to understand their goals and bring their vision to life.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border hover:shadow-xl transition p-6 rounded-2xl text-center"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Let’s Build Something Great
          </h2>
          <p className="text-md md:text-lg text-gray-700 max-w-2xl mx-auto">
            Whether you're a brand looking to refresh your identity or a business seeking a digital presence, FlintVerse is here to help.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Contact Me
          </h3>
          <div className="space-y-4 text-sm text-nowrap md:text-xl">
            <a
              href="https://wa.me/233501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4f1.svg"
                alt="Phone"
                className="w-6 h-6 mr-3"
              />
              <span className="text-gray-800 font-medium">
                +233 54 2177 021
              </span>
            </a>

            <a
              href="mailto:samuelmensah5521@gmail.com"
              className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2709.svg"
                alt="Email"
                className="w-6 h-6 mr-3"
              />
              <span className="text-gray-800 md:font-medium">
                samuelmensah5521@gmail.com
              </span>
            </a>

            <a
              href="https://linkedin.com/in/mensah-samuel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-sky-50 rounded-lg hover:bg-sky-100 transition"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f465.svg"
                alt="LinkedIn"
                className="w-6 h-6 mr-3"
              />
              <span className="text-gray-800 font-medium">
                linkedin.com/in/mensah-samuel
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 150" className="w-full h-auto rotate-180" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L60,106.7C120,117,240,139,360,149.3C480,160,600,160,720,138.7C840,117,960,75,1080,69.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>
    </div>
  );
}
