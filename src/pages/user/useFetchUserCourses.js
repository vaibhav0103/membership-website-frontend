import { useState, useEffect } from 'react';
import API from '../../api.js';

const useFetchUserCourses = () => {
    const [userCourses, setUserCourses] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const url = 'user/courses/'
    const fetchUserCourses = async () => {
        await API.get(url)
        .then((response)=>{
            setUserCourses(response.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error)
            setIsLoading(false);
        })
    }

    useEffect(()=>{
        fetchUserCourses();
    },[])

    return {
        isLoading,
        userCourses
    }
}

export default useFetchUserCourses
