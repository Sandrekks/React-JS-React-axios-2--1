import React from "react";
import ReactDOM from "react-dom/client";



function App() {

  const num1 = 10;
  const num2 = 34;
  let shedegi;
                    //ამ დავალებაში მოცემულია ორი რიცხვის შედარება ექსფრეშენში და გამოყენებულია if/else
                      //კონსტრუქცია.

  if (num1 > num2) {
    shedegi = num1;
  } else if(num1 < num2) {
    shedegi = num2;
  }

return (
  
  <React.Fragment>
    <p >{shedegi}</p>
    
  </React.Fragment>
)
  
}
var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


