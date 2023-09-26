import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {AiOutlineGoogle} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import '../style.css'

const Signup = (props) => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Account created successfully", "success");
            history.push("/");
        }
        else {
            props.showAlert("Invalid credentials", "danger");
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div >
            {/* <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={credentials.name} onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                

                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}



            <div class="form-container">
                <p class="title">SIGN UP</p>
                <form class="form" onSubmit={handleSubmit}>
                    <div class="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="name" name="name" id="name" placeholder="" value={credentials.name} onChange={onChange} required />
                    </div>
                    <div class="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="" value={credentials.email} onChange={onChange} required />
                    </div>
                    <div class="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="" value={credentials.password} onChange={onChange} required />
                        
                    </div>
                    <button type="submit" className="sign signupBtn">Sign up</button>
                </form>
                <div class="social-message">
                    <div class="line"></div>
                    <p class="message">Login with social accounts</p>
                    <div class="line"></div>
                </div>
                <div class="social-icons">
                    <button aria-label="Log in with Google" class="icon">
                        <AiOutlineGoogle className="allIcon" />
                    </button>
                    <button aria-label="Log in with Twitter" class="icon">
                        <BsTwitter className="allIcon"/>
                    </button>
                    <button aria-label="Log in with GitHub" class="icon">
                        <BsGithub className="allIcon"/>
                    </button>
                </div>
                <p class="signup">Already have an account ?
                    <a rel="noopener noreferrer" href="/login" class=""> Sign in</a>
                </p>
            </div>

        </div>
    )
}

export default Signup
