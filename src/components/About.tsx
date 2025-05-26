export default function About() {
  return (
    <div className="relative bg-gradient-to-br from-blue-100 via-white to-purple-200 overflow-hidden min-h-screen">
      {/* Animated Background Circles */}
      <div className="absolute w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-30 top-10 left-[-100px] animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-100 rounded-full blur-2xl opacity-30 bottom-20 right-[-80px] animate-ping"></div>

      {/* Content Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-16 text-[#12255a] font-sans">

        {/* About Text */}
        <div className="text-center mb-20 px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
            About FlintVerse
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            FlintVerse is a creative hub where innovation meets design. We bring your digital dreams to life with tailored solutions in <strong>design</strong>, <strong>development</strong>, and <strong>strategy</strong> — all under one roof.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
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
              className="bg-white border hover:shadow-2xl transition-all p-8 rounded-3xl text-center shadow-md hover:scale-[1.03]"
            >
              <h3 className="text-xl font-bold mb-3 text-indigo-700">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4 drop-shadow">
            Let’s Build Something Great
          </h2>
          <p className="text-md md:text-lg text-gray-700 max-w-2xl mx-auto leading-loose">
            Whether you're rebranding or launching from scratch, FlintVerse has the creative edge and technical skill to make your ideas shine online.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-3xl shadow-xl p-8 backdrop-blur-md bg-opacity-90">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Get in Touch
          </h3>
          <div className="space-y-4 text-nowrap md:text-xl">
            <a
              href="https://wa.me/233501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-green-100 rounded-xl hover:bg-green-200 transition"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4f1.svg"
                alt="Phone"
                className="w-6 h-6 mr-3"
              />
              <span className="text-gray-800 font-medium">+233 54 2177 021</span>
            </a>

            <a
              href="mailto:samuelmensah5521@gmail.com"
              className="flex items-center p-4 bg-blue-100 rounded-xl hover:bg-blue-200 transition"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2709.svg"
                alt="Email"
                className="w-6 h-6 mr-3"
              />
              <span className="text-gray-800 font-medium">samuelmensah5521@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/mensah-samuel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-sky-100 rounded-xl hover:bg-sky-200 transition"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f465.svg"
                alt="LinkedIn"
                className="w-6 h-6 mr-3"
              />
              <span className="text-gray-800 font-medium">linkedin.com/in/mensah-samuel</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-auto rotate-180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L60,106.7C120,117,240,139,360,149.3C480,160,600,160,720,138.7C840,117,960,75,1080,69.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
