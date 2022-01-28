import React,{useRef, useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './LoginWithEmailPassword.css'
import { useAuthContext } from '../context/AuthContext';
import { useEffect } from 'react';

const LoginWithEmailPassword = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [dispatch] = useAuthContext()
  // const [error,setError] = useState(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((res)=>{
        dispatch({type:'SIGN_IN',data:res.user})
        navigate('/')
      })
      .then((e)=>{
        console.log(e,'error')
      })
  }

    return (
      <div className='login_page'>
        <h1>login</h1>
        <form onSubmit={handleSubmit} className='login-form'>
          <div>
            <label htmlFor='email'>email</label>
            <input type="email" className='input-form' id='email'name="email" placeholder='email'  ref={emailRef} />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="password" id='password' className='input-form' name="password"  placeholder='password' ref={passwordRef}/>
          </div>
          <button className='login-button'>login</button>
        </form>
        
      </div>
    )
}

export default LoginWithEmailPassword
