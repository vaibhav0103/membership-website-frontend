import React from 'react';
import { useAuthContext } from '../context';

const Dashboard = () => {
    const { user } = useAuthContext()
    console.log(user)
    return (
        <div className="container text-center">
            <h2><span className="text-capitalize">{user.username}</span>'s Dashboard</h2>
            <hr class="bg-danger border-2 border-top border-primary"></hr>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Id: {user.profile.id}</p>
            <p></p>
            <p></p>
           
           

           
        </div>
    )
}

export default Dashboard
