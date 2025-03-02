import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css"


function App() {
  const numbers = [-1]
    const number = numbers[0]

  if(number >= 0) {
    return(
      <div className="GreenSquare"></div>
    )
  }else if(number < 0)
    return(
      <div className="RedSquare"></div>
    )

  }
var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


