import { features } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const FeatureSection = () => {
    const controls = useAnimation();
    const [threshold, setThreshold] = useState(0.3); // Default threshold

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: threshold,
    });

    // Adjust the threshold based on screen width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setThreshold(0.1); // Use a lower threshold for mobile devices
            } else {
                setThreshold(0.3); // Use the default threshold for larger screens
            }
        };

        handleResize(); // Set the initial threshold
        window.addEventListener("resize", handleResize); // Update on resize

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]" id="features" ref={ref}>
            <motion.div
                className="text-center"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="bg-neutral-900 text-cyan-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">Features</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    We provide{" "}
                    <span className="bg-gradient-to-r from-cyan-500 to-cyan-800 text-transparent bg-clip-text">the best solutions</span>
                </h2>
            </motion.div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="w-full sm:w-1/2 lg:w-1/3"
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <div className="flex">
                            <motion.div
                                className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-cyan-700 justify-center items-center rounded-full"
                                initial={{ scale: 0.5, rotate: 90 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                            >
                                {feature.icon}
                            </motion.div>
                            <div>
                                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                                <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;
