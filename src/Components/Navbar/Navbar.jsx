import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul style={{display: 'flex', gap: '18px', listStyle: 'none',fontSize: '28px'}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/posts">Posts</Link></li>
               <li><Link to='about'>About</Link></li>
               <li><Link to="/users">Users</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;