import API from '../../api.js';

const useEnrollUser = () => {

    const enrollUser = (id) => {
        console.log(id)
        API.post('user/enroll/', {
            'course_id': id
        }).then((response)=>{
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return { enrollUser }
}

export default useEnrollUser
