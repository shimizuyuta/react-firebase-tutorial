import React from 'react'
import LoginWithEmailPassword from '../../component/LoginWithEmailPassword';
import LoginInWithGoogle from '../../component/LoginWithGoogle'
import { useAuthContext } from "../../context/AuthContext"
import { useContext } from 'react'

const Login = () => {
  const [state,dispatch] = useAuthContext()
  const {isAuth,loading,user} =state
  return (
    <>
      <LoginInWithGoogle />
      <LoginWithEmailPassword />
    </>
  )
}

export default Login
