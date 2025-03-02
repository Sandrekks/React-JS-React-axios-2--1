import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";




function App() {
   
  useEffect(function() {
    const timer = setTimeout(() => {
      document.body.style.backgroundColor = "purple"
    },2000)
  })

    return (
      <>
      
      </>
    )

  }



var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


