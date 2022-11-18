/**
 * 
 */
let today = new Date();
let a = today.toLocaleDateString();
let b = today.toLocaleTimeString();
document.querySelector("#date").innerHTML = a + "<br>" + b;
