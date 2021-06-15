import React, { useState, useEffect } from 'react';
import API from '../../api.js';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../context';

const useAuth = () => {

    let history = useHistory();
    const { userLoggedIn }  = useAuthContext();
    // LOGIN USER
    const loginUser = async (formData) => {
        
        const url = 'token/'
        await API.post(url, formData)
        .then((res)=>{
            console.log(res)
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            API.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');
            userLoggedIn()
            history.push('/');
        })
    }

    // REGISTER USER
    const registerUser = async (formData, successCallback, errorCallback) => {
        const url = 'user/register/';        
        
        const response = await API.post(url, formData)
        .then((res) => {
            console.log(res);
            if (res.status === 201){
                return true
            }
        }).catch((err) => {
            // console.log(err.message)
            if (err.response.status === 400){
                console.log(err.response.data)
                // let newTemp = {...alerts}
                const serverErrors  = Object.entries(err.response.data).map(([key, value]) => {
                    return ({field: key, error: value[0]})
                })
                console.log(...serverErrors)
                // setAlerts({...serverErrors, isActive: true})
                return false
            }
            // return err.response
        })
        
        console.log(response)
        
        if(response){ 
            successCallback(); 
        } else {
            errorCallback();           
        }
    }


    return {
        loginUser, 
        registerUser
    }
}

export default useAuth
