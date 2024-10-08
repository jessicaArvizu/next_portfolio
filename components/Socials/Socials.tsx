import { FaCode, FaEnvelope, FaGithub, FaGraduationCap, FaLinkedin } from "react-icons/fa";
import SocialIcon from "./SocialIcon";

const socialData = [
    { icon: <FaGithub />, link: "https://github.com/jessicaArvizu" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/jessica-arvizu/" },
    { icon: <FaEnvelope />, link: "mailto:jessica.arvizu.trabajo@gmail.com" },
    { icon: <FaCode />, link: "https://www.frontendmentor.io/profile/jessicaArvizu" },
    { icon: <FaGraduationCap />, link: "https://www.codecademy.com/profiles/jessArvizu" },
];

const Socials = () => {
    return (
        <div className="mt-10 mx-auto min-w-full flex md:flex-row flex-row gap-6 justify-center lg:justify-start text-4xl">
            {socialData.map((social, index) => (
                <SocialIcon key={index} icon={social.icon} link={social.link} />
            ))}
        </div>
    );
};

export default Socials;
