import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <h2>This is the home page</h2>
            {
                navigation.state === 'loading' ? <h3> Loading...</h3> : 
                <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;