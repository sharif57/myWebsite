
const About = () => {
    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold">About Me. <hr /></h1>
                <p className="mt-8">Hello! I'm Sharif Mahamud, a dedicated web developer with a passion for crafting clean and efficient code. With a background in [mention your education or relevant experience], I specialize in front-end development using HTML, CSS, and JavaScript, with proficiency in frameworks like React.js. I am also skilled in back-end development using Node.js and Express, and I have experience working with databases such as MongoDB.

                    I enjoy turning ideas into intuitive, user-friendly interfaces and collaborating with cross-functional teams to deliver high-quality web applications. My attention to detail, problem-solving abilities, and commitment to continuous learning allow me to stay updated with the latest industry trends and technologies.

                    Outside of coding, I love [mention any hobbies or interests related to your personal life or professional development]. I am eager to contribute my skills and enthusiasm to your team and help create innovative solutions that make a positive impact.

                    Let's connect and discuss how we can work together to achieve your project goals!</p>
            </div>
            <div className="mt-10">
                <div>
                    <h1 className="text-2xl font-semibold mb-4">Name : Sharif Mahamud</h1>
                    <h1 className="text-2xl font-semibold mb-4">Nationality : Bangladeshi</h1>
                    <h1 className="text-2xl font-semibold mb-4">Phone : 01611198984</h1>
                    <h1 className="text-2xl font-semibold mb-4">Email : sharifmahamud577951@gmail.com</h1>
                    <h1 className="text-2xl font-semibold mb-4">Gender : Male</h1>
                    <h1 className="text-2xl font-semibold mb-4">Age : 22</h1>
                    <h1 className="text-2xl font-semibold mb-4">Marital : Single</h1>
                    <h1 className="text-2xl font-semibold mb-4">Passion : Developer</h1>
                </div>
            </div>

            <div>
                <h1 className="text-5xl mt-8 font-bold mb-6">Education. <hr /></h1>
                <div className="space-y-4">
                    <details
                        className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                        open
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900">

                                BACHELOR IN SCIENCE
                            </h2>

                            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Hello! I'm Sharif Mahamud, a dedicated web developer with a strong foundation in computer science. I hold a Bachelor of Science in Computer Science (BSc CSE), which has equipped me with a deep understanding of algorithms, data structures, and software engineering principles.

                            Throughout my academic journey, I specialized in [mention any specific areas of focus or courses, e.g., software development, database management, networking]. This educational background has laid the groundwork for my proficiency in web development, where I excel in front-end technologies like HTML, CSS, and JavaScript, as well as frameworks such as React.js.
                        </p>
                    </details>

                    <details
                        className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900">
                                DIPLOMA IN COMPUTER
                            </h2>

                            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Greetings! I'm Sharif Mahamud, a passionate web developer with a solid foundation in computer studies. I hold a Diploma in Computer Studies, which has equipped me with comprehensive knowledge in software development, database management, and network administration.

                            My academic journey provided me with hands-on experience in [mention specific areas covered in your diploma, e.g., programming languages, system analysis, web development]. This education laid a robust groundwork for my proficiency in web technologies, including HTML, CSS, JavaScript, and frameworks like React.js.
                        </p>
                    </details>
                </div>
                <div>
                    <h1 className="text-5xl font-bold mt-8 mb-9">Development Skills. <hr /></h1>
                    <div className="flex justify-between">
                        <img
                            align="left"
                            alt="Visual Studio Code"
                            width="90px"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                            style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                        />
                        <img
                            align="left"
                            alt="HTML5"
                            width="90px"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                        />
                        <img
                            align="left"
                            alt="CSS3"
                            width="90px"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                        />
                        <img
                            align="left"
                            alt="JavaScript"
                            width="90px"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                        />
                        <img
                            align="left"
                            alt="React"
                            width="90px"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                        />
                        <img
                            align="left"
                            alt="Node.js"
                            width="90px"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                        />
                        <img
                            align="left"
                            alt="MongoDB"
                            width="90px"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                            style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                        />
                        <img
                            align="left"
                            alt="Git"
                            width="90px"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                            style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                        />

                        <img
                            align="left"
                            alt="GitHub"
                            width="90px"
                            src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png"
                            style={{ paddingRight: '10px' }} // Correct usage of style prop with an object
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;