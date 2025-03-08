import React, { useEffect} from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

function App() {
 
  useEffect(function() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(function(response) {
    console.log(response.data)
    }).catch(function(error)
     {
      console.log(error)
    })
  });
   

  
  return (
 <React.Fragment>

  
 </React.Fragment>
 
  )

}

 
var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


