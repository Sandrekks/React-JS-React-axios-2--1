import React from "react";
import ReactDOM from "react-dom/client"


function App() {
    return (
        <React.Fragment>
            <p>Hello World!</p>
           
        </React.Fragment>
    )
        
}

var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


