import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Navbar from './Navbar/Navbar.jsx';
import Hero from './Hero/Hero.jsx';
import About from './About/About.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Skills from './Skill/Skills.jsx';
import Contact from './Contact/Contact.jsx';
import { HelmetProvider } from "react-helmet-async";
import Footer from './Footer/Footer.jsx';
import React from 'react';
import Experience from './Experience.jsx';





function App() {

  const [toggle, setToggle] = React.useState(false)

  const handleToggle =()=>{
    setToggle(!toggle)
  }

  const styles = {
    backgroundColor: toggle ? '#171717' : '#FAFAFA',
    color: toggle ? '#FFFFFF' : '#333333',
  }


  return (
    <HelmetProvider>
      <main className={toggle ? "dark" : "light"}>
        <Navbar 
          handleToggle={handleToggle} 
          toggle={toggle} 
          style={styles}
        />
        <Hero style={styles}/>
        <About style={styles}/>
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
  </HelmetProvider>
   
  );
}

export default App;
