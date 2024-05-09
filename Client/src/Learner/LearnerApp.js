// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/heading/Header';
import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/about/About';
import CourseHome from './components/allcourse/CourseHome';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import Teach from './components/Teach/Teach';

import {AuthContext} from './components/helpers/AuthContext'
import { useEffect, useState } from 'react';
import axios from 'axios';
import MyLearning from './components/Mylearnings/MyLearning';
  function LearnerApp() {
    const [authState , setAuthstate] = useState({
      username : '',
      id : '',
      instructor:false,
      status : false
    })
    useEffect(()=>{
      axios.get('http://localhost:8080/api/user/authenticate',{
        headers : {
          authtoken : localStorage.getItem('authtoken')
        },
      }).then((res)=>{
          if(res.data.error){
            alert(res.data.error)
            setAuthstate({...authState,status : false})
          }else{
            setAuthstate(
              {
                username : res.data.username,
                id :res.data._id,
                instructor: res.data.instructor,
                status : true
              }
             
            )
            console.log(res.data._id)
          }
      }).catch((err)=>{
        console.log(err)
      })
      // const auth = localStorage.getItem("authtoken")
      // if(auth){
      //   setAuthstate(true) 
      // }
       
    },[])
    return (
      <div>
        <AuthContext.Provider value={{authState , setAuthstate}}>
        {/* <Router> */}
            <Header /> 
             <Link to ='/login' />
          <Routes>
            <Route exact path='/'  element={<Home/>} />
            <Route  path='/about'  element={<About/>} />
            <Route  path='/courses'  element={<CourseHome/>} />
            <Route  path='/contact'  element={<Contact/>} />
            <Route  path='/login'  element={<Login/>} />
            <Route  path='/signup'  element={<Signup/>} />
            <Route  path='/teach'  element={<Teach/>} />
            <Route  path='/leanings'  element={<MyLearning/>} />

          </Routes>         
          <Footer/>
        {/* </Router> */}
        </AuthContext.Provider >
      </div>
    );
  }

export default LearnerApp;
