import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <motion.div
            className="flex flex-col items-center mt-6 lg:mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.h1
                className="text-4xl font-medium sm:text-6xl lg:text-7xl text-center tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Explore the internet safely with
                <motion.span
                    className="bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text"
                    initial={{ backgroundSize: "200% 200%" }}
                    animate={{ backgroundPosition: "100% 0%" }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                >
                    SierraVPN
                </motion.span>
            </motion.h1>
            <motion.p
                className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                SierraVPN offers secure and private internet access with 100 servers strategically located around the world. Whether
                you&apos;re browsing, streaming, or working remotely, SierraVPN ensures fast and reliable connections, protecting your data
                with top-tier encryption. Enjoy unrestricted access to global content while maintaining your online privacy, no matter where
                you are.
            </motion.p>
            <motion.div
                className="flex justify-center my-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <motion.a
                    href="#"
                    className="bg-gradient-to-r from-cyan-500 to-cyan-800 py-3 px-4 mx-3 rounded-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Start for free
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;
