import { createContext, useState, useContext } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { auth } from '../firebase-config';

const initalState = {
  user:null,
  isAuth:false,
}
const AuthContext = createContext(initalState);

export function useAuthContext(){
  return useContext(AuthContext)
}

export const AuthReducer = (state,action)=>{
  console.log(action.data,'action data',action.type,'type')
  switch(action.type){
    case 'SIGN_IN':
      return{...state,user:action.data};
    case 'IS_AUTH':  
      return{...state,user:action.data,isAuth:true};
    case 'LOGOUT':
      return{...state,user:null}
    default:return state
  }
}

export function AuthProvider({children}){
  const [state,dispatch] = useReducer(AuthReducer,initalState)
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch({type:'IS_AUTH',data:user})
      }
    })
    return ()=>{
      unsubscribed()
    }
  }, [])
  return(
  <AuthContext.Provider value={[state,dispatch]}>
    {children}
  </AuthContext.Provider>
  )
}


