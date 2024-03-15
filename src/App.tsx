import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./App/Home";
import AboutMe from './App/AboutMe';
import Assessments from './App/Assessments';
import Growth from './App/Growth';
import Interviews from './App/Interviews'; 
import Reflections from './App/Reflections';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/mybestselfportfolio/home" element={<Home />} />
          <Route path="/mybestselfportfolio/about-me" element={<AboutMe />} />
          <Route path="/mybestselfportfolio/interviews" element={<Interviews />} />
          <Route path="/mybestselfportfolio/assessments" element={<Assessments />} />
          <Route path="/mybestselfportfolio/reflections" element={<Reflections />} />
          <Route path="/mybestselfportfolio/growth" element={<Growth />} />
          {/* Redirect base URL to Home */}
          <Route path="/" element={<Home />} />
          {/* You can add a catch-all route for 404 not found pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;