import React , { useState } from 'react'
import axios from 'axios'
import { Nav } from '../../components/index'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useAuth } from '../../context/auth-context'

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate()
    const {dispatch} = useAuth()

    const loginClickHandler = async () => {
        try {
            const resp = await axios.post("/api/auth/login" , {
                email: email,
                password: password
            })
            
            if(resp.status === 200) {
                localStorage.setItem("token" , resp.data.encodedToken)
                localStorage.setItem("user" , JSON.stringify(resp.data.foundUser))
                dispatch({type: "TOKEN-ADD" , payload: {token: resp.data.encodedToken , user: resp.data.foundUser}})
                navigate('/')
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    const loginTestHandler = async () => {
        try {
            const resp = await axios.post("/api/auth/login" , {
                email: "yatendra@gmail.com",
                password: "yatendra"
            })
            if(resp.status === 200) {
                localStorage.setItem("token" , resp.data.encodedToken)
                localStorage.setItem("user" , JSON.stringify(resp.data.foundUser))
                dispatch({type: "TOKEN-ADD" , payload: {token: resp.data.encodedToken , user: resp.data.foundUser}})
                navigate('/')
            }
        }
        catch(err) {
            console.log(err);
        }
    }
  return (
    <div className='container-login'>
        <Nav />
        
        <section className="login-container">
            <div className="card card-login">
                <h2 className='login-heading'>Login</h2>
                <label htmlFor="inp" className='label-txt'>Username / Email:</label>
                <input type="email" placeholder="enter input here" required value={email} onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="inp" className='label-txt'>Password:</label>
                <input type="password" placeholder="enter password" required value={password} onChange={e => setPassword(e.target.value)} />
                <div className="reset-container">
                    <div>
                        <input type="checkbox" /><label className='label-txt'>Remember me</label></div>
                    <Link to="#" className='label-txt'>Forget password?</Link>
                </div>
                <button className="btn btn-primary-solid login-btn" onClick={loginClickHandler}>Login</button>
                <button className="btn btn-primary-solid login-btn" onClick={loginTestHandler}>Login with Test Credentials</button>
                <div className="create-account-container">
                    <Link to="/signup" className='label-txt'>Create an account</Link>
                    <span className="material-icons-outlined right-icon">
                        chevron_right
                    </span>
                </div>
            </div>
        </section>
    </div>
  )
}

export { Login }