//import quotes
import data from './data.js';
//refrence the root node 
let node = document.querySelector('[data-quot="node"]');
//define children nodrs
let quote = document.createElement('div');
let quoter = document.createElement("small");
//get quote randomly #index
 let index = [Math.round(data.length * Math.random())];
 //to start with : append quote and quoter on respective nodes 
 quote.innerHTML = data[index][0];
 quoter.innerHTML = data[index][1];
 //add stylesheet
node.appendChild(quote);
node.appendChild(quoter);
//append children nodes to root node
 quote.classList.add('quot');
 quoter.classList.add('quotr');
/*define a function that repeat the process
=> get index
=> get quote at index 
=> append quote and quoter to nodes
=> append quote and quoter nodes to root node
*/
function $quot() {
 let index = [Math.round(data.length * Math.random())];
 console.log(index)
 quote.innerHTML = data[index][0];
 quoter.innerHTML = data[index][1];
}

window.setInterval($quot, 10000);