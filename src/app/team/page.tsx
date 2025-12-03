"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import NeubrutalistCard from "@/components/ui/NeubrutalistCard";
import NeubrutalistButton from "@/components/ui/NeubrutalistButton";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const teamMembers = [
    {
        name: "Muhammad Huzaifa Shahid",
        role: "Team Lead / Developer",
        color: "mint",
        prompt: "Professional headshot of Muhammad Huzaifa Shahid, young male student, confident smile, pastel mint background, neubrutalist style",
        image: null
    },
    {
        name: "Hamza Ali",
        role: "Team Member",
        color: "peach",
        prompt: "Professional headshot of Hamza Ali, young male student, friendly expression, pastel peach background, neubrutalist style",
        image: "/images/Hamza_Ali_v2.jpeg"
    },
    {
        name: "Subhan Qaiser",
        role: "Team Member",
        color: "lavender",
        prompt: "Professional headshot of Subhan Qaiser, young male student, smart casual, pastel lavender background, neubrutalist style",
        image: null
    },
    {
        name: "Zaid Naseem",
        role: "Team Member",
        color: "pastelBlue",
        prompt: "Professional headshot of Zaid Naseem, young male student, glasses, pastel blue background, neubrutalist style",
        image: "/images/Zaid_Naseem.jpeg"
    },
    {
        name: "Abdul Hadi",
        role: "Team Member",
        color: "pastelYellow",
        prompt: "Professional headshot of Abdul Hadi, young male student, cheerful, pastel yellow background, neubrutalist style",
        image: "/images/Abdul_Hadi.jpeg"
    },
];

export default function TeamPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="min-h-screen flex flex-col gap-12 pb-20">
            {/* Navbar */}
            <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter">CropGuard</Link>
                <div className="hidden md:flex gap-8 font-medium">
                    <Link href="/" className="hover:underline decoration-2 underline-offset-4">Home</Link>
                    <Link href="/product" className="hover:underline decoration-2 underline-offset-4">Innovation</Link>
                    <Link href="/team" className="underline decoration-2 underline-offset-4">Team</Link>
                </div>
                <Link href="/product">
                    <NeubrutalistButton variant="primary" className="text-sm px-4 py-2">
                        Get App
                    </NeubrutalistButton>
                </Link>
            </nav>

            <main className="w-full max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h1 className="text-5xl font-bold">Meet the <span className="bg-pastel-yellow px-2">Innovators</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The dedicated team behind CropGuard, working to revolutionize agriculture through technology.
                    </p>
                </motion.div>

                {/* Mentor Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-20 flex justify-center"
                >
                    <NeubrutalistCard color="cream" className="max-w-md w-full text-center">
                        <div className="mb-6 flex justify-center">
                            <div className="relative w-full overflow-hidden rounded-xl border-2 border-black">
                                <Image
                                    src="/images/Sir_Awais_Aamir_Niaz.jpeg"
                                    alt="Awais Niaz"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold">Awais Niaz</h2>
                        <p className="text-mint font-bold uppercase tracking-wide mt-1">Project Mentor</p>
                        <p className="text-gray-600 mt-4">
                            Guiding the team with expert insights and strategic direction.
                        </p>
                    </NeubrutalistCard>
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <NeubrutalistCard color={member.color as any} className="text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="mb-6 flex justify-center">
                                    {member.image ? (
                                        <div className="relative h-[200px] w-full overflow-hidden rounded-xl border-2 border-black">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <ImagePlaceholder
                                            prompt={member.prompt}
                                            height="h-[200px]"
                                            className="rounded-xl"
                                        />
                                    )}
                                </div>
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-gray-700 font-medium mt-1">{member.role}</p>
                            </NeubrutalistCard>
                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </div>
    );
}
