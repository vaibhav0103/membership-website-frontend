import { useState } from 'react'; 
import inputFieldValues from '../../components/InputFields';
import { Link } from 'react-router-dom';
import useAuth from './useAuth';

const Signup = () => {

    const { registerUser } = useAuth();

    const initialFormData = Object.freeze({
		email: '',
		username: '',
		password: '',
        formSubmitted: false,
        success: false
	});
    const [errors, setErrors] = useState({})
    // const [alerts, setAlerts] = useState({
    //     isActive: false,
    //     msg: []
    // })
    const [formData, setFormData] = useState(initialFormData)

    // API request to register user
    

    const handleSuccess = () => {
        setFormData({
            ...initialFormData,
            formSubmitted: true,
            success: true
        });
        // setShowAlert(true);
        console.log("Success Hai")
    };

    const handleError = () => {
        setFormData({
            ...initialFormData,
            formSubmitted: true,
            success: false
        });
        console.log("Here I am")
    };



    const formIsValid = (fieldValues = formData) => {
        const isValid =
        fieldValues.username &&
        fieldValues.email &&
        fieldValues.password &&
        Object.values(errors).every((x) => x === "");

        return isValid;
    };


    const validateForm = (fieldValues = formData) => {

        const temp = {...errors}

        if ("username" in fieldValues)
            temp.username = fieldValues.username ? "" : "This field is required.";

        if ("email" in fieldValues) {
            temp.email = fieldValues.email ? "" : "This field is required.";
            if (fieldValues.email){
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                ? ""
                : "Email is not valid.";
            }
        }

        if ("password" in fieldValues){
            temp.password = fieldValues.password.length >= 8 ? "" : "Must have atleast 8 characters.";
        }

        if ("password2" in fieldValues){
            
            if(formData.password){
                console.log(formData.password, fieldValues.password2 )
                temp.password2 = fieldValues.password2 === formData.password ? "" : "Passwords do not match!";
            } else{
                temp.password2 = fieldValues.password2.length < 1 ? "": "Enter a Password first";
            }
        }

        setErrors({
            ...temp
        })

    }

    const handleChange = (e) =>{
        // Get User input
        const { name, value } = e.target;
        // Set Data
        setFormData({
			...formData,
			// Trimming any whitespace
			[name]: value.trim(),
		});
        // validate value
        validateForm({[name]: value.trim()})
        console.log(errors)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const isValid = Object.values(errors).every((x) => x === "") && formIsValid();
        if(isValid){
            registerUser(formData , handleSuccess, handleError)
        }

        // e.target.reset();
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                
                <div className="col-sm-6">
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <form noValidate>
                        <h3 className="text-primary text-center my-3">Sign Up</h3>
                        {/* Input Fields */}
                        {inputFieldValues.map((inputFieldValue, index) => {
                            return (
                                
                                <div key={index} className="form-floating mb-3">
                                    <input type={inputFieldValue.type} 
                                    className={`form-control ${!!errors[inputFieldValue.name] ? "is-invalid" : "is-valid"} `} 
                                    id={inputFieldValue.id} 
                                    name={inputFieldValue.name} 
                                    placeholder={inputFieldValue.label} 
                                    onChange={handleChange} />
                                    <label className={`form-label ${!!errors[inputFieldValue.name] ? "text-danger" : "text-success"}`} 
                                    htmlFor={inputFieldValue.id}>
                                        {inputFieldValue.label}
                                    </label>
                                    <div className="invalid-feedback"> 
                                        {errors[inputFieldValue.name]}
                                    </div>
                                </div>
                                
                            )
                        })}

                        {/*-- Submit button -- */}
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button type="submit" 
                            className={`btn btn-primary btn-block mb-2 ${!formIsValid() ? 'disabled' : ''} `} 
                            onClick={handleSubmit}>
                                Sign up
                            </button>
                        </div>
                        <div className="my-3 mx-auto">
                            Already a member? 
                            <Link to="/login" >
                                <button type="button" className="btn btn-info mb-2 mx-2 p-2" > Login </button>
                            </Link> 
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
