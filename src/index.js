//var Toplayici = require("./toplayici");
//import { topla } from '../toplayici'; //vscode ile src klasörü içerisine sürükle bırak yaptıktan sonra iki nokta olarak "../" yaptı
//var myValue1 = 6;
//var myValue2 = 7;
//var myArray = [1,2,3];
//console.log(...myArray);
//console.log(topla(myValue1,myValue2));

// import ReactDOM from "react-dom";
// import React from "react";

//import {App1, App3} from "./app";
//import App2 from "./app";

// import {AppContainer} from "react-hot-loader";
// ReactDOM.render(
//     <div>
// <AppContainer>
// <div>
//     <App name="app name">
//         <button> -Button</button>
//     </App>
// </div></AppContainer>,
// </div>,
// document.getElementById("content"))

//<App1 name="Cenk" />
//<App2 name="Yeniköylü" surname="yenikoylu" />

import ReactDOM from "react-dom";
import React from "react";
import {App} from "./app.js"
ReactDOM.render(
<div>
    <App name="app name">
        <button> -Button</button>
    </App>
</div>,
document.getElementById("content"))

