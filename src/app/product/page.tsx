"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NeubrutalistCard from "@/components/ui/NeubrutalistCard";
import NeubrutalistButton from "@/components/ui/NeubrutalistButton";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function ProductPage() {
    return (
        <div className="bg-white">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-black">
                <div className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold tracking-tighter">CropGuard</Link>
                    <div className="hidden md:flex gap-8 font-medium">
                        <Link href="/" className="hover:underline decoration-2 underline-offset-4">Home</Link>
                        <Link href="/product" className="underline decoration-2 underline-offset-4">Innovation</Link>
                        <Link href="/team" className="hover:underline decoration-2 underline-offset-4">Team</Link>
                    </div>
                    <Link href="/product">
                        <NeubrutalistButton variant="primary" className="text-sm px-4 py-2">
                            Get App
                        </NeubrutalistButton>
                    </Link>
                </div>
            </nav>

            {/* Intro Section */}
            <section className="h-screen flex items-center justify-center pt-20">
                <div className="text-center space-y-6 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block bg-lavender border-2 border-black rounded-full px-4 py-1 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                        💡 The Innovation Story
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-bold tracking-tight"
                    >
                        It Starts with <br /><span className="bg-mint px-2">The Farmer.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Scroll to discover how we are changing agriculture forever.
                    </motion.p>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="pt-10 text-4xl"
                    >
                        ⬇️
                    </motion.div>
                </div>
            </section>

            {/* Scrollytelling Section 1: The Struggle */}
            <HorizontalScrollSection
                title="The Generational Struggle"
                text="For decades, farmers in rural Pakistan have faced a silent killer. Crop diseases wipe out entire harvests, destroying livelihoods in days. With 70% of the population relying on agriculture, this isn't just a farm problem—it's a national crisis."
                color="peach"
                direction="left"
                imageSrc="/images/Google_AI_Studio_2025-12-03T08_01_36.414Z.png"
            />

            {/* Scrollytelling Section 2: The Gap */}
            <HorizontalScrollSection
                title="Why Others Failed"
                text="Existing solutions are broken. Agricultural experts are too few and far between. Other apps require high-speed internet, which simply doesn't exist in remote fields. Farmers are left waiting for answers that come too late."
                color="pastelYellow"
                direction="right"
                imageSrc="/images/Google_AI_Studio_2025-12-03T08_01_39.238Z.png"
            />

            {/* Scrollytelling Section 3: The Solution */}
            <HorizontalScrollSection
                title="Enter CropGuard"
                text="We built the impossible: An AI expert that lives in your pocket and works completely offline. By compressing advanced machine learning models, we bring university-level diagnosis to the cheapest smartphones."
                color="mint"
                direction="left"
                imageSrc="/images/Google_AI_Studio_2025-12-03T08_01_43.078Z.png"
            />

            {/* Future Goals */}
            <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-cream">
                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-5xl font-bold">The Future is <span className="bg-pastel-blue px-2">Connected.</span></h2>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            We aren't stopping at diagnosis. Our future roadmap includes:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 text-lg font-bold">
                                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">1</span>
                                Automated Drone Spraying Integration
                            </li>
                            <li className="flex items-center gap-4 text-lg font-bold">
                                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">2</span>
                                Community Disease Alerts
                            </li>
                            <li className="flex items-center gap-4 text-lg font-bold">
                                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">3</span>
                                Marketplace for Direct Selling
                            </li>
                        </ul>
                        <Link href="/">
                            <NeubrutalistButton className="mt-8">
                                Join the Revolution
                            </NeubrutalistButton>
                        </Link>
                    </div>
                    <NeubrutalistCard color="white" className="rotate-2 p-0 overflow-hidden">
                        <div className="relative h-[400px] w-full">
                            <Image
                                src="/images/Google_AI_Studio_2025-12-03T08_01_46.102Z.png"
                                alt="Future Technology Drone"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </NeubrutalistCard>
                </div>
            </section>

        </div>
    );
}

function HorizontalScrollSection({ title, text, color, direction, imageSrc }: any) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(
        scrollYProgress,
        [0.2, 0.5], // Trigger animation when section is in view
        direction === "left" ? [-100, 0] : [100, 0] // Slide from left or right
    );

    const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

    return (
        <section ref={containerRef} className="min-h-screen flex items-center justify-center overflow-hidden relative py-20">
            <div className="max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Text Content (Animated) */}
                <motion.div
                    style={{ x: direction === "left" ? x : undefined, opacity }}
                    className={`space-y-6 ${direction === "right" ? "md:order-2" : ""}`}
                >
                    <div className={`inline-block px-4 py-1 border-2 border-black rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-${color}`}>
                        Chapter
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight">{title}</h2>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                        {text}
                    </p>
                </motion.div>

                {/* Image Content (Static/Fade) */}
                <motion.div
                    style={{ opacity }}
                    className={`${direction === "right" ? "md:order-1" : ""}`}
                >
                    <NeubrutalistCard color={color} className="rotate-1 hover:rotate-0 transition-all duration-500 p-0 overflow-hidden">
                        <div className="relative h-[400px] w-full">
                            <Image
                                src={imageSrc}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </NeubrutalistCard>
                </motion.div>

            </div>
        </section>
    );
}
