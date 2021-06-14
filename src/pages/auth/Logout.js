import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../api.js';


const Logout = () => {

    const history = useHistory();

    useEffect(() => {
		const response = API.post('user/logout/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
        console.log(response)
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		API.defaults.headers['Authorization'] = null;
		history.push('/login');
	});

    return (
        <div>
            Logout
        </div>
    )
}

export default Logout
