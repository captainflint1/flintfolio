import React from 'react';

interface Project {
  image: string;
  name: string;
  description: string;
  url: string;
}

interface Certificate {
  image: string;
  title: string;
  issuer: string;
}

const projects: Project[] = [
  {
    image: '/zuzuwears.png',
    name: 'Zuzu Wears',
    description: 'A full-featured online store built with Bootstrap 5.0 and Node.js.',
    url: 'https://zuzuwears.netlify.app/',
  },
  {
    image: '/flintgold.png',
    name: 'FlintGold',
    description: 'A modern jewelery e-commerce platform with a sleek design and robust functionality.',
    url: 'https://flintgold.netlify.app/',
  },
  {
    image: '/real-estate.png',
    name: 'Flint Real Estate',
    description: 'A responsive real estate website showcasing properties with advanced search features.',
    url: 'https://flintrealestate.godaddysites.com',
  },
];

const certificates: Certificate[] = [
  {
    image: '/ceh.jpg',
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
  },
  {
    image: '/alx.jpg',
    title: 'ALX Professional Foundations in Data Science',
    issuer: 'ALX Africa',
  },
  {
    image: '/udemy.jpeg',
    title: 'Front End Web Development ',
    issuer: 'Udemy',
  },
];

const Project: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Projects Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Projects I've Worked On
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-2">
                  {project.name}
                </h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Certificates Section */}
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-700 text-sm">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Project;
