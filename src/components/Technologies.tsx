import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { VscTerminalPowershell } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { motion, type Easing, type RepeatType } from "framer-motion";

const iconVariants = (duration: any) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear" as Easing,
            repeat: Infinity,
            repeatType: "reverse" as RepeatType
        }
    }
});

export default function Technologies() {
    return (
        <div id="technologies" className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center rounded-2xl border-2 border-neutral-300 p-4"
                >
                    <RiReactjsLine className="text-7xl text-cyan-500" />
                    <div className="mt-2">React</div>
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center rounded-2xl border-2 border-neutral-300 p-4"
                >                    <FaPython className="text-7xl text-blue-700" />
                    <div className="mt-2">Python</div>
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center rounded-2xl border-2 border-neutral-300 p-4"
                >                    <SiTypescript className="text-7xl text-blue-600" />
                    <div className="mt-2">TypeScript</div>
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center rounded-2xl border-2 border-neutral-300 p-4"
                >
                    <FaDocker className="text-7xl text-sky-500" />
                    <div className="mt-2">Docker</div>
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center rounded-2xl border-2 border-neutral-300 p-4"
                >                    <VscTerminalPowershell className="text-7xl text-blue-900" />
                    <div className="mt-2">PowerShell</div>
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center rounded-2xl border-2 border-neutral-300 p-4"
                >                    <FaGithub className="text-7xl text-neutral-300" />
                    <div className="mt-2">GitHub</div>
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center rounded-2xl border-2 border-neutral-300 p-4"
                >                    <SiJira className="text-7xl text-blue-800" />
                    <div className="mt-2">Jira</div>
                </motion.div>
            </motion.div>
        </div >
    )
}