import React from "react";
//import "./App.scss";
import Homepage from "./Pages/Homepage";
import Biography from "./Pages/Biography";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import ContactPage from "./Pages/Contact";
import NavBar from "./Components/navigation/NavBar";
// import { motion } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <NavBar id='navigation'/>
      <Switch>
       <Route path='/' exact component={Homepage} />
       <Route path='/about' exact component={Biography} />
       <Route path='/projects' exact component={Projects} />
       <Route path='/background' exact component={Skills} />
       <Route path='/contact' exact component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
