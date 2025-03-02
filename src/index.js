import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";




function App() {
  const [time, dateTime] = useState(new Date());

    useEffect (function() {
       const date = new Date();
       dateTime(date)
    },[]);

    return (
      <>
      <p>{time.getDate()} / {time.getMonth()+ 1} / {time.getFullYear()}</p>
      <p>{time.getHours()} / {time.getMinutes() } / {time.getSeconds()}</p>
      </>
    )

  }



var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


