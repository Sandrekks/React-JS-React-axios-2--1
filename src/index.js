import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";



function App() {

 function useOption(a, b) {
  console.log( a + b)
   

 }

 useOption(40, 32)

return (

  console.log(40, 33)
 
)
  
}
var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


