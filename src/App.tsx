import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./App/Home";
import AboutMe from "./App/AboutMe";
import Assessments from "./App/Assessments";
import Growth from "./App/Growth";
import Interviews from "./App/Interviews";
import Reflections from "./App/Reflections";
import Landing from "./App/Landing";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router> 
        <NavBar />

        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Landing />
                <Home />
              </>
            }
          />
          <Route
            path="/about-me"
            element={
              <>
                <AboutMe />
                <Footer />
              </>
            }
          />
          <Route
            path="/interviews"
            element={
              <>
                <Interviews />
                <Footer />
              </>
            }
          />
          <Route
            path="/assessments"
            element={
              <>
                <Assessments />
                <Footer />
              </>
            }
          />
          <Route
            path="/reflections"
            element={
              <>
                <Reflections />
                <Footer />
              </>
            }
          />
          <Route
            path="/growth"
            element={
              <>
                <Growth />
                <Footer />
              </>
            }
          />
          <Route
            path="/" // This is the default route
            element={
              <>
                <Landing />
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
