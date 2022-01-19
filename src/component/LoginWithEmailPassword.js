import React,{useRef} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './LoginWithEmailPassword.css'

const LoginWithEmailPassword = ({setIsAuth}) => {
  const auth = getAuth();
  let navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((userCredential) => {
      // Signed in
      console.log('fafa')
      const user = userCredential.user;
      setIsAuth(true)
      navigate('/')
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(error.message)
    });
  }

  return (
    <div className='login_page'>
      <h1>login</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <div>
          <label htmlFor='email'>email</label>
          <input type="email" className='input-form' id='email'name="email" placeholder='email'  ref={emailRef}/>
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
