import Skills from "./Skills";
import { motion } from "framer-motion";

function ExperienceCard(props) {
    const titleParts = props.title.split('|');

    return (
        <a href={props.url} target='_blank' rel='noopener noreferrer'>
            <motion.div
                className='grid grid-cols-1 space-y-5 p-4 rounded h-full'
                style={{
                    background: 'rgba(54, 58, 79,0.3)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)',
                    border: '1px solid rgba(54, 58, 79,1)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.90 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <div className='lg:col-span-1 text-text text-center text-xs'>
                    {props.date}
                </div>
                <h4 className='text-sm text-peach text-center'>{props.subTitle}</h4>
                <div>
                    <h3 className='text-xs font-normal mb-5 text-center'>
                        {titleParts.length === 2 ? (
                            <span>
                                <span>{titleParts[0]}</span>
                                <span className='text-peach'>|</span>
                                <span>{titleParts[1]}</span>
                            </span>
                        ) : (
                            <span>{props.title}</span>
                        )}
                    </h3>
                    <p className='text-sm font-normal'>
                        {props.description}
                    </p>
                    <hr className="my-4 border-surface-0"/>
                    <Skills skills={props.skills} />
                </div>
            </motion.div>
        </a>
    );
}

export default ExperienceCard;
