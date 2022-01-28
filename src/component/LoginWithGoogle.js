import React from 'react'
import { useNavigate } from 'react-router-dom'
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import { useAuthContext } from '../context/AuthContext';

const LoginWithGoogle = () => {
  let navigate = useNavigate();
  const auth = getAuth();
  const [dispatch] = useAuthContext()


  const clickButtonLoginWithGoogle = () =>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider)
    .then((result)=>{
      const user = result.user;
      dispatch({type:'SIGN_IN',data:user})
      navigate('/')

    }).catch((error)=>{
      const errorCode = error.code;
      console.log(errorCode)
    })
  }

  return (
  <div className="loginPage">
    <p>Sign In With Google to Continue</p>
    <button className="login-with-google-btn" onClick={clickButtonLoginWithGoogle}>
      Sign in with Google
    </button>
  </div>
  )
}

export default LoginWithGoogle
