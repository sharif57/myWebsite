import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactTyped } from 'react-typed'; // Use named import

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const handleDownload = () => {
        const fileUrl = 'https://drive.google.com/file/d/1JxZ_nXCLrQIy-Lj9BaqC0EQkWuErv-0f/view';
        window.open(fileUrl, '_blank'); // Opens the link in a new tab
    };

    return (
        <div className="relative lg:h-[640px] ">
            <section className="relative lg:flex justify-between items-center bg-cover bg-center bg-no-repeat">
                <div className="p-5 lg:p-0 lg:w-1/2">
                    <div className="lg:p-4 pt-24">
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
                                />
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-delay="500" className="mt-8 flex flex-wrap gap-4 text-center">
                            <button onClick={handleDownload} className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
                                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                                    <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Interface / Download">
                                            <path
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                                stroke="#f1f1f1"
                                                d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                                                id="Vector"
                                            ></path>
                                        </g>
                                    </g>
                                </svg>
                                Download
                                <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                                    Download
                                </div>
                            </button>
                            <button
                                href="#"
                                className="btn btn-outline"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:relative lg:fixed lg:right-0 lg:top-0 lg:bottom-0 lg:h-full">
                    <img
                        data-aos="zoom-in-up"
                        data-aos-delay="1000"
                        className="h-full w-full shadow-lg object-cover rounded-full border-r-[40px] border-l-4 border-b-8 border-t-8 bg-[#fff5f0] border-indigo-200"
                        src="https://i.ibb.co/WGdWyx1/20240502162307521-jpeg-removebg-preview.png"
                        alt="Sharif Mahamud"
                    />
                </div>
            </section>
        </div>
    );
};

export default Banner;
