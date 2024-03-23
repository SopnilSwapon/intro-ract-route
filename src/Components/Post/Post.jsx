import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    const {body, title, id} = post;
    const postStyle = {
        border: '3px solid blue',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    }

    return (
        <div style={postStyle}>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}>see details</Link>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
}
export default Post;