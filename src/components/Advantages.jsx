import { CheckCircle2 } from "lucide-react";
import globeImg from "../assets/globe.png";
import { checklistItems } from "../constants";

const Advantages = () => {
    return (
        <div className="mt-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide" id="advantages">
                The best free <span className="bg-gradient-to-r from-cyan-500 to-cyan-800 text-transparent bg-clip-text">VPN service</span>
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="p-2 w-96 mt-4 lg:w-1/3 lg:mt-16">
                    <img src={globeImg} alt="globe" />
                </div>
                <div className="pt-12 w-full lg:w-1/2">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex mb-12">
                            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                                <p className="text-md text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Advantages;
