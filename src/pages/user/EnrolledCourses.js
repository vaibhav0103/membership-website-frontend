import CourseDescription from '../course/CourseDescription.js';
import Loading from '../../components/Loading.js';
import useFetchUserCourses from './useFetchUserCourses.js';

const EnrolledCourses = () => {

    const {isLoading, userCourses} = useFetchUserCourses();

    if (isLoading){
        return <Loading />
    }
    return (
        <div className="container">
            <div className="row mb-2 text-warning text-center">
                <h2>Enrolled Courses</h2>
            </div>
            <div className="row mb-2">
                { userCourses.map((course) => { 
                    return (
                        <CourseDescription course={course} key={course.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default EnrolledCourses
