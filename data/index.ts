import { SectionsEnum } from "@/components/_enums/sectionsEnums";

export const navItems = [
    { name: "About", link: `#${SectionsEnum.About}` },
    { name: "My skills", link: `#${SectionsEnum.Skills}`},
    { name: "Experience", link: `#${SectionsEnum.Experience}`},
    { name: "Projects", link: `#${SectionsEnum.Projects}` },
    { name: "Contact", link: `#${SectionsEnum.Contact}` },

];

export const gridItems = [
    {
        id: 1,
        title: "The tools I use",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "/grid.svg",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Tesselar",
        link: "https://www.tesselar.mx/",
        img: "/img-tesselar.png",
    },
    {
        id: 2,
        title: "Tax Champions",
        link: "https://www.taxchampions.com/",
        img: "/img-tax-champions.png",
    },
    {
        id: 3,
        title: "A Better Today - Recovery Services",
        link: "https://www.abtrs.com/",
        img: "/img-abtrs.png",
    },
    {
        id: 4,
        title: "Correduría Pública #10, Cabo San Lucas",
        link: "https://www.correduria10bcs.com/",
        img: "/img-correduria.png",
    },
    {
        id: 5,
        title: "Recovery In Motion",
        link: "https://www.recoveryinmotion.com/",
        img: "/img-recovery-in-motion.png",
    },
    {
        id: 6,
        title: "Roofing Architects",
        link: "https://roofingarchitects.com/",
        img: "/img-roofing-arc.png",
    },
    {
        id: 7,
        title: "Methadone Near Me",
        link: "https://methadonenearme.com/",
        img: "/img-methadone.png",
    },
    {
        id: 8,
        title: "Detox To Rehab",
        link: "https://detoxtorehab.com/",
        img: "/img-dtr.png",
    },
    {
        id: 9,
        title: "Care Recovery Services",
        link: "https://addictioncarerecovery.com/",
        img: "/img-crs.png",
    }
];



export const testimonials = [
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];