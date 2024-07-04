

const Contact = () => {
    return (
        <div className="pt-24 p-4">
            <h1 className="lg:text-5xl text-3xl font-bold mb-10">Get In Touch. <hr /></h1>
            <p className="text-xl mb-11 font-medium">TAKE A COFFEE & CHAT WITH ME</p>
            <div className="flex gap-4 mb-4">
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
            <div className="grid gap-6 lg:grid-cols-2 grid-cols-1 w-full">


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