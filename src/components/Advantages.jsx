import { CheckCircle2 } from "lucide-react";
import globeImg from "../assets/globe.png";
import { checklistItems } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Advantages = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className="mt-20" ref={ref}>
            <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide"
                id="advantages"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                The best free <span className="bg-gradient-to-r from-cyan-500 to-cyan-800 text-transparent bg-clip-text">VPN service</span>
            </motion.h2>
            <div className="flex flex-wrap justify-center">
                <motion.div
                    className="p-2 w-96 mt-4 lg:w-1/3 lg:mt-16"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <img src={globeImg} alt="globe" />
                </motion.div>
                <div className="pt-12 w-full lg:w-1/2">
                    {checklistItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex mb-12"
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                                <p className="text-md text-neutral-500">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Advantages;
