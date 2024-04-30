import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Instructor/pages/Dashboard/Dashboard';
import Sidebar from './Instructor/components/Sidebar/Sidebar';
import Header from './Instructor/components/Header/Header';
import Courses from './Instructor/pages/Course/Courses';
import Student from './Instructor/pages/Students/Student';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Header />
        <div className='content-container'>
          {/* <Dashboard /> */}
          {/* <Courses /> */}
          <Student />
        </div>
      </div>
    </Router>
  );
}

export default App;