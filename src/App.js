import React from "react";
//import "./App.scss";
import Homepage from "./Pages/Homepage";
import Biography from "./Pages/Biography";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import ContactPage from "./Pages/Contact";
import NavBar from "./Components/navigation/NavBar";
// import { motion } from "framer-motion";

/* <Switch>
 <Route path='/' exact component={Homepage} />
 <Route path='/about' exact component={Biography} />
 <Route path='/projects' exact component={Projects} />
 <Route path='/background' exact component={Skills} />
 <Route path='/contact' exact component={ContactPage} />
</Switch> */

function App(props) {
  return (
    <>
      <NavBar id='navigation'/>
      <Homepage />
      <Biography />
      <Skills />
      <Projects />
      <ContactPage />
    </>
  );
}

export default App;
