import { BrowserRouter as Router, Routes, Route, Link, useNavigate  } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// import {BrowerRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/login/Login';
import Signup from "./pages/signup/Signup";
import CreatePost from './pages/CreatePost';
import { auth } from "./firebase-config";
import { useAuthContext }from './context/AuthContext'
import { PrivateRoute } from "./route/PrivateRouter";
import {PublicRoute} from './route/PublicRoute'

function App() {
  const [state] = useAuthContext()
  const {isAuth} =state

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
        <Route path="/" element={<Home/>}/>

        <Route path="/" element={<PrivateRoute/>}>
          <Route path="/createpost" element={<CreatePost/>}/>
        </Route>

        <Route path="/" element={<PublicRoute/>}>
          <Route path="/login" element={<Login/>}/>
        </Route>

        <Route path="/" element={<PublicRoute/>}>
          <Route path="/signup" element={<Signup />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
