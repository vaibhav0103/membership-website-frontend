import React from 'react';
import {Link} from 'react-router-dom';
import heroImg from '../../assets/images/Presentation.svg';
import useChangeDate from './useChangeDate';
import useEnrollUser from './useEnrollUser';


const CourseDescription = ({course}) => {

    const { enrollUser } = useEnrollUser();
    const { changeDate } = useChangeDate();

    
    return (
        <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    {/* Categories */}
                    <strong className="d-inline-flex mb-2">
                    {course.categories.map((category, index)=>{    
                        return (
                            <span className="me-1 px-2 bg-primary bg-gradient text-light" key={index}>                         
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
                        { }
                        {/* <Link to={`/course/${course.slug}`} > */}
                            <button type="button" className="btn btn-success btn-lg" onClick={()=>enrollUser(course.id)}>Enroll</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img className="img-thumbnail course-thumbnail" src={heroImg} alt="placeholder"/>
                </div>
            </div>
        </div>         

    )
}

export default CourseDescription
