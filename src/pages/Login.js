import React from 'react'
import LoginWithEmailPassword from '../component/LoginWithEmailPassword';
import LoginInWithGoogle from '../component/LoginWithGoogle'

const Login = () => {

  return (
    <>
      <LoginInWithGoogle />
      <LoginWithEmailPassword />
    </>
  )
}

export default Login
