import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../context';


const PrivateRoute = ({children, ...rest}) => {

    const {loggedIn, user} = useAuthContext()
    console.log(user, loggedIn)
    const isUser = loggedIn && user


    return (
        <Route {...rest} render={() => {
            return isUser ? children : <Redirect to='/login'></Redirect>
        }}>

    </Route>
    )
}

export default PrivateRoute
