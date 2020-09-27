import _ from "lodash";
import "./style.css";
import Icon from "./hurr.png";
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Lodash now imported by the script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');


    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());