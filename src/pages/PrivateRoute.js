import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../context';


const PrivateRoute = ({children, ...rest}) => {

    const {isAuthenticated} = useAuthContext()

    return (
        <Route {...rest} render={() => {
            return isAuthenticated ? children : <Redirect to='/login'></Redirect>
        }}>

    </Route>
    )
}

export default PrivateRoute
