import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../context';
import Loading from '../components/Loading';


const PrivateRoute = ({children, ...rest}) => {

    const {loggedIn, user, loading} = useAuthContext()
    const isUser = loggedIn && user.length !== 0

    return (
        <Route {...rest} render={() => {
            if(loading) return <Loading />
            return isUser ? children : <Redirect to='/login'></Redirect>
        }}>

    </Route>
    )
}

export default PrivateRoute
