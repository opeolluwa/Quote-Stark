import data from './data.js';
let node = document.querySelector('div[data-quot="node"]');
let quote = document.createElement('div');
let quoter = document.createElement("small");
node.appendChild(quote);
node.appendChild(quoter);

function drx() {


 let index = [Math.round(data.length * Math.random())];

 console.log(index)

 quote.innerHTML = data[index][0];

 quoter.innerHTML = data[index][1];

 //add stylesheet 
 quote.classList.add('quot');
 quoter.classList.add('quotr');
}

window.setInterval(drx, 5000);