
const Site = () => {
    return (
        <div>
            <div>
                <div>
                    <h1 className="lg:text-5xl text-3xl lg:w-1/2 mx-auto text-center font-bold mt-10">CREATE A AMAZING SITE TODAY!</h1>
                </div>
                <div className="text-center lg:flex flex-col lg:justify-center  mt-10 items-center">
                    <div className="text-center lg:flex gap-5">
                        <li className="text-xl font-bold">Responsive Design</li>
                        <li className="text-xl font-bold">Fast Performance</li>
                        <li className="text-xl font-bold">Standard Code</li>
                    </div>
                    <div className="text-center lg:flex gap-5 lg:mt-5">
                        <li className="text-xl font-bold">Easy To Customize</li>
                        <li className="text-xl font-bold">Reatina Ready</li>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4 lg:grid-cols-4 mt-8 gap-5">
                       

                        <article className="overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-xl ">
                            

                            <div className="p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="text-xl  font-semibold text-gray-900">
                                    Responsive Designs
                                    </h3>
                                </a>

                                <p className="mt-2 lg:text-xl text-gray-500">
                                Experience flawless viewing on any device. Our templates adapt seamlessly to all screen sizes, ensuring your portfolio looks stunning whether on a desktop, tablet, or smartphone.
                                </p>
                            </div>
                        </article>
                        <article className="overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-xl">
                            

                            <div className="p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="text-2xl font-medium text-gray-900">
                                    Modern Layouts
                                    </h3>
                                </a>

                                <p className="mt-2 lg:text-xl text-gray-500">
                                Stand out with sleek, contemporary designs. Our templates feature cutting-edge aesthetics that give your portfolio a polished and professional appearance.
                                </p>
                            </div>
                        </article>
                        <article className="overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-xl">
                            

                            <div className="p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="text-2xl font-medium text-gray-900">
                                    Regular Updates
                                    </h3>
                                </a>

                                <p className="mt-2 lg:text-xl text-gray-500">
                                Stay ahead of the curve with our continuous improvements. We regularly update our templates to incorporate the latest trends and technologies, keeping your portfolio fresh and relevant.
                                </p>
                            </div>
                        </article>
                        <article className="overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-xl">
                            

                            <div className="p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="text-2xl font-medium text-gray-900">
                                    Easy Navigation
                                    </h3>
                                </a>

                                <p className="mt-2 text-xl text-gray-500">
                                Enjoy intuitive and user-friendly interfaces. Our templates are designed for smooth and effortless navigation, allowing your visitors to explore the work with ease.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Site;