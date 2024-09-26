import { motion } from "framer-motion";

interface SocialIconProps {
    icon: React.ReactNode;
    link: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, link }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.90 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <a
                className="text-surface-0 hover:text-peach transform transition duration-300 sm:transform-none"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {icon}
            </a>
        </motion.div>
    );
};

export default SocialIcon;
