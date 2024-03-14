import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./App/Landing";
import AboutMe from './App/AboutMe'; 
// import Interviews from './App/Interviews'; 
// import Assessments from './App/Assessments';
// import Reflections from './App/Reflections'; 
// import Growth from './App/Growth';


function App() {
  return (
    <BrowserRouter basename="/mybestselfportfolio">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-me" element={<AboutMe />} />
        {/* <Route path="/interviews" element={<Interviews />} />
        <Route path="/self-reflection" element={<Reflections />} />
        <Route path="/growth" element={<Growth />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
