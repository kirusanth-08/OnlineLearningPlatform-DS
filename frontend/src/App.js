import './App.css';
import Navbar from './Learner/components/Navbar/Navbar';
import ContinueLearning from './Learner/components/ContinueLearning/ContinueLearning';
import Dashboard from './Instructor/pages/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <ContinueLearning /> */}
      <Dashboard />
    </div>
  );
}

export default App;
