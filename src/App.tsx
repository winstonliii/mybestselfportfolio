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
import Footer from "./components/Footer";

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
            <Route
              path="/mybestselfportfolio/about-me"
              element={
                <>
                  {" "}
                  <AboutMe /> <Footer />{" "}
                </>
              }
            />
            <Route
              path="/mybestselfportfolio/interviews"
              element={
                <>
                  {" "}
                  <Interviews /> <Footer />{" "}
                </>
              }
            />
            <Route
              path="/mybestselfportfolio/assessments"
              element={
                <>
                  <Assessments /> <Footer />{" "}
                </>
              }
            />
            <Route
              path="/mybestselfportfolio/reflections"
              element={
                <>
                  <Reflections /> <Footer />{" "}
                </>
              }
            />
            <Route
              path="/mybestselfportfolio/growth"
              element={
                <>
                  <Growth />
                  <Footer />
                </>
              }
            />
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
