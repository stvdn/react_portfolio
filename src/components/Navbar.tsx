import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-full backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Mobile menu button */}
                    <div className="flex sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden sm:block">
                        <ul className="flex space-x-8">
                            <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
                            <li><a href="#experience" className="text-gray-300 hover:text-white">Experience</a></li>
                            <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center space-x-4">
                        <a href="https://www.linkedin.com/in/stevendanny/" target="_blank" className="text-gray-300 cursor-pointer hover:text-white">
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a href="https://github.com/stvdn/" target="_blank" className="text-gray-300 cursor-pointer hover:text-white">
                            <FaGithub className="text-2xl" />
                        </a>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                    <ul className="px-2 pt-2 pb-3 space-y-1">
                        <li><a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a></li>
                        <li><a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a></li>
                        <li><a href="#experience" className="block px-3 py-2 text-gray-300 hover:text-white">Experience</a></li>
                        <li><a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-white">Projects</a></li>
                        <li><a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}