import About from "./About";
import Banner from "./Banner";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import Responsive from "./Responsive";
import Site from "./Site";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Site></Site>
            <Portfolio></Portfolio>
            <Projects></Projects>
            <Responsive></Responsive>
            <About></About>
            <Slider></Slider>
        </div>
    );
};

export default Home;