import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { saveAs } from 'file-saver';
import { ReactTyped } from 'react-typed'; // Use named import

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const handleDownload = () => {
        const fileUrl = 'https://heyzine.com/flip-book/345bee5e96.html';
        const fileName = 'CV.png';
        saveAs(fileUrl, fileName);
    };

    return (
        <div className="relative lg:h-[640px] bg-slate-100">
            <section className="relative lg:flex justify-between items-center bg-cover bg-center bg-no-repeat">
                <div className="p-5 lg:p-0 lg:w-1/2">
                    <div className="lg:p-4 pt-24">
                        {/* <h3  className="">Hi, I am</h3> */}
                        <ReactTyped
                            className='text-5xl mb-7'
                            strings={['Hi, I am']}
                            typeSpeed={40}
                        />
                        <br />
                        <ReactTyped
                            className='banner-title lg:text-6xl text-3xl mb-6 font-bold'
                            strings={['Sharif <span style={{color: "red"}}>Mahamud</span>']}
                            typeSpeed={40}
                        />
                        <div>
                            <div className="mt-4">
                                <ReactTyped
                                    strings={[
                                        "Hello! I'm Sharif Mahamud, a passionate Junior Web Developer eager to contribute to cutting-edge web projects. Proficient in front-end development using HTML, CSS, JavaScript, and React, with a solid understanding of back-end technologies like Node.js and Express."
                                    ]}
                                    typeSpeed={100}
                                    backSpeed={50}
                                    loop
                                />
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-delay="500" className="mt-8 flex flex-wrap gap-4 text-center">
                            <button
                                onClick={handleDownload}
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Download CV
                            </button>
                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:relative lg:fixed lg:right-0 lg:top-0 lg:bottom-0 lg:h-full">
                    <img
                        data-aos="zoom-in-up"
                        data-aos-delay="1000"
                        className="h-full w-full object-cover"
                        src="https://i.ibb.co/WGdWyx1/20240502162307521-jpeg-removebg-preview.png"
                        alt="Sharif Mahamud"
                    />
                </div>
            </section>
        </div>
    );
};

export default Banner;
