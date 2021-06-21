import useFetchCourse from './useFetchCourse';
import CourseDescription from './CourseDescription';
import Loading from '../../components/Loading';


const Courses = () => {

    const { courses, isFetching, loading, isUser } = useFetchCourse()
    if (isUser){
        if (loading){
            return <Loading />
        }
    }
    if(isFetching){
        return <Loading />
    }
    return (
        <div className="container">
            <div className="row mb-2">
                { courses.map((course) => { 
                    return (
                        <CourseDescription course={course} key={course.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Courses
