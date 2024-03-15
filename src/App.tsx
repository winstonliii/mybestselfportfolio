import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./App/Home";
import AboutMe from "./App/AboutMe";
import Assessments from "./App/Assessments";
import Growth from "./App/Growth";
import Interviews from "./App/Interviews";
import Reflections from "./App/Reflections";
import Landing from "./App/Landing";
import "./index.css";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />

          <Routes>
            <Route
              path="/mybestselfportfolio/home"
              element={
                <>
                  <Landing />
                  <Home />
                </>
              }
            />
            <Route path="/mybestselfportfolio/about-me" element={<AboutMe />} />
            <Route
              path="/mybestselfportfolio/interviews"
              element={<Interviews />}
            />
            <Route
              path="/mybestselfportfolio/assessments"
              element={<Assessments />}
            />
            <Route
              path="/mybestselfportfolio/reflections"
              element={<Reflections />}
            />
            <Route path="/mybestselfportfolio/growth" element={<Growth />} />
            <Route
              path="/mybestselfportfolio"
              element={
                <>
                  <Landing />
                  <Home />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
