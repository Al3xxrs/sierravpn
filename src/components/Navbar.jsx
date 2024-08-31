import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative lg:text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <motion.img
                            className="h-10 w-10 mr-2"
                            src={logo}
                            alt="Logo"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                        <motion.span
                            className="text-xl tracking-tight"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            SierraVPN
                        </motion.span>
                    </div>
                    <motion.ul
                        className="hidden lg:flex ml-14 space-x-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        {navItems.map((item, index) => (
                            <motion.li key={index} whileHover={{ scale: 1.1 }}>
                                <a href={item.href}>{item.label}</a>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <div className="hidden lg:flex justify-center space-x-10 items-center">
                        <motion.a
                            href="#"
                            className="py-2 px-3 border rounded-md"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            Sign In
                        </motion.a>
                        <motion.a
                            href="#"
                            className="bg-gradient-to-r from-cyan-500 to-cyan-800 py-2 px-3 rounded-md"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            Create an account
                        </motion.a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: mobileDrawerOpen ? 90 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {mobileDrawerOpen ? <X /> : <Menu />}
                            </motion.div>
                        </button>
                    </div>
                </div>
                <AnimatePresence>
                    {mobileDrawerOpen && (
                        <motion.div
                            className="right-0 sticky top-0 z-50 py-3 backdrop-blur-lg w-full p-8 flex flex-col justify-center items-center lg:hidden"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ul>
                                {navItems.map((item, index) => (
                                    <motion.li key={index} className="py-4" whileHover={{ scale: 1.1 }}>
                                        <a href={item.href}>{item.label}</a>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="pt-8 flex space-x-6">
                                <motion.a
                                    href="#"
                                    className="py-2 px-3 border rounded-md"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Sign In
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="py-2 px-3 rounded-md bg-gradient-to-r from-cyan-500 to-cyan-800"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Create an account
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
