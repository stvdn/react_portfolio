import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div id="projects" className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="mb-8 space-x-6 space-y-6 flex flex-wrap lg:justify-center cursor-pointer"
                        onClick={() => window.open(project.repo, "_blank")}
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-2/4 flex justify-center items-stretch"
                        >
                            <div className="w-full h-64 lg:h-auto max-h-[300px] overflow-hidden rounded flex-1">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover rounded"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-2/4"
                        >
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap items-start space-y-2">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}