const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Explore the internet safely with
                <span className="bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text"> SierraVPN</span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                SierraVPN offers secure and private internet access with 100 servers strategically located around the world. Whether
                you&apos;re browsing, streaming, or working remotely, SierraVPN ensures fast and reliable connections, protecting your data
                with top-tier encryption. Enjoy unrestricted access to global content while maintaining your online privacy, no matter where
                you are.
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-cyan-500 to-cyan-800 py-3 px-4 mx-3 rounded-md">
                    Start for free
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
