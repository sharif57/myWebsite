import { Link, NavLink } from "react-router-dom";

const Navber = () => {
    const handleDownload = () => {
        const fileUrl = 'https://drive.google.com/file/d/1JxZ_nXCLrQIy-Lj9BaqC0EQkWuErv-0f/view';
        window.open(fileUrl, '_blank'); // Opens the link in a new tab
    };
    const handleScroll = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleContact = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('contact');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const navLinks = <>
        <NavLink to={'/'}><li><a className="font-semibold text-xl">Home</a></li></NavLink>
        <NavLink onClick={handleScroll}  ><li><a href="#about" className="font-semibold text-xl">About Me</a></li></NavLink>
        <NavLink onClick={handleContact}><li><a href="#contact" className="font-semibold text-xl">Contact Me</a></li></NavLink>
    </>
    return (
        <div className="navbar bg-base-200   fixed z-10 bg-opacity-30 max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to={'/'} className=" text-xl"><img className="size-24" src="https://i.ibb.co/F3HTyH7/Blue-White-Dots-Beverages-Drinks-Logo-removebg-preview.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button onClick={handleDownload} className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                   
                    Hire Me
                   
                </button>
            </div>
        </div>
    );
};

export default Navber;