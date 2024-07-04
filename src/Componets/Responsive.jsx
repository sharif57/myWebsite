import { AiOutlineLaptop } from "react-icons/ai";
import { FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const Responsive = () => {
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="container">
            <h1 className="lg:text-7xl font-bold text-center mt-10">Full Responsive Design</h1>
            <div className="mt-16 w-1/2 mx-auto">
                <img src="https://up2client.com/envato/biogi/assets/images/lapi-img2.png" alt="" />
            </div>

            <div data-aos="fade-up"
                data-aos-anchor-placement="center-center" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center mt-12">
                <div>
                    <div className="w-2/4 mx-auto">
                        {/* <img src="https://up2client.com/envato/biogi/assets/images/responsive-icon1.svg" alt="" /> */}
                        <MdComputer className="size-28 mx-auto" />
                    </div>
                    <h1 className="mt-4 mb-4 text-xl">1920 x 1080px</h1>
                    <p className="text-xl">Full Screen Layout</p>
                </div>
                <div>
                    <div className="w-2/4 mx-auto">
                        <AiOutlineLaptop className="size-28 mx-auto" />
                    </div>
                    <h1 className="mt-4 mb-4 text-xl">1364 x 768px</h1>
                    <p className="text-xl">Laptop Screen Layout</p>
                </div>
                <div>
                    <div className="w-2/4 mx-auto">
                        <FaTabletAlt className="size-28 mx-auto" />
                    </div>
                    <h1 className="mt-4 mb-4 text-xl">1024 x 768px</h1>
                    <p className="text-xl">Tablet Screen Layout</p>
                </div>
                <div>
                    <div className="w-2/4 mx-auto">
                        <FaMobileAlt className="size-28 mx-auto" />
                    </div>
                    <h1 className="mt-4 mb-4 text-xl">767 x 365px</h1>
                    <p className="text-xl">Mobile Screen Layout</p>
                </div>
            </div>
        </div>
    );
};

export default Responsive;