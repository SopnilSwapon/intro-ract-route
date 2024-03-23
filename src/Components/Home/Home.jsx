import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2>This is the home page</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;