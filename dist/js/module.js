//import quotes
import data from './data.js';
//refrence the root node 
let node = document.querySelector('[data-quot="node"]');
//define children nodrs
let quote = document.createElement('div');
let quoter = document.createElement("small");
//get quote randomly #index
 let index = [Math.round((data.length -1)* Math.random())];
 //to start with : append quote and quoter on respective nodes 
 quote.innerHTML = data[index][0];
 quoter.innerHTML = data[index][1];
 //add stylesheet
node.appendChild(quote);
node.appendChild(quoter);
//append children nodes to root node
 quote.classList.add('quot');
 //quote.classList.add('atz');
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
 //animate node
 node.animate([
  //keyframes
   { filter: 'blur(5px)' },
   { opacity: 0 },
   { filter: 'blur(0)' },
   { opacity: 1 }],
  {
   // timing options
   duration: 1000,
   delay:100,
   easing:'cubic-bezier(.55, .085, .68, .53)',
   fill:'both'
  });
}

window.setInterval($quot, 15000);
//window.setInterval(quote.classList.add('atz'), 10000)