import React from 'react'
import { useNavigate } from 'react-router-dom'
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';


const LoginWithGoogle = () => {
  let navigate = useNavigate();
  const auth = getAuth();

  const clickLoginWithGoogle = () =>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider)
    .then((result)=>{
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('user info',user)
      navigate('/')

    }).catch((error)=>{
      const errorCode = error.code;
      console.log(errorCode)
    })
  }

  return (
  <div className="loginPage">
    <p>Sign In With Google to Continue</p>
    <button className="login-with-google-btn" onClick={clickLoginWithGoogle}>
      Sign in with Google
    </button>
  </div>
  )
}

export default LoginWithGoogle
