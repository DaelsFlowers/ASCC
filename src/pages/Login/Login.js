import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./Login.css"


const Login = () => {
    const logintext = true
    const [user, setUser] = useState({
        name: "",
        password: ""
    })
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    // const handleSubmit = e => {
    //     e.preventDefault()
    // }
    // const signup = (name, password) => {
    //     createUserWithEmailAndPassword(Authfire, name, password)
    // }


    return (
        <div className='login'>

            <div class="container">
                <div className='top'>
                    <div className='loginlogo'>ASCC</div>
                    <br />
                    <div className='ingresa'>INGRESA A TU CUENTA</div>
                </div>
                <form >
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required type={"text"} name="name" id='name' onChange={handleChange} />
                            <span class="omrs-input-label"  >Username</span>
                        </label>
                    </div>
                    <br />
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required type={"password"} name="password" id='password' onChange={handleChange} />
                            <span class="omrs-input-label" >Password</span>
                        </label>
                    </div>
                    <div className='button' >
                        <NavLink to={logintext ? '/home' : "/"}>
                            <div class="btn-grad">
                                LOGIN
                            </div>
                        </NavLink>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Login





