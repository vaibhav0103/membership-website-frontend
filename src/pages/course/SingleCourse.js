import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import API from '../../api';
import Lesson from '../../components/Lesson'

const SingleCourse = () => {
    const [course, setCourse] = useState([])
    const [ lessons, setLessons ] = useState([])
    const {slug} = useParams()

    const fetchCourse = () => {
        API.get(`course/${slug}`)
        .then((response)=>{
            console.log(response.data);
            console.log(response.data.lesson);
            setCourse(response.data)
            setLessons(response.data.lesson)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(()=>{
        fetchCourse()
    }, [])
    return (
        <div className="container mb-2">
            <div className="row g-5">
                <div className="col-md-12">
                    <h3 className="pb-4 mb-4 fst-italic border-bottom">
                        {course.title}
                    </h3>
                    <p>
                        {course.description}
                    </p>
                    <Lesson lessons={lessons} />
                    
                </div>
            </div>
        </div>
    )
}

export default SingleCourse
