import React from 'react';
import {Header,Hero,About,Education,Skills,Experience,Projects,Contact,Footer} from './Sections';
import "bootstrap/dist/js/bootstrap"
import "jquery/dist/jquery"
import "@popperjs/core/dist/umd/popper"
import "smooth-scroll/dist/smooth-scroll.polyfills"
import "./assets/css/neumorphism.css"
import "./assets/js/neumorphism"
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/> 
    </div>
  );
}

export default App;
