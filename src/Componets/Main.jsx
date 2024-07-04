import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./Footer";

const Main = () => {
    return (
        <div>
             <div className="max-w-7xl mx-auto">
            <Navber></Navber>
            <div className="min-h-[calc(100vh-360px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Main;