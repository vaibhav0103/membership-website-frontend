import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import API from './api.js';


const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] =  useState(false)

    useEffect(()=>{
        API.get('user/is_authenticated/').
        then((res)=> {
            console.log(res.status)
            if(res.status===200){
                setIsAuthenticated(true)
            }
        })
    })

    return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export { AuthContext, AuthProvider }