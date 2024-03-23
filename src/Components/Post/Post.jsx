import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    const navigate = useNavigate();
    const {body, title, id} = post;
    const postStyle = {
        border: '3px solid blue',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    }
    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}>see details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowDetails}>show details by real btn</button>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
}
export default Post;