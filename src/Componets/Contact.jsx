
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    // GmailSend
    // service_4itp2bm

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_4itp2bm', 'template_vnwsmtj', form.current, 'CLcILwSYtPZKObNpP')
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Your mail was sent successfully');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };
    
    return (
        <div id="contact" className="pt-24 p-4">
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
            <div className="group border-s-8 lg:pl-7 pl-2 rounded-lg  border-green-400 ">
            <form ref={form} onSubmit={sendEmail}>
                <div className="mt-6 flex flex-col gap-4">
                    <label className="form-control w-full">
                        <span className="label-text text-2xl font-semibold">Name</span>
                        <input type="text" name="user_name" className="input input-bordered border-2 border-purple-400 w-full" required />
                    </label>
                    <label className="form-control w-full">
                        <span className="label-text text-2xl font-semibold">Email</span>
                        <input type="email" name="user_email" className="input input-bordered border-2 border-purple-400 w-full" required />
                    </label>
                    <label className="form-control w-full">
                        <span className="label-text text-2xl font-semibold">Message</span>
                        <textarea name="message" className="input input-bordered border-2 h-44 border-purple-400 w-full" required />
                    </label>
                    <button type="submit" className="btn mt-6 btn-warning">Submit Now</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Contact;