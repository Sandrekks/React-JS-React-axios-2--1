import React, {useRef, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Home  from "./components/Home";
import contact from "./components/contact";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
   

  
  return (
  <React.Fragment>
    <BrowserRouter>
    <Routes>
      <Route path="/componentHome" element={Home}></Route>
      <Route path="/componentContact" element={contact}></Route>
      <Route path="/componentAbout" element={About}></Route>

      
    </Routes>
    </BrowserRouter>
  </React.Fragment>
 
  )

}

 
var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


