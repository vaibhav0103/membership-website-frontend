import {useState, useEffect} from 'react';

const Signup = () => {
    const initialFormData = Object.freeze({
		email: '',
		username: '',
		password: '',
	});
    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (e) =>{
        console.log(e.target.name)
        console.log(e.target.value)
        setFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <form>
                        <h3 className="text-primary text-center my-3">Sign Up</h3>
                        {/* Username */}

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control is-invalid" id="username" name="username" placeholder="Username" onChange={handleChange} />
                            <label className="form-label text-danger" htmlFor="username">Username</label>
                        </div>

                        {/* Email input  */}
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control is-valid" id="email" name="email" placeholder="name@example.com" onChange={handleChange} />
                            <label className="form-label text-success" htmlFor="email">Email Address</label>
                        </div>

                        {/* Password input */}
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={handleChange} />
                            <label className="form-label" htmlFor="password">Password</label>
                        </div>

                        {/*-- Submit button -- */}
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button type="submit" className="btn btn-primary btn-block mb-2" onClick={handleSubmit}>Sign up</button>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            Already a member? Sign In here...  
                            <button type="submit" className="btn btn-info mb-2">Sign In</button>
                        </div>
                        {/*-- Register buttons -- */}
                        {/* <div className="text-center">
                            <p>or sign up with:</p>
                            <button type="button" className="btn btn-primary btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-primary btn-floating mx-1">
                            <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-primary btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-primary btn-floating mx-1">
                            <i className="fab fa-github"></i>
                            </button>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
