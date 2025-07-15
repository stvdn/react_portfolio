import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { ABOUT_TEXT } from "../constants";


export default function About() {
    return (
        <div id="about" className="min-h-screen border-b border-neutral-900 pb-4">
            <div className="flex min-h-screen flex-col justify-center">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="mt-32 mb-20 text-center text-4xl"
                >

                    About
                    <span className="text-neutral-500"> Me</span>
                </motion.h1>
                <div className="flex flex-wrap">
                    <motion.div
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex items-center justify-center h-[450px]">
                            <Spline scene="https://prod.spline.design/zQJ7sAaGK8lsjCtI/scene.splinecode" />

                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/2">
                        <div className="flex justify-center lg:justify-start">
                            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}