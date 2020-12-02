import data from './data.js';
let node = document.getElementById('tst');
 let quote = document.getElementById('div');

function drx() {
 let quote = document.getElementById('div');
 let quoter = document.getElementById("small");

 
 let index = [Math.round(data.length * Math.random())];

 console.log(index)

 quote.innerHTML = data[index][0];

 quoter.innerHTML = data[index][1];

 //add stylesheet 
 quote.classList.add('quot');

 quoter.classList.add('quotr');
}

window.setInterval(drx, 2000);