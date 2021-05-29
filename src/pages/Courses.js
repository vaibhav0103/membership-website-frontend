import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import API from '../api.js';
import heroImg from '../assets/images/Presentation.svg';

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
                            {/* Categories */}
                            <strong className="d-inline-flex mb-2">
                            {course.categories.map((category)=>{    
                                return (
                                    <span className="me-1 px-2 bg-primary bg-gradient text-light">                         
                                        {category}
                                    </span>
                                )
                            })}
                            </strong>
                            
                            <h3 className="mb-0">{course.title}</h3>
                            <div className="mb-1 text-muted">{changeDate(course.created_at)} </div>
                            {/* MEMBERSHIP TYPE */}
                            <strong className="mb-2">
                                <span className={`text-light ${(course.pricing_tier === "Free")? "bg-primary":"bg-success"} bg-gradient p-1` }>
                                    {course.pricing_tier}
                                </span>
                            </strong>
                            <p className="card-text mb-auto">{ course.description }</p>
                            <div className="text-center mt-2">
                                <Link to={`/course/${course.slug}`} >
                                    <button type="button" className="btn btn-success btn-lg">Enroll</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img className="img-thumbnail course-thumbnail" src={heroImg} alt="placeholder"/>
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
