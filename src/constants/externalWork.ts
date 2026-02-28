export interface ExternalProject {
    image: string;
    name: string;
    description: string;
    url: string;
}

export interface Certificate {
    image: string;
    title: string;
    issuer: string;
}

export const EXTERNAL_PROJECTS: ExternalProject[] = [
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

export const CERTIFICATES: Certificate[] = [
    {
        image: '/ceh.jpg',
        title: 'Certified Ethical Hacker (CEH)',
        issuer: 'EC-Council',
    },
    {
        image: '/SOC/cert.png',
        title: 'Certified SOC Analyst (CSA)',
        issuer: 'EC-Council',
    },
    {
        image: '/alx.jpg',
        title: 'ALX Professional Foundations in Data Science',
        issuer: 'ALX Africa',
    },
    {
        image: '/udemy.jpeg',
        title: 'Front End Web Development',
        issuer: 'Udemy',
    },
];
