import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Brand Identity Design",
      description:
        "We craft powerful brand identities through logos, typography, and visual systems that connect with your audience.",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered interfaces and design systems for websites and mobile apps that are intuitive and engaging.",
    },
    {
      title: "Web Development",
      description:
        "Fully responsive and optimized websites using modern technologies like React, Tailwind, and more.",
    },
    {
      title: "Marketing Collateral",
      description:
        "Custom posters, flyers, banners, and brochures designed to stand out and communicate your brand message.",
    },
    
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-100 via-white to-purple-200 overflow-hidden min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Page heading with gradient */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Our Services
        </h1>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition"
            >
              {/* Title now has a blue text color */}
              <h2 className="text-2xl font-semibold mb-2 text-blue-600">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
