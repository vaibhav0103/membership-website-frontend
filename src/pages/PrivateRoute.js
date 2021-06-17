import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../context';
import Loading from '../components/Loading';


const PrivateRoute = ({children, ...rest}) => {
    console.log(rest)
    const {loggedIn, user, loading} = useAuthContext()
    console.log("Loading: ", loading)
    console.log("cheeck first",user, loggedIn)
    const isUser = loggedIn && user.length !== 0

    console.log("Check is user",isUser)


    return (
        <Route {...rest} render={() => {
            if(loading) return <Loading />
            return isUser ? children : <Redirect to='/login'></Redirect>
        }}>

    </Route>
    )
}

export default PrivateRoute
