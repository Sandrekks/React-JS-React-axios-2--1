import React, {useState} from "react";
import ReactDOM from "react-dom/client"





function App() {
    const [cvladiOne, increaseTwo] = useState(0);
    return (

        <React.Fragment>
        
        <button onClick={() => increaseTwo(cvladiOne + 2)}>click 2x</button>


<p>increase 2x: {cvladiOne}</p>

        </React.Fragment> 
    ) 

}



var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


