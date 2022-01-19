import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
  const emailRef = useRef();
  const emailPassword =useRef(); 
  let navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,emailRef.current.value,emailPassword.current.value)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log(user,'user')
      navigate('/login')
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }

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

export default Signup
