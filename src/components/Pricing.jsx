import { CheckCircle2, Ban } from "lucide-react";
import { pricingOptions } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Pricing = () => {
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
        <div className="mt-20" id="pricing" ref={ref}>
            <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Pricing
            </motion.h2>
            <div className="flex flex-wrap">
                {pricingOptions.map((option, index) => (
                    <motion.div
                        key={index}
                        className="w-full sm:w-1/2 lg:w-1/3 p-2"
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className="text-4xl mb-8">
                                {option.title}
                                {option.title === "Pro" && (
                                    <span className="bg-gradient-to-r from-cyan-500 to-blue-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                                        (Most Popular)
                                    </span>
                                )}
                            </p>
                            <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                <span className="text-neutral-400 tracking-tight">/Month</span>
                            </p>
                            <ul>
                                {option.features.map((feature, index) => (
                                    <li key={index} className="mt-8 flex items-center">
                                        {feature.included ? <CheckCircle2 /> : <Ban />}
                                        <span className="ml-2">{feature.name}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#"
                                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-cyan-800 border border-cyan-800 rounded-lg transition duration-200"
                            >
                                Subscribe
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
