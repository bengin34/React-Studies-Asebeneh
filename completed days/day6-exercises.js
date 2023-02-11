import React from "react";
import ReactDOM from "react-dom";




//header
const Header = () => {
    return (
        <div className="container"  >
        <h1>30 Days Of React</h1>
        <h2>Number Generator</h2>
        </div>
    )
}









const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);