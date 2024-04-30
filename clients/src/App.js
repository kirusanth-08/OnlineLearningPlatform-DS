// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/heading/Header';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/about/About';
import CourseHome from './components/allcourse/CourseHome';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import {AuthContext} from './components/helpers/AuthContext'
//////////////////////////////////////////////////////////////////////
import { useEffect, useState } from 'react';
//import axios from 'axios';
  function App() {

    const [authState , setAuthstate] = useState(false)
    useEffect(()=>{
      // axios.get('http://localhost:8080/api/user/authenticate',{
      //   headers : {
      //     authtoken : localStorage.getItem('authtoken')
      //   },
      // })
      const auth = localStorage.getItem("authtoken")
      if(auth){
        setAuthstate(true) 
      }
       
    },[])
    return (
      <div>
        <AuthContext.Provider value={{authState , setAuthstate}}>
        <Router>
          <Header />
             <Link to ='/login' />
          <Routes>
            <Route exact path='/'  element={<Home/>} />
            <Route  path='/about'  element={<About/>} />
            <Route  path='/courses'  element={<CourseHome/>} />
            <Route  path='/contact'  element={<Contact/>} />
             
            <Route  path='/login'  element={<Login/>} />
            <Route  path='/signup'  element={<Signup/>} />
            
          </Routes>
          <Footer/>
        </Router>
        </AuthContext.Provider >
      </div>
    );
  }

export default App;
