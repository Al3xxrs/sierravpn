import { TabletSmartphone, Mails, Fingerprint, MailWarning, GlobeLock, ShieldHalf } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
    { label: "Features", href: "#features" },
    { label: "Advantages", href: "#advantages" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
    {
        user: "Liam Borsch",
        company: "Vexon Techonologies",
        image: user1,
        text: "SierraVPN provides exceptional speed and security with its network of 100 servers. Whether I'm streaming or working remotely, it never lets me down. The encryption is top-notch, giving me peace of mind about my online privacy. Highly recommended!",
    },
    {
        user: "Vanessa Brown",
        company: "Space Programs",
        image: user2,
        text: "With SierraVPN, accessing content from around the world is such a breeze. Its extensive server list means I can always find a fast and reliable connection. The privacy features are absolutely impressive, and the performance is consistently excellent.",
    },
    {
        user: "Luke White",
        company: "Next Level Solutions",
        image: user3,
        text: "I've been using SierraVPN for a few months, and I'm impressed with its reliability. The connection speed is great for both streaming and work, and the encryption ensures my data is secure. A solid choice for anyone needing a dependable VPN.",
    },
    {
        user: "Beijim Kolf",
        company: "The Games Company",
        image: user4,
        text: "SierraVPN excels in both privacy and performance. Its 100 servers offer diverse options for global content access, and the strong encryption keeps my information safe. Perfect for anyone looking for a secure and speedy VPN service.",
    },
    {
        user: "Kevin Hinkel",
        company: "Higher Routes",
        image: user5,
        text: "SierraVPN is fantastic for anyone who streams content regularly. The fast speeds and reliable connections make for smooth viewing experiences, and the encryption provides a secure browsing environment. A top contender in the VPN market.",
    },
    {
        user: "Jennifer Lowell",
        company: "Synergy Systems",
        image: user6,
        text: "I appreciate how SierraVPN combines efficiency with strong security features. The extensive server network ensures I can always connect quickly, and the encryption protects my data effectively. A great VPN for both everyday use and specialized needs.",
    },
];

export const features = [
    {
        icon: <Fingerprint />,
        text: "Ad Blocker",
        description: "Block all ad banners, pop-ups, and videos, so you get a more streamlined and less cluttered browsing experience.",
    },
    {
        icon: <ShieldHalf />,
        text: "24/7 Virus Protection",
        description:
            "Enjoy around-the-clock antivirus protection with our regularly updated database (every 3 hours!). Get faster scanning results and avoid incorrect detections by choosing which files and folders to scan.",
    },
    {
        icon: <Mails />,
        text: "Masked email generator",
        description:
            "Let Alternative ID create an email address for you. Use it to secure your real email address and avoid getting spam & annoying marketing subscriptions in your inbox.",
    },
    {
        icon: <MailWarning />,
        text: "Real-time email breach alerts",
        description:
            "Get immediate alerts whenever your email addresses, credit cards, or personal IDs are part of a data breach, so you can take action and keep your most sensitive info safe.",
    },
    {
        icon: <TabletSmartphone />,
        text: "Up to unlimited devices",
        description: "You can use the VPN with your account on every device to browse the internet in the safest way possible.",
    },
    {
        icon: <GlobeLock />,
        text: "Personal data security reports",
        description:
            "Get regular reports on your personal data security (quarterly or yearly) and stay up-to-date with any potential breaches that may have impacted you.",
    },
];

export const checklistItems = [
    {
        title: "Minimize public Wi-Fi risks",
        description:
            "Working from a cafe & switching mobile data to that free internet feels lovely. But public Wi-Fi is a blessing for hackers. Connect to a VPN and surf worry-free.",
    },
    {
        title: "Access websites while traveling",
        description:
            "Watching your favorite movie while traveling is something to look forward to. But are you secure while doing that? Well, don’t worry. Let the VPN take care of it.",
    },
    {
        title: "Escape price discrimination online",
        description:
            "The more you visit a website, the more likely you will spend money there. That’s why you stop getting those discounts. Connect to a VPN and get them back!",
    },
];

export const pricingOptions = [
    {
        title: "Free",
        price: "$0",
        features: [
            { name: "Up to 2 devices", included: true },
            { name: "Ad Blocker", included: true },
            { name: "Masked email generator", included: true },
            { name: "24/7 Virus Protection", included: false },
            { name: "Real-time email breach alerts", included: false },
            { name: "Personal data security reports", included: false },
        ],
    },
    {
        title: "Pro",
        price: "$2,14",
        features: [
            { name: "Up to 10 devices", included: true },
            { name: "Ad Blocker", included: true },
            { name: "Masked email generator", included: true },
            { name: "24/7 Virus Protection", included: true },
            { name: "Real-time email breach alerts", included: false },
            { name: "Personal data security reports", included: false },
        ],
    },
    {
        title: "Enterprise",
        price: "$3",
        features: [
            { name: "Unlimited devices", included: true },
            { name: "Ad Blocker", included: true },
            { name: "Masked email generator", included: true },
            { name: "24/7 Virus Protection", included: true },
            { name: "Real-time email breach alerts", included: true },
            { name: "Personal data security reports", included: true },
        ],
    },
];

export const resourcesLinks = [
    { href: "#", text: "Getting Started, What is a VPN?" },
    { href: "#", text: "Why would I need a VPN?" },
    { href: "#", text: "About Us" },
    { href: "#", text: "Help Center" },
    { href: "#", text: "Community Forums" },
];

export const platformLinks = [
    { href: "#", text: "Features" },
    { href: "#", text: "Supported Devices" },
    { href: "#", text: "System Requirements" },
    { href: "#", text: "Downloads" },
    { href: "#", text: "Release Notes" },
];
