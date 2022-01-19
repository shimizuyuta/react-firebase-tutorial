import React from 'react'
import LoginWithEmailPassword from '../component/LoginWithEmailPassword';
import LoginInWithGoogle from '../component/LoginWithGoogle'

const Login = ({ setIsAuth }) => {

  return (
    <>
      <LoginInWithGoogle setIsAuth={setIsAuth}/>
      <LoginWithEmailPassword setIsAuth={setIsAuth}/>
    </>
  )
}

export default Login
