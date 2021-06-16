import React, { useState, useEffect, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import API from './api.js';


const AuthContext = React.createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] =  useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    
    // Check user logged in or not
    const userLoggedIn = () => {
        const isToken = localStorage.getItem('refresh_token')
        if (isToken !== null){
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }

    // get user details
    const getUser = async () => {
        await API.get('user/profile/')
        .then((res)=> {
            console.log(res)
            // console.log(loggedIn)
            if(res.status===200){
                setUser(res.data)
            }
        })
    }

    console.log("mid ", loggedIn)

    useEffect(()=>{
        userLoggedIn()
        // getuser if logged in
        if(loggedIn){
            getUser()
        }
        console.log("Effect ", loggedIn)
        
    },[loggedIn])

    return <AuthContext.Provider value={{ loggedIn, userLoggedIn, user }}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export { AuthContext, AuthProvider }