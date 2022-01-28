import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

export const PrivateRoute =({})=>{
  const [state,dispatch] = useAuthContext()
  const {isAuth,loading} =state
  console.log('privateRote',loading)
  if(loading){
   return(
     <p>...loading</p>
   )
  }else{
    return(
      isAuth?<Outlet/>:<Navigate to="/login"/>
    )
  }
}