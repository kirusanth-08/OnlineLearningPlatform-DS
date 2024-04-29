import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Instructor/pages/Dashboard';
import Sidebar from './Instructor/components/Sidebar/Sidebar';
import Header from './Instructor/components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Header />
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;