import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LearnerApp from "./Learner/LearnerApp";
import InstructorApp from "./Instructor/InstructorApp";
import AdminApp from "./Admin/AdminApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<LearnerApp />} />
        <Route path="/instructor/*" element={<InstructorApp />} />
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
    </Router>
  );
}

export default App;
