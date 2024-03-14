import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutMe from './App/AboutMe';
import Assessments from './App/Assessments';
import Growth from './App/Growth';

import Interviews from './App/Interviews'; 

import Reflections from './App/Reflections';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/mybestselfportfolio/about-me" Component={AboutMe} />
        <Route path="/mybestselfportfolio/interviews" Component={Interviews} />
        <Route path="/mybestselfportfolio/assessments" Component={Assessments} />
        <Route path="/mybestselfportfolio/reflections" Component={Reflections} />
        <Route path="/mybestselfportfolio/growth" Component={Growth} />
      </Switch>
    </Router>
  );
};

export default App;
