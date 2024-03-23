import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website, email} = user;
    console.log(user);
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>{website}</p>
            <p>{email}</p>
        </div>
    );
};

export default UserDetails;