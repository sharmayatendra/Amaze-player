import React , { useReducer } from 'react'
import axios from 'axios'
import { signupReducer } from '../../reducer/index'
import { Nav } from '../../components/index'
import {Link, useNavigate} from 'react-router-dom'
import './Signup.css'
import { useAuth } from '../../context/auth-context'

 function Signup() {

    const navigate = useNavigate()
    const {dispatch} = useAuth()
    const [signupState,signupDispatch] = useReducer(signupReducer, {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const {firstName,lastName,email,password,confirmPassword} = signupState;

    const signupHandler = async () => {
        if(firstName !== "" && lastName !== "" && email !== "") {
            try{
                const resp = await axios.post('/api/auth/signup' , {
                    email, password , firstName , lastName
                })
                console.log(resp);
                localStorage.setItem('token' , resp.data.encodedToken)
                localStorage.setItem('user' , JSON.stringify(resp.data.createdUser))
                dispatch({type:'TOKEN-ADD' , payload: { token: resp.data.encodedToken , user: resp.data.createdUser}})
                navigate('/')
            } catch(error) {
                console.log(error);
            }
        }
        else {
            alert("please fill out all the fields")
        }
    }

  return (
    <div className='container-login'>
        <Nav />

        <section className="login-container">
        <div className="card card-login">
            <h2 className='signup-heading'>Signup</h2>
            <label htmlFor="inp" className='label-txt'>First Name:</label>
            <input type="text" placeholder="enter input here" required value={firstName} onChange={e => signupDispatch({type:'FIRST-NAME' , payload: e.target.value})}/>

            <label htmlFor="inp" className='label-txt'>Last Name:</label>
            <input type="text" placeholder="enter input here" required value={lastName} onChange={e => signupDispatch({type:'LAST-NAME' , payload: e.target.value})}/>

            <label htmlFor="inp" className='label-txt'>Email:</label>
            <input type="email" placeholder="enter input here" required value={email} onChange={e => signupDispatch({type:'EMAIL' , payload: e.target.value})}/>

            <label htmlFor="inp" className='label-txt'>Password:</label>
            <input type="password" placeholder="enter password" required value={password} onChange={e => signupDispatch({type:'PASSWORD' , payload: e.target.value})}/>

            <label htmlFor="inp" className='label-txt'>Confirm Password:</label>
            <input type="password" placeholder="enter password" required value={confirmPassword}onChange={e => signupDispatch({type:'CONFIRM-PASSWORD' , payload: e.target.value})}/>
            <div className="reset-container">
                <div>
                    <input type="checkbox" /><label className='label-txt'>Accept all T&C</label></div>
            </div>
            {password !== confirmPassword && <p className='danger-text'>Password not matching</p>}
            <button className="btn btn-primary-solid signup-btn" onClick={signupHandler}>Signup</button>
            <div className="create-account-container">
                <Link to="/login" className='label-txt'>Already have an account?</Link>
                <span className="material-icons-outlined right-icon">
                    chevron_right
                </span>
            </div>

        </div>
    </section>
    </div>
  )
}

export { Signup }