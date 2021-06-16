import React from 'react';
import { useAuthContext } from '../context';

const Dashboard = () => {
    const { user } = useAuthContext()
    console.log(user)
    return (
        <div className="container">
            <h2 className="text-center mb-4"><span className="text-capitalize">{user.username}</span>'s Dashboard</h2>
            {/* <hr className="bg-danger border-2 border-top border-primary"></hr> */}
            <ul class="list-group">
                <li class="list-group-item fs-4">
                    <span className="fw-bold">Username: </span>
                    <span className="text-primary">{user.username}</span>
                </li>
                <li class="list-group-item fs-4">
                    <span className="fw-bold">Email: </span>
                    <span className="text-primary">{user.email}</span>
                </li>
                <li class="list-group-item fs-4">
                    <span className="fw-bold">Membership Type: </span>
                    <span className="text-primary">{user.membership.pricing}</span>
                </li>
                <li class="list-group-item text-capitalize fs-4">
                    <span className="fw-bold">Membership Status: </span>
                    <span className="badge bg-warning text-success">{user.membership.status}</span>
                </li>
            </ul>
           
        </div>
    )
}

export default Dashboard
