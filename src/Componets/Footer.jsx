import { FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="px-4 divide-y mt-4 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">

                            <img className="size-28" src="https://i.ibb.co/F3HTyH7/Blue-White-Dots-Beverages-Drinks-Logo-removebg-preview.png" alt="" />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-900">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Features</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Integrations</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Pricing</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Privacy</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase dark:text-gray-900">Developers</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Public API</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Documentation</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Guides</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase dark:text-gray-900">Social media</div>
                            <div className="flex justify-start space-x-3">
                                <div className="flex gap-1 mb-4">
                                    <a href="https://www.facebook.com/sharif.mahamud.5682?mibextid=kFxxJD">
                                        <img className="size-10" src="https://i.ibb.co/gdC6bMZ/5296499-fb-facebook-facebook-logo-icon.png" alt="" /></a>
                                    <a href="https://www.linkedin.com/in/sharif-mahamud?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><p><img className="size-10" src="https://i.ibb.co/X7NvF3H/5296501-linkedin-network-linkedin-logo-icon.png" alt="" /></p></a>
                                    <a href="https://telegram.org/dl"><p><img className="size-10" src="https://i.ibb.co/gMNKBkj/3057660-media-message-network-social-icon.png" alt="" /></p></a>
                                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                                        <img className="size-10" src="https://i.ibb.co/Svy4VRW/4202011-email-gmail-mail-logo-social-icon.png" alt="" />
                                    </a>
                                    <a href="https://call.whatsapp.com/video/uieXkk0LM5uc7LApN9QTwM">
                                        <img className="size-10" src="https://i.ibb.co/Fwy92nh/5296520-bubble-chat-mobile-whatsapp-whatsapp-logo-icon.png" alt="" />
                                    </a>
                                    <a href="https://www.instagram.com/sharif.mahamud.5682?igsh=MXF5NjA0ZnMxYWJ3cA==">
                                        <img className="size-10" src="https://i.ibb.co/YdbKVdc/5296765-camera-instagram-instagram-logo-icon.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center dark:text-gray-600">© 1968 Company Co. All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Footer;