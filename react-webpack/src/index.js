import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'
import flower from '../src/assets/download.jpeg'

function App() {
  return (
    <div>
      <h1 className="heading-1">Nghiem Xuan Loc</h1>
      <a href="#">Home Page</a>
      <h3>abc</h3>
      <h4>Hom nay troi dep</h4>
      <img src={flower} alt="" />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
