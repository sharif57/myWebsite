

const Banner = () => {
    return (
        <div className="h[800px]">
            {/* <div className="banner lg:flex sm:flex-col-reverse">
                <div className="banner-content">
                    <h3 className="banner-greeting">Hi, I am</h3>
                    <h1 className="banner-title text-6xl mb-6 font-bold">Sharif <span className='text-orange-400'>Mahamud</span></h1>
                    <p className="paragraph"> </p>
                    <button className="btn-primary mr-4"> <i className="fa-solid fa-download"></i> Download CV</button>
                    <button className="btn-primary"><i className="fa-solid fa-phone"></i> Contact</button>
                </div>
                <img className="profile-pic" src="https://i.ibb.co/WGdWyx1/20240502162307521-jpeg-removebg-preview.png" alt="Mary Hardy" />
            </div> */}
           

            <section
                className="relative lg:flex justify-between items-center  bg-cover bg-center bg-no-repeat"
            >
               

                <div
                    className=""
                >
                    <div className="">
                    <h3 className="text-5xl mb-7">Hi, I am</h3>
                    <h1 className="banner-title text-6xl mb-6 font-bold">Sharif <span className='text-orange-400'>Mahamud</span></h1>

                        <p className="mt-4 ">
                        Hello! I'm Sharit Mahamud, a passionate Junior Web Developer eager to contribute to cutting-edge web projects. Proficient in front-end development using HTML, CSS, JavaScript, and React, with a solid understanding of back-end technologies like Node.js and Express.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <img className="h-[500px]" src="https://i.ibb.co/WGdWyx1/20240502162307521-jpeg-removebg-preview.png" alt="Mary Hardy" />
            </section>
            
        </div>
    );
};

export default Banner;
