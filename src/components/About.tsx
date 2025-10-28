export default function About() {
  return (
    <div className="relative bg-gradient-to-br from-blue-100 via-white to-purple-200 overflow-hidden min-h-screen">
      
      {/* Background Effects */}
      <div className="absolute w-[450px] h-[450px] bg-purple-200 rounded-full blur-3xl opacity-30 top-0 left-[-120px] animate-pulse"></div>
      <div className="absolute w-[350px] h-[350px] bg-blue-200 rounded-full blur-2xl opacity-30 bottom-16 right-[-90px] animate-ping"></div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32 pt-24 text-[#12255a] font-sans">

        {/* Heading */}
        <div className="text-center mb-20 px-4">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            About FlintVerse
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            FlintVerse is a creative hub where innovation meets design. We help bring your digital identity to life —
            through <strong>branding</strong>, compelling <strong>UI/UX</strong>, and <strong>modern web development</strong>.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-10 mb-24 px-4">
          {[
            {
              title: "🎨 Design-Led Thinking",
              desc: "Visually engaging experiences that deliver clarity, uniqueness, and customer trust.",
            },
            {
              title: "💻 Modern Development",
              desc: "High-performance websites built with clean code, responsive layouts, and top-notch security.",
            },
            {
              title: "🤝 Collaborative Process",
              desc: "We craft solutions with clients — not for them — to ensure results exceed expectations.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border hover:shadow-2xl transition-all p-8 rounded-3xl text-center shadow-md hover:scale-[1.05]"
            >
              <h3 className="text-xl font-bold mb-3 text-indigo-700">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-4 drop-shadow-md">
            Let’s Build Your Digital Presence 🚀
          </h2>
          <p className="text-md md:text-lg text-gray-700 max-w-2xl mx-auto leading-loose">
            Whether you're a business looking to expand online or a brand needing a refresh,
            FlintVerse delivers meaningful digital solutions.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-3xl shadow-xl p-10 backdrop-blur-md bg-opacity-95">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Get in Touch
          </h3>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">

            {/* Phone */}
            <a
  href="tel:+233542177021"
  className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:scale-110 hover:bg-green-700 transition-all duration-300 shadow-md"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white">
    <path d="M21.7 16.38l-4.1-1.76a1 1 0 0 0-1 .12l-2.2 1.6a15.05 15.05 0 0 1-7.2-7.2l1.6-2.2a1 1 0 0 0 .12-1L7.62 2.3A1 1 0 0 0 6.7 1.8L3.3 3.1A1 1 0 0 0 2.5 4.8c0 10 8.2 18.2 18.2 18.2a1 1 0 0 0 1.7-.8l1.3-3.4a1 1 0 0 0-.9-1.44z"/>
  </svg>
</a>

            {/* WhatsApp */}
            <a
    href="https://wa.me/233542177021"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-green-600 transition-all duration-300 shadow-md"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-white">
      <path d="M380.9 97.1C339 55.2 283.2 32 224.5 
      32c-116.6 0-211 94.3-211 211 0 37.1 
      9.7 73.3 28.1 105.3L0 480l134.6-41.8c30.3 
      16.6 64.6 25.3 99.9 25.3h.1c116.6 0 211-94.3 
      211-211 .1-58.7-23.1-114.5-65-156.4zM224.6 
      392.6c-30.7 0-60.7-8.3-86.7-24l-6.2-3.7-80.1 
      24.9 26.7-77.5-4.1-6.4c-16.6-26-25.3-56-25.3-86.4 
      0-89.8 73.1-162.9 162.9-162.9 43.5 0 84.4 
      16.8 115.1 47.5 30.8 30.8 47.8 71.7 47.8 
      115.2 0 89.8-73.1 162.9-162.9 162.9zm97-120.9c-5.1-2.6-30.2-14.9-34.9-16.7-4.7-1.8-8.1-2.6-11.5 
      2.6-3.4 5.1-13.2 16.7-16.2 20.1-3 3.4-6 
      3.8-11.1 1.3-30.2-15.1-50-26.9-70.1-60.8-5.3-9.1 
      5.3-8.5 15.1-28.3 1.6-3.4 .8-6.4-.4-9 
      -1.2-2.6-11.5-27.8-15.8-38.3-4.1-10.2-8.3-8.8-11.5-9 
      -3-.2-6.4-.2-9.8-.2s-9 1.3-13.6 6.4c-4.7 
      5.1-18.1 17.7-18.1 43.2s18.6 50.1 21.1 53.5c2.6 3.4 
      36.2 55.4 88.2 78.1 12.3 5.3 21.9 8.5 29.4 10.9 
      12.4 4.1 23.7 3.5 32.6 2.1 9.9-1.6 
      30.2-12.3 34.5-24.3 4.2-12.3 4.2-22.9 
      2.9-25.2-1-2.3-4.7-3.7-9.8-6.2z"/>
    </svg>
  </a>

            {/* Email */}
           {/* Email */}
<a
  href="mailto:samuelmensah5521@gmail.com"
  className="w-14 h-14 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg hover:scale-110 hover:bg-blue-700 transition-transform duration-300 ease-out"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-7 h-7 fill-white"
  >
    <path d="M502.3 190.8L327.4 338c-22.9 19.4-56 19.4-78.8 0L9.7 190.8C3.8 185.5 0 177.9 0 169.7V104c0-22.1 
    17.9-40 40-40h432c22.1 0 40 17.9 40 40v65.7c0 8.2-3.8 15.8-9.7 21.1zM0 
    216.4v191.6c0 22.1 17.9 40 40 40h432c22.1 0 40-17.9 
    40-40V216.4L357.7 350.3c-24.5 20.8-60.9 20.8-85.4 
    0L0 216.4z"/>
  </svg>
</a>


            {/* LinkedIn */}
            <a
    href="https://linkedin.com/in/mensah-samuel"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 hover:bg-blue-700 transition-all duration-300 shadow-md"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-white">
      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.12 107 0 82.8 0 53.9 
      0 24.3 24.12 0 53.84 0s53.84 24.3 53.84 53.9c0 28.9-24.12 53.1-53.84 
      53.1zM447.9 448h-92.1V302.4c0-34.7-.7-79.3-48.34-79.3-48.34 
      0-55.76 37.7-55.76 76.7V448h-92V148.9h88.34v40.8h1.28c12.3-23.3 
      42.34-48.3 87.06-48.3 93.1 0 110.2 61.3 110.2 141V448z"/>
    </svg>
  </a>

          </div>
        </div>
      </section>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 200" className="w-full h-auto rotate-180"
          xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,106.7C640...
            64,0,128,0,0,0Z"/>
        </svg>
      </div>

    </div>
  );
}
