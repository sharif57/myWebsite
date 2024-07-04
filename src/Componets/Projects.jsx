import { FaGithub, FaLink } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

const Projects = () => {
    return (
        <div>
            <div  data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 mt-14">
                <div
                    className="overflow-hidden lg:p-0 p-4 rounded-lg border border-gray-100 bg-white shadow-xl hover:shadow-2xl">
                    <img
                        alt="Project"
                        src="https://i.ibb.co/VShQYs0/Screenshot-2024-07-03-122142.png0"
                        className="h-56 w-full object-cover"
                    />

                    <div className="p-4 sm:p-6 ">
                        <a href="#">
                            <h3 className="text-2xl font-medium text-gray-900">
                                Social Media Forum
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Develop a dynamic and interactive forum application using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The platform will facilitate user interactions through posted messages, allowing users to engage in meaningful discussions on various topics. Key features include user authentication, real-time updates, responsive design, and a user-friendly interface. The forum will support functionalities like voting on posts, adding comments, and managing user profiles, all while adhering to best practices in security and performance. This project aims to enhance your development skills and contribute to creating a robust web application that fosters community engagement.
                        </p>
                        <div
                            className="">
                            <a className="flex gap-2 items-center mt-4" href="https://forum-fb0f7.web.app/"> <FaLink></FaLink><span className="text-blue-500 underline">https://forum-fb0f7.web.app/</span></a>

                            <a className="flex gap-2 items-center mt-4" href="https://github.com/sharif57/Form-client"> <FaGithub></FaGithub><span className="text-blue-500 underline">https://github.com/sharif57/Form-client</span></a>
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
                            className="">
                            <a className="flex gap-2 items-center mt-4" href="https://volunteer-e0eac.web.app/"> <FaLink></FaLink><span className="text-blue-500 underline">https://volunteer-e0eac.web.app/</span></a>

                            <a className="flex gap-2 items-center mt-4" href="https://github.com/sharif57/Volunteer-client"> <FaGithub></FaGithub><span className="text-blue-500 underline">https://github.com/sharif57/Volunteer-client</span></a>
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
                            className="">
                            <a className="flex gap-2 items-center mt-4" href="https://art-and-craft-store-4c535.web.app/"> <FaLink></FaLink><span className="text-blue-500 underline">https://art-and-craft-store-4c535.web.app/</span></a>

                            <a className="flex gap-2 items-center mt-4" href="https://github.com/sharif57/art-and-craft-store-client"> <FaGithub></FaGithub><span className="text-blue-500 underline">https://github.com/sharif57/art-and-craft-store-client</span></a>
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

                <div className="card bg-white shadow-xl">
                    <figure className="px-4 pt-10">
                        <img
                            src="https://up2client.com/envato/biogi/assets/images/coming-soon.jpg"
                            alt="Shoes"
                            className="rounded-xl h-[200px] w-[700px]" />
                    </figure>
                    <div className="card-body items-start text-center">
                        <h2 className="card-title text-black text-2xl font-bold">Coming Soon</h2>
                        <p className="text-black">Coming Soon</p>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Projects;
