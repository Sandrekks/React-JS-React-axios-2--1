import React, {useRef, useEffect} from "react";
import ReactDOM from "react-dom/client";
import image from ".//images/download.jpg";
import css from "./index.css";




function App() {
  const number = useRef();

  const focusi = useRef();

 
    useEffect(() => {
    number.current.focus()
    focusi.current.focus();
    });


    function onClickk() {
      window.alert("Hello World")
    }
    
  
  return (
     <>
     <input type="text" ref={number}/>

     <button onClick={onClickk} ref={focusi} >click</button>
     
     </>
  )

}

 
var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


