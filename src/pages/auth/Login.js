import { useState } from "react";
import useAuth from './useAuth';


const Login = () => {

    const { loginUser } = useAuth();
    
    const initialFormData = Object.freeze({
        username:'',
        password: ''
    })

    const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        loginUser(formData)

    }

    return (
        <div className="container">
            <main className="form-signin">
                <form>
                    <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" 
                    alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input type="text" 
                        name="username" className="form-control" 
                        id="floatingInput" onChange={handleChange} />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" 
                        name="password" className="form-control"
                        id="floatingPassword" placeholder="Password" 
                        onChange={handleChange} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" 
                    onClick={handleSubmit}>Sign in</button>
                </form>
            </main>
        </div>
    )
}

export default Login
