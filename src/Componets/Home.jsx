import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import Responsive from "./Responsive";
import Site from "./Site";
import Slider from "./Slider";

const Home = () => {
    return (
        <div className="font-Raleway">
            <Banner></Banner>
            <Site></Site>
            <Portfolio></Portfolio>
            <Projects></Projects>
            <Responsive></Responsive>
            <About></About>
            <Slider></Slider>
            <Contact></Contact>
        </div>
    );
};

export default Home;