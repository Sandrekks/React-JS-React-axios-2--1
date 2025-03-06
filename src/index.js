import React, {useRef, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import image from "./images/download.jpg";
import css from "./index.css";





function App() {
 
   const [color, setColor] = useState(false)  


   var result;
   if(color) {
    result =  <img src={image} className="foto"></img>  // true-ს შემთხვევაში გამოდის ფოტო
                                                                
   }else {
    result = null
   }

   var shecvla
   if(color) {
    shecvla = "True"    //ლოგიკა სადაც ყოველ კლიკზე იცვლება ტექსტი
   }else {
    shecvla = "false"
   }


  
  return (
 <>
 <button className="adgili" onClick={() => setColor(!color)}>{shecvla}</button>
 {result}
 </>
  )

}

 
var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


