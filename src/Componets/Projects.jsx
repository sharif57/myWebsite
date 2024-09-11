import { FaGithub, FaLink } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

const Projects = () => {
    return (
        <div>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-14">
                <div className="overflow-hidden lg:p-0 p-4 rounded-lg border border-gray-100 bg-white shadow-xl hover:shadow-2xl">
                    <img
                        alt="Project"
                        src="https://i.ibb.co.com/sbrxgvb/Screenshot-2024-09-11-205020.png"
                        className="h-56 w-full object-cover"
                    />

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-2xl font-medium text-gray-900">
                                FutureTech
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            The FutureTech blog website features a sleek, modern UI with a focus on tech-related content. The homepage includes a hero section with featured posts, followed by a grid layout for articles. A sticky navbar and search bar enhance navigation, while the responsive design ensures seamless usability on all devices.
                        </p>

                        <div
                            className=" flex justify-between items-center">
                            <a className="flex gap-2 items-center mt-4" href="https://future-tech-blog.netlify.app/"><button
                                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                            >
                                <span
                                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                                ></span>
                                <span
                                    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                >Live Link
                                </span>
                            </button> </a>

                            <a className="flex gap-2 items-center mt-4" href="https://github.com/sharif57/Future-Tech-Client"><button
                                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                            >
                                <span
                                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                                ></span>
                                <span
                                    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                >Github
                                </span>
                            </button></a>
                        </div>

                        <div>
                            <p className="mt-5 text-2xl font-semibold mb-5">Techs I Used</p>
                            <div>
                                <div className="lg:flex justify-between">
                                    <img
                                        align="left"
                                        alt="Visual Studio Code"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="HTML5"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="CSS3"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <RiTailwindCssFill className="size-10" />
                                    <img
                                        align="left"
                                        alt="JavaScript"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="React"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="Node.js"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="MongoDB"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="Git"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="overflow-hidden lg:p-0 p-4 rounded-lg border border-gray-100 bg-white shadow-xl hover:shadow-2xl">
                    <img
                        alt="Project"
                        src="https://i.ibb.co/VShQYs0/Screenshot-2024-07-03-122142.png0"
                        className="h-56 w-full object-cover"
                    />

                    <div className="p-4 sm:p-6 ">
                        <a href="#">
                            <h3 className="text-2xl font-medium text-gray-900">
                                Docbase
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Develop a dynamic and interactive forum application using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The platform will facilitate user interactions through posted messages, allowing users to engage in meaningful discussions on various topics. Key features include user authentication, real-time updates, responsive design, and a user-friendly interface. The forum will support functionalities like voting on posts, adding comments, and managing user profiles, all while adhering to best practices in security and performance. This project aims to enhance your development skills and contribute to creating a robust web application that fosters community engagement.
                        </p>
                        <div
                            className=" flex justify-between items-center">
                            <a className="flex gap-2 items-center mt-4" href="https://forum-fb0f7.web.app/"> <span className="">
                                <button
                                    className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                                >
                                    <span
                                        className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                    >
                                        <span
                                            className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                        ></span>
                                    </span>
                                    <span
                                        className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                    >
                                        <span
                                            className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                        ></span>
                                    </span>
                                    <span
                                        className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                                    ></span>
                                    <span
                                        className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                    >Live Link
                                    </span>
                                </button>

                            </span></a>

                            <a className="flex gap-2 items-center mt-4" href="https://github.com/sharif57/Form-client"> <span className="">
                                <button
                                    className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                                >
                                    <span
                                        className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                    >
                                        <span
                                            className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                        ></span>
                                    </span>
                                    <span
                                        className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                    >
                                        <span
                                            className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                        ></span>
                                    </span>
                                    <span
                                        className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                                    ></span>
                                    <span
                                        className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                    >Github
                                    </span>
                                </button>
                            </span></a>
                        </div>
                        <div>
                            <p className="mt-5 text-2xl font-semibold mb-5">Techs I Used</p>
                            <div>
                                <div className="lg:flex justify-between">
                                    <img
                                        align="left"
                                        alt="Visual Studio Code"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="HTML5"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="CSS3"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <RiTailwindCssFill className="size-10" />
                                    <img
                                        align="left"
                                        alt="JavaScript"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="React"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="Node.js"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="MongoDB"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="Git"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />


                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="overflow-hidden lg:p-0 p-4 rounded-lg border border-gray-100 bg-white shadow-xl hover:shadow-2xl">
                    <img
                        alt="Project"
                        src="https://i.ibb.co/DfSZKCJ/Screenshot-2024-07-03-123402.png"
                        className="h-56 w-full object-cover"
                    />

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-2xl font-medium text-gray-900">
                                Art and Craft Store
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Welcome to Artistry Haven, your premier online destination for exquisite painting and drawing art pieces. Explore a curated collection of landscape paintings, portrait drawings, watercolor art, oil paintings, charcoal sketches, and cartoon drawings.
                        </p>
                        <div
                            className="flex justify-between items-center">
                            <a className="flex gap-2 items-center mt-4" href="https://art-and-craft-store-4c535.web.app/">
                                <button
                                    className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                                >
                                    <span
                                        className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                    >
                                        <span
                                            className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                        ></span>
                                    </span>
                                    <span
                                        className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                    >
                                        <span
                                            className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                        ></span>
                                    </span>
                                    <span
                                        className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                                    ></span>
                                    <span
                                        className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                    >Live Link
                                    </span>
                                </button>
                            </a>

                            <a className="flex gap-2 items-center mt-4" href="https://github.com/sharif57/art-and-craft-store-client">
                                <button
                                    className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                                >
                                    <span
                                        className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                    >
                                        <span
                                            className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                        ></span>
                                    </span>
                                    <span
                                        className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                    >
                                        <span
                                            className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                        ></span>
                                    </span>
                                    <span
                                        className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                                    ></span>
                                    <span
                                        className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                    >Github
                                    </span>
                                </button>
                            </a>
                        </div>

                        <div>
                            <p className="mt-5 text-2xl font-semibold mb-5">Techs I Used</p>
                            <div>
                                <div className="lg:flex justify-between">
                                    <img
                                        align="left"
                                        alt="Visual Studio Code"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="HTML5"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="CSS3"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <RiTailwindCssFill className="size-10" />
                                    <img
                                        align="left"
                                        alt="JavaScript"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="React"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="Node.js"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="MongoDB"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="Git"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden lg:p-0 p-4 rounded-lg border border-gray-100 bg-white shadow-xl hover:shadow-2xl">
                    <img
                        alt="Project"
                        src="https://i.ibb.co/jHZ5sJN/Screenshot-2024-07-03-122708.png"
                        className="h-56 w-full object-cover"
                    />

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-2xl font-medium text-gray-900">
                                Volunteer Management Website
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Are you ready to embark on a thrilling web development adventure? We're seeking a bright and curious Junior MERN Stack Developer to join our awesome team. You'll get to work side-by-side with our expert developers on cutting-edge projects using hot technologies like MongoDB (databases), Express.js (backend), React.js (frontend), and Node.js (runtime environment). This is your chance to level up your skills and be a part of building innovative web applications that make a real impact.
                        </p>

                        <div
                            className=" flex justify-between items-center">
                            <a className="flex gap-2 items-center mt-4" href="https://volunteer-e0eac.web.app/"><button
                                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                            >
                                <span
                                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                                ></span>
                                <span
                                    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                >Live Link
                                </span>
                            </button> </a>

                            <a className="flex gap-2 items-center mt-4" href="https://github.com/sharif57/Volunteer-client"><button
                                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                            >
                                <span
                                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                                ></span>
                                <span
                                    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                >Github
                                </span>
                            </button></a>
                        </div>

                        <div>
                            <p className="mt-5 text-2xl font-semibold mb-5">Techs I Used</p>
                            <div>
                                <div className="lg:flex justify-between">
                                    <img
                                        align="left"
                                        alt="Visual Studio Code"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="HTML5"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="CSS3"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <RiTailwindCssFill className="size-10" />
                                    <img
                                        align="left"
                                        alt="JavaScript"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="React"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="Node.js"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="MongoDB"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="Git"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="overflow-hidden lg:p-0 p-4 rounded-lg border border-gray-100 bg-white shadow-xl hover:shadow-2xl">
                    <img
                        alt="Project"
                        src="https://i.ibb.co.com/71BHmMc/Screenshot-2024-09-11-210227.png"
                        className="h-56  w-full object-cover"
                    />

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-2xl font-medium text-gray-900">
                            ByteBlaze
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        The website byteblaze-sm.netlify.app showcases a modern, tech-focused platform with a clean and minimalist design. It likely features key offerings, a navigation bar, and call-to-action buttons, all presented in a responsive layout.
                        </p>

                        <div
                            className=" flex justify-between items-center">
                            <a className="flex gap-2 items-center mt-4" href="https://byteblaze-sm.netlify.app/"><button
                                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                            >
                                <span
                                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                                ></span>
                                <span
                                    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                >Live Link
                                </span>
                            </button> </a>

                            <a className="flex gap-2 items-center mt-4" href="https://github.com/sharif57/ByteBlaze"><button
                                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                            >
                                <span
                                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                                ></span>
                                <span
                                    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                >Github
                                </span>
                            </button></a>
                        </div>

                        <div>
                            <p className="mt-5 text-2xl font-semibold mb-5">Techs I Used</p>
                            <div>
                                <div className="lg:flex justify-between">
                                    <img
                                        align="left"
                                        alt="Visual Studio Code"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="HTML5"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="CSS3"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <RiTailwindCssFill className="size-10" />
                                    <img
                                        align="left"
                                        alt="JavaScript"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="React"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="Node.js"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="MongoDB"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="Git"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="overflow-hidden lg:p-0 p-4 rounded-lg border border-gray-100 bg-white shadow-xl hover:shadow-2xl">
                    <img
                        alt="Project"
                        src="https://i.ibb.co.com/QJtWzXL/Screenshot-2024-09-11-210949.png"
                        className="h-56  w-full object-cover"
                    />

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-2xl font-medium text-gray-900">
                            Tech Store
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        The website tech-store-all.netlify.app appears to be an e-commerce platform focused on selling tech products. It likely features a clean, modern design with a product catalog, search functionality, categories, and filtering options. The homepage might highlight featured or trending products, with a clear navigation bar leading to product categories, a shopping cart, and user account options. The site likely emphasizes a responsive and user-friendly shopping experience.
                        </p>

                        <div
                            className=" flex justify-between items-center">
                            <a className="flex gap-2 items-center mt-4" href="https://tech-store-all.netlify.app/"><button
                                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                            >
                                <span
                                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                                ></span>
                                <span
                                    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                >Live Link
                                </span>
                            </button> </a>

                            <a className="flex gap-2 items-center mt-4" href="https://github.com/sharif57/store-client"><button
                                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                            >
                                <span
                                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                                ></span>
                                <span
                                    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                >Github
                                </span>
                            </button></a>
                        </div>

                        <div>
                            <p className="mt-5 text-2xl font-semibold mb-5">Techs I Used</p>
                            <div>
                                <div className="lg:flex justify-between">
                                    <img
                                        align="left"
                                        alt="Visual Studio Code"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="HTML5"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="CSS3"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <RiTailwindCssFill className="size-10" />
                                    <img
                                        align="left"
                                        alt="JavaScript"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="React"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="Node.js"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="MongoDB"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />
                                    <img
                                        align="left"
                                        alt="Git"
                                        width="40px"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                        style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                                    />


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                


            </div>

        </div>
    );
};

export default Projects;
