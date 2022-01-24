import { BrowserRouter as Router, Routes, Route, Link, useNavigate  } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// import {BrowerRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import CreatePost from './pages/CreatePost';
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";
import { useAuthContext }from './context/AuthContext'

function App() {
  const { user,loading,isAuth} = useAuthContext()

  const signUserOut = ()=>{
    auth.signOut();
    window.location.pathname = "/login";
  }

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth?(
        <>
          <Link to="/login">login</Link>
          <Link to="/signup">user register</Link>
        </>
        ):(
        <>
        <Link to="/createpost">create post</Link>
        <button onClick={signUserOut}>log out</button>
        </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>}/>
        <Route path="/signup" element={<Signup isAuth={isAuth}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
