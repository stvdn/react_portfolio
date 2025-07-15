import Spline from "@splinetool/react-spline";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay: any) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
});

export default function Home() {
    return (
        <div id="home" className="min-h-screen border-b border-neutral-900 pb-4">
            <div className="flex min-h-screen flex-wrap items-center">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            whileInView="visible"
                            className="pb-16 text-6xl font-thin text-center lg:mt-16 "

                        >
                            Steven Peñafiel
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-3xl tracking-tight text-transparent">
                            Software Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            whileInView="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center h-[500px]"> {/* Added fixed height */}
                        <Spline scene="https://prod.spline.design/gmm2ifFb0zqiAI4N/scene.splinecode" />
                    </div>
                </div>
            </div>
        </div>
    );
}