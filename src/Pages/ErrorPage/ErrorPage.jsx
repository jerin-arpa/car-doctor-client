import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import errorPage from '../../assets/images/ErrorPage/404.png';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="container mx-auto px-3 my-10">
                <img className="w-full" src={errorPage} alt="" />
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;