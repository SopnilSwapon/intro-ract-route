import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const {name, email, username, website, id} = user;
    const userStyle = {
           border: '10px solid indigo',
           padding: '10px',
           borderRadius: '10px',
           margin: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>UserName: {username}</p>
            <p>UserName: {website}</p>
            <p>UserName: {email}</p>
            <Link to={`/user/${id}`}>show details</Link>
        </div>
    );
};
User.propTypes  = {
    user: PropTypes.object
}
export default User;