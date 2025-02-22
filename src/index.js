import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import surati from "./images/download.jpg";
import suratiori from "./images/gratisography-augmented-reality-800x525.jpg";
import suratisami from "./images/images.png";
import suratiotxi from "./images/istockphoto-517188688-612x612.jpg";



function App() {
    
    return (
        <React.Fragment>
            <div>
       <img src={surati} ></img>
       <img src={suratiori} width={"300px"} ></img>
       <img src={suratisami}></img>
       <img src={suratiotxi} width={"300px"}></img>
       </div>
       </React.Fragment>
    )

  }



var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


