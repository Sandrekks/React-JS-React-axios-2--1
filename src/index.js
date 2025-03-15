import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Information from "./components/Information";
import Contact from "./components/Contact";
import About from "./components/About";
import image from "./images/Your paragraph text.png";

function App() {
  const [data, setData] = useState([]);

  useEffect(function () {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="navbar">
          <div className="navbar-container">
            <a href="/">
              <img src={image} alt="Logo" />
            </a>
            <ul className="navbar-menu">
              <Link to={"/About"}>About</Link>
              <Link to={"/Contact"}>Contact</Link>
            </ul>
          </div>
        </div>

        <Routes>
          <Route
            path="/" index element={
              <div className="grid-container">
                {data.map(function (item) {
                  return (
                      <div className="card" key={item.id}>
                         <Link to={`/Information/${item.id}`}>
                        <p className="ptext1">{item.title}</p>
                      </Link>
                        <img src={item.image} width={100}/>
                        <p>Price: ${item.price}</p>
                      </div>
                    
                  );
                })}
              </div>
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Information/:id" element={<Information />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
