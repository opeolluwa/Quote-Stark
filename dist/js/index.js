//import quots

import data from './data.js';
const stylesheet = {
  "@font-face": [
    { fontFamily: "quotfont", src: "url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap')" },
    { fontFamily: "quotrfont", src: "url(../font/7.ttf)" }
  ],
  "@-webkit-keyframes text-focus-in": {
    "0%": { WebkitFilter: "blur(12px)", filter: "blur(12px)", opacity: 0 },
    "100%": { WebkitFilter: "blur(0)", filter: "blur(0)", opacity: 1 }
  },
  "@keyframes text-focus-in": {
    "0%": { WebkitFilter: "blur(12px)", filter: "blur(12px)", opacity: 0 },
    "100%": { WebkitFilter: "blur(0)", filter: "blur(0)", opacity: 1 }
  },
  "quot": {
    fontSize: "110%",
    fontWeight: 200,
    fontFamily: "'New Tegomin', serif;",
    textAlign: "center",
    marginBottom: "1rem",
    maxWidth: "60%",
    marginLeft: "20%",
    WebkitAnimation: "text-focus-in 1000ms  1 both",
    animation: "text-focus-in 1000ms cubic-bezier(.55, .085, .68, .53) 1 both",
  },
  "quot:after,\nquot:before": { fontSize: "100%" },
  "quot:after": { content: '"\\00A0\\201D"' },
  "quot:before": { content: '"\\201C\\00A0"' },
  "quotr": {
    textAlign: "center",
    display: "block",
    fontSize: "80%",
    fontFamily: "quotrfont",
    color: "#6c757d"
  },
  "quotr:before": { content: '"\\2014\\00A0"' }
}




//refrence the root node 
let node = document.querySelector('[data-quot="node"]');
//define children nodes
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
 //quote.classList.add('quot');
 //quote.classList.add(style.quote);
 
 Object.assign(quote.style, stylesheet.quot);
  Object.assign(quoter.style, stylesheet.quotr);

 //quote.classList.add('atz');
/*define a function that repeat the process
=> get index
=> get quote at index 
=> append quote and quoter to nodes
=> append quote and quoter nodes to root node
*/
function $quot() {
 let index = [Math.round(data.length * Math.random())];

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
//Object.assign(node, converted);
