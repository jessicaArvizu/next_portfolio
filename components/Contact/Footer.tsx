import { SectionsEnum } from "../_enums/sectionsEnums";
import Socials from "../Socials/Socials";

const Footer = () => {
    return (
        <footer
            id={SectionsEnum.Contact}
            className="w-full flex items-center justify-center text-center py-10"
        >
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Have an idea you'd like to <span className="text-peach">bring to life</span>?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Let's work together to turn your vision into <span className="text-peach">reality</span>. Reach out today, and let's make it happen!
                </p>
                <div className="flex items-center justify-center">
                    <Socials />
                </div>
                <div className="flex flex-col items-center justify-center mt-10 text-white-200">
                    <p>This website was built using 
                        <a 
                            href="https://nextjs.org/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-peach ml-1"
                        > 
                            Next.js 
                        </a> 
                        &nbsp;and&nbsp;
                        <a 
                            href="https://tailwindcss.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-peach ml-1"
                        >
                            Tailwind CSS
                        </a>.
                    </p>
                    <p className="mt-2">
                        You can check the source code on 
                        <a 
                            href="https://github.com/jessicaArvizu/next_portfolio" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-peach ml-1"
                        >
                            GitHub
                        </a>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
