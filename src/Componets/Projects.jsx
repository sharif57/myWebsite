


const Projects = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 mt-14">
                <a href="https://forum-fb0f7.web.app/" className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                    <img
                        alt="Project"
                        src="https://i.ibb.co/VShQYs0/Screenshot-2024-07-03-122142.png0"
                        className="h-56 w-full object-cover"
                    />

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-2xl font-medium text-gray-900">
                                Social Media Forum
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Develop a dynamic and interactive forum application using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The platform will facilitate user interactions through posted messages, allowing users to engage in meaningful discussions on various topics. Key features include user authentication, real-time updates, responsive design, and a user-friendly interface. The forum will support functionalities like voting on posts, adding comments, and managing user profiles, all while adhering to best practices in security and performance. This project aims to enhance your development skills and contribute to creating a robust web application that fosters community engagement.
                        </p>


                    </div>
                </a>
                <a href="https://volunteer-e0eac.web.app/" className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
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



                    </div>
                </a>
                <a href="https://art-and-craft-store-4c535.web.app/" className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
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


                    </div>
                </a>

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
