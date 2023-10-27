
import About from "./About/About";
import Banner from "./Banner/Banner";
import ChooseUs from "./ChooseUs/ChooseUs";
import Products from "./Products/Products";
import Review from "./Review/Review";
import Services from "./Services/Services";
import Teams from "./Teams/Teams";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Products></Products>
            <Teams></Teams>
            <ChooseUs></ChooseUs>
            <Review></Review>
        </div>
    );
};

export default Home;