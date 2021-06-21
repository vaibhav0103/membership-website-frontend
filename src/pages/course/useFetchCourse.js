import { useState, useEffect, useCallback } from 'react'
import API from '../../api.js';
import { useAuthContext } from '../../context';

const useFetchCourse = () => {

    const { loggedIn, user, loading } = useAuthContext()
    const [ courses, setCourses ] = useState([])
    const [ isFetching, setIsFetching ] = useState(true)

    const isUser = loggedIn && user.length !== 0

    const fetchCourses = useCallback(async () => {
        await API.get('courses/')
        .then((response)=>{
            if (isUser){
                const res = response.data.filter(data=> !user.profile.enrolled_courses.includes(data.id))
                setCourses(res)
                setIsFetching(false)
            } else {
                setCourses(response.data)
                setIsFetching(false)
            }
        })
        .catch((error) => {
            console.log(error)
            setIsFetching(false)
        })
    },[isUser])

    useEffect(()=>{
        fetchCourses();
    }, [fetchCourses]);

    return {
        fetchCourses,
        courses,
        isFetching,
        loading, 
        isUser
    }
}

export default useFetchCourse
