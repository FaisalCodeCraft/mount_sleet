import React from "react";
import "./App.css";
import Home from "pages/Home";
import {  Route, Routes } from "react-router-dom";
import About from "pages/About";
import Trails from "pages/Trails";
import News from "pages/SleetNews";
import Contact from "pages/Contact";

const App = () => {
  return (
    <React.Fragment>
     
        <Routes>
          <Route  path="/" element={<Home />}></Route>
          <Route  path="/mount_sleet" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Trails" element={<Trails />}></Route>
          <Route path="/News" element={< News/>}></Route>
          <Route path="/Contact" element={< Contact/>}></Route>
        </Routes>
      {/* </BrowserRouter> */}
      
    </React.Fragment>
  );
};

export default App;
