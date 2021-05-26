import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import API from '../api.js';

const Courses = () => {
    const [courses, setCourses] = useState([])

    const changeDate = (stringDate) => {

        const dt = new Date(stringDate)
        const year = dt.getFullYear()
        const date = dt.getDate()
        const month = dt.toLocaleString('default', { month: 'short' })

        return ` ${month} ${date}, ${year}`
    }

    const fetchCourses = () => {
        API.get('courses/')
        .then((response)=>{
            console.log(response.data);
            setCourses(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(()=>{
        fetchCourses()
    }, [])

    return (
        <div className="container">
            <div className="row mb-2">
                { courses.map((course) => {
                return (
                <div className="col-md-6" key={course.id}>
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">World</strong>
                            <h3 className="mb-0">{course.title}</h3>
                            <div className="mb-1 text-muted">{changeDate(course.created_at)} </div>
                            <p className="card-text mb-auto">{ course.description }</p>
                            <Link to={`/course/${course.slug}`} ><button type="button" className="btn btn-success">Enroll</button></Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        </div>
                    </div>
                </div>
                )
                })}
            </div>
        </div>
    )
}

export default Courses
