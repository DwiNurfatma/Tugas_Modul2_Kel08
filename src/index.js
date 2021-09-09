import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Menus from "./Components/Menus/index";
import Desc from "./Components/Desc/index";
import Foods from "./Components/Foods/index";
import style from "./style.css";
const desc = "Welcome to CAFE COFFEE";

const menu = [
  { name: "Espresso",option:"Hot",price: "15 K" },
  { name: "Risetto",option:"Hot", price: "15 K" },
  { name: "Piccolo Latte",option:"Hot", price: "18 K" },
  { name: "Cappuccino",option:"Hot/Ice", price: "25 K" },
  { name: "Mocha Latte", option:"Ice",price: "28 K" },
  { name: "Affogato", option:"Hot",price: "30 K" },
];
const food= [
  { name: "Pies", option:"Small/Big", price: "20 K/25 K" },
  { name: "Butter Croissant",option:"Small/Big", price: "25 K/30 K" },
  { name: "Sandwich",option:"Fruit/Meet", price: "18 K/30 K" },
  { name: "Brownies", option:"Chocolate/Vanilla",price: "20 K" },
];
ReactDOM.render(
  <React.StrictMode>
    <div className="body">
    <App />
    <Desc desc ={desc}/>
    <Menus menu={menu}/>
    <Foods food={food}/>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
