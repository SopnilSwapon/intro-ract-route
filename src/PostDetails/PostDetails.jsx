import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const navigate = useNavigate();
    const {postId} = useParams();
    console.log(postId);
    const handleGoBack = () => {
        navigate(-1)
    }
     const post = useLoaderData();
    return (
        <div>
            <h1>Post About: {post.id}</h1>
            <h2 style={{color: 'blue'}}>{post.title}</h2>
            <p><small>{post.body}</small></p>
            <Link to="/posts"><button>Go Back</button></Link>
            <Link onClick={handleGoBack}>Go Back by second Option</Link>
        </div>
    );
};

export default PostDetails;