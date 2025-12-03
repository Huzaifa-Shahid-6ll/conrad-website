"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import NeubrutalistButton from "@/components/ui/NeubrutalistButton";
import NeubrutalistCard from "@/components/ui/NeubrutalistCard";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function Home() {
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
    <div className="min-h-screen flex flex-col gap-16 pb-20">
      {/* Navbar */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter">GreenFlux</div>
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/" className="hover:underline decoration-2 underline-offset-4">Home</Link>
          <Link href="/product" className="hover:underline decoration-2 underline-offset-4">Innovation</Link>
          <Link href="/team" className="hover:underline decoration-2 underline-offset-4">Team</Link>
        </div>
        <Link href="/product">
          <NeubrutalistButton variant="primary" className="text-sm px-4 py-2">
            Get App
          </NeubrutalistButton>
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block bg-pastel-yellow border-2 border-black rounded-full px-4 py-1 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              🚀 CONRAD Challenge Phase 2
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Diagnose Crop Diseases in <span className="bg-mint px-2">Seconds.</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-lg leading-relaxed">
              AI-powered protection for your harvest. Works completely offline. Accurate, fast, and free for farmers.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/product">
                <NeubrutalistButton className="text-lg">
                  View Innovation
                </NeubrutalistButton>
              </Link>
              <Link href="/team">
                <NeubrutalistButton variant="secondary" className="text-lg">
                  Meet the Team
                </NeubrutalistButton>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <NeubrutalistCard color="lavender" className="hover:rotate-0 transition-transform duration-300 p-0 overflow-hidden">
              <div className="relative w-full">
                <Image
                  src="/images/Main_Page_1st_img.353Z.png"
                  alt="GreenFlux App Interface"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </NeubrutalistCard>
          </motion.div>
        </div>

        {/* Social Proof / Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants}>
            <NeubrutalistCard color="cream" className="text-center py-8">
              <h3 className="text-4xl font-bold mb-2">99%</h3>
              <p className="font-medium text-gray-600">Diagnosis Accuracy</p>
            </NeubrutalistCard>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NeubrutalistCard color="cream" className="text-center py-8">
              <h3 className="text-4xl font-bold mb-2">3+</h3>
              <p className="font-medium text-gray-600">Major Crops Supported</p>
            </NeubrutalistCard>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NeubrutalistCard color="cream" className="text-center py-8">
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="font-medium text-gray-600">Offline Capability</p>
            </NeubrutalistCard>
          </motion.div>
        </motion.div>

        {/* Value Prop 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <NeubrutalistCard color="peach" className="-rotate-1 p-0 overflow-hidden">
            <div className="relative w-full">
              <Image
                src="/images/Main_Page_2nd_img.295Z.png"
                alt="Offline Capability Illustration"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </NeubrutalistCard>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">No Internet? No Problem.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Farmers in remote areas often lack stable internet. GreenFlux's AI model runs entirely on-device, ensuring instant diagnosis anywhere, anytime.
            </p>
          </div>
        </motion.div>

        {/* Value Prop 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-4xl font-bold">Speaks Your Language.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Designed for accessibility. GreenFlux supports multiple local languages including Urdu and English, making advanced agritech accessible to everyone.
            </p>
          </div>
          <NeubrutalistCard color="pastelBlue" className="rotate-1 order-1 md:order-2 p-0 overflow-hidden">
            <div className="relative w-full">
              <Image
                src="/images/Main_Page_3rd_img.911Z.png"
                alt="Multi-language Support Illustration"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </NeubrutalistCard>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t-2 border-black py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold">GreenFlux</div>
          <div className="text-gray-600">© 2025 NextGen Team. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
