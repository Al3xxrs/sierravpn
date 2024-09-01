import { testimonials } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Testimonials = () => {
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
        <div className="mt-20 tracking-wide" id="testimonials" ref={ref}>
            <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                What People are saying
            </motion.h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                            <p>{testimonial.text}</p>
                            <div className="flex mt-8 items-start">
                                <img
                                    className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                                    src={testimonial.image}
                                    alt={testimonial.user}
                                />
                                <div>
                                    <h6>{testimonial.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
