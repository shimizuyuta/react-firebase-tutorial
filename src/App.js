import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// import {BrowerRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";

function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem('isAuth'));
  const signUserOut = () =>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth?(
        <Link to="/login">login</Link>
        ):(
        <>
        <Link to="/createpost">create post</Link>
        <button onClick={signUserOut}>log out</button>
        </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;