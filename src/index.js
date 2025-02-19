import React from "react";
import ReactDOM from "react-dom/client"
import Navigation from "./header";
import Footer from "./footer";

function App() {
    return (
        <React.Fragment>
        <Navigation></Navigation>

        <button onClick={showAlert}>Click</button>
        
       <Footer></Footer>
               
       </React.Fragment>
    )
        
}

 function showAlert() {
    alert("გამარჯობა მსოფლიო!")
 }


var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


