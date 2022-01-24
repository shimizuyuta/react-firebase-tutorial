import { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';
import { auth } from '../firebase-config';
const AuthContext = createContext();

export function useAuthContext(){
  return useContext(AuthContext)
}

export function AuthProvider({children}){
  const [user,setUser] = useState('')
  const [loading,setLoading] = useState(true)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user)=>{
      if(user){
        setUser(user);
        setIsAuth(true);
        setLoading(false);
      }
    })
    return ()=>{
      unsubscribed()
    }
  }, [])

  return(
  <>
      <AuthContext.Provider value={{user:user,isAuth:isAuth,loading:loading}}>
        {children}
      </AuthContext.Provider>
  </>
  )

}

