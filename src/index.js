import React from "react";
import ReactDOM from "react-dom/client"

const cvladiOne = 40;
const cvladiTwo = 50;


function App() {
    return (
        <p>{cvladiOne + cvladiTwo}</p>
    ) 


}



var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


