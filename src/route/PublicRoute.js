import { Navigate, Outlet, } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"
import { useContext } from 'react'


export const PublicRoute =({})=>{
  const [state] = useAuthContext()
  console.log(state,'public route')
  const {isAuth,loading,user} =state
  if(loading){
    return(
      <p>loading</p>
    )
  }
  else{

    return(
      isAuth?<Navigate to='/'/>:<Outlet/>
    )
  }
}