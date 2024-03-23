import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <ul style={{display: 'flex', gap: '18px', listStyle: 'none',fontSize: '28px'}}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
               <li><NavLink to='about'>About</NavLink></li>
               <li><NavLink to="/users">Users</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;