import { useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from '../../context/AuthContext';


const Signup = () => {
  const emailRef = useRef();
  const emailPassword =useRef(); 
  let navigate = useNavigate();
  const [dispatch] = useAuthContext()
  const [loading,setLoading] = useState(false)
  const [error,setError] =useState(null)
  console.log('loading 1回')


  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true)
    const auth = getAuth();

    createUserWithEmailAndPassword(auth,emailRef.current.value,emailPassword.current.value)
    .then(async(userCredential)=>{
      const user = userCredential.user;
      await dispatch({type:'SIGN_IN',data:user})
      setLoading(false)
      navigate('/')
    })
    .catch((error)=>{
      console.log('error',error)
      setError(error)
      setLoading(false)
    })
  }

  if(loading){
    return(
      <p>...loading</p>
    )
  }
  else if(error){
    //モーダルを表示

  }
  else{
    return (
      <div>
        <h1>register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">email</label>
            <input type="email" id="email" name="email" placeholder='email'  ref={emailRef}/>
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="password" id="password" name="password"  placeholder='password' ref={emailPassword}/>
          </div>
          <button>登録</button>
        </form>
      </div>
    )
  }
}

export default Signup
