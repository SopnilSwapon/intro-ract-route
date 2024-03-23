import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h2>Our Users{users.length}</h2>
            <p>fantastic and honest users.</p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
            {
                users.map(user =><User user = {user} key={user.id}></User>)
            }
            </div>
        </div>
    );
};

export default Users;