

import { saveAs } from 'file-saver';
const Banner = () => {
    const handleDownload = () => {
        const fileUrl = 'https://i.ibb.co/TYJsn2H/Screenshot-2024-07-03-232752.png';
        const fileName = 'CV.png';
        saveAs(fileUrl, fileName);
    };
    return (
        <div className="lg:h[800px] ">



            <section
                className="relative lg:flex justify-between items-center  bg-cover bg-center bg-no-repeat"
            >


                <div
                    className="p-5 lg:p-0"
                >
                    <div className="lg:p-4 pt-24">
                        <h3 className="text-5xl mb-7">Hi, I am</h3>
                        <h1 className="banner-title lg:text-6xl text-3xl mb-6 font-bold">Sharif <span className='text-orange-400'>Mahamud</span></h1>

                        <p className="mt-4 ">
                            Hello! I'm Sharit Mahamud, a passionate Junior Web Developer eager to contribute to cutting-edge web projects. Proficient in front-end development using HTML, CSS, JavaScript, and React, with a solid understanding of back-end technologies like Node.js and Express.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
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
                <img className="lg:h-[600px] fh-[300px] w-full" src="https://i.ibb.co/WGdWyx1/20240502162307521-jpeg-removebg-preview.png" alt="Mary Hardy" />
                
            </section>c

        </div>
    );
};

export default Banner;
