import {
    backend,
    css,
    flask,
    git,
    html,
    javascript,
    mobile,
    mongodb,
    nerdy,
    nodejs,
    reactjs,
    redux,
    tailwind,
    trinityMixes,
    typescript,
    web
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },

];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Python flask",
        icon: flask,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Web developer",
        company_name: "Nerdy - India",
        icon: nerdy,
        iconBg: "#383E56",
        date: "November 2021 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Video App - Trinity Mixes",
        description:
            "Web-based platform that allows users to watch Catholic Gospel songs from various choirs providing spiritual nourishment and entertainment to many.",
        tags: [
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "expressJs",
                color: "red-text-gradient",
            },
            {
                name: "react",
                color: "pink-text-gradient",
            },
            {
                name: "nodeJs",
                color: "blue-text-gradient",
            },
        ],
        image: trinityMixes,
    },
        source_code_link: "https://trinitymixes.onrender.com/",
];

export { experiences, projects, services, technologies, testimonials };

