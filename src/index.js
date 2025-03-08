import React, { useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import image from "./images/Untitled design.png";
import react from "./index.css";



function App() {

  const [data, setData] = useState([])
 
useEffect(function() {
  axios.get("https://fakestoreapi.com/products").then(function(response) {
    setData(response.data)
    
  }).catch(function(error) {
   console.log(error)
  })
}, []);



return (

  <React.Fragment>
    <div className="navbar">
      <div className="navbar-container">
        <img src={image} style={{width: "100px"}}></img> 
        <h1>E-Commerce</h1>
        <ul className="navbar-menu">
             <a href="">Home</a>
             <a href="">Products</a>
             <a href="">About</a>
             <a href="">Contact</a>
        </ul>
        
      </div>

    </div>

    <div className="grid-container">
      {
        data.map(function (item) {
          return (
           <div className="card">
                <h2 >{item.title} </h2>
                <h4 style={{ color: "green"}}>{item.price} $ </h4>
                <p >{item.description}</p>
                <h3>{item.category}</h3>
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="foto"></img>
                <p>{item.rating.rate}</p>
                <p>{item.rating.count}</p>
              </div>
           
          )
        })
      }
      </div>
   </React.Fragment>
)
}

 
var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


