import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold mb-10">Get In Touch. <hr /></h1>
            <p className="text-xl mb-11 font-medium">TAKE A COFFEE & CHAT WITH ME</p>
            <div className="flex gap-4 mb-4">
                <a href="https://www.facebook.com/sharif.mahamud.5682?mibextid=kFxxJD">         <p><FaFacebook className="size-10"></FaFacebook></p></a>
                <a href="https://www.linkedin.com/in/sharif-mahamud?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><p><FaLinkedin className="size-10"></FaLinkedin></p></a>
                <a href="https://telegram.org/dl"><p><FaTelegram className="size-10"></FaTelegram></p></a>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 grid-cols-1">
                <div className="lg:flex gap-5 items-center bg-slate-200 p-6">
                    <p className=""><MdEmail className="size-14 p-3 bg-blue-500"></MdEmail></p>
                    <div>
                        <h1 className="text-3xl font-semibold">Email</h1>
                        <p className="text-3xl font-semibold">sharifmahamud677951@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-5 items-center bg-slate-200 p-6">
                    <p className=""><MdPhone className="size-14 p-3 bg-blue-500"></MdPhone></p>
                    <div>
                        <h1 className="text-3xl font-semibold">Phone</h1>
                        <p className="text-3xl font-semibold">01611198984</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-6 flex justify-around gap-8 ">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input type="text" placeholder="your name " className="input input-bordered w-full " />

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="text" placeholder="your email" className="input input-bordered w-full " />

                    </label>
                </div>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Subject</span>
                    </div>
                    <input type="text" placeholder="your subject" className="input input-bordered w-full " />

                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Message</span>
                    </div>
                    <input type="text" placeholder="write your text...." className="input input-bordered w-full " />

                </label>
                <button className="btn mt-6 btn-warning">Submit Now</button>
            </div>
        </div>
    );
};

export default Contact;