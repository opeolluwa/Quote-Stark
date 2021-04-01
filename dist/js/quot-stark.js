//import quote fonts
/*const _font = new FontFace("quotfont", "url(https://fonts.gstatic.com/s/newtegomin/v1/SLXMc1fV7Gd9USdBAfPlqfNxQ3xtkWkYSxz9uexWKiyH4XcZHjKjXGvykkE.2.woff2)", {});
document.font.add(_font);
_font.load().then((addToQuote)=> quote.style.fontFamily = "quotfont")*/
//import quots




import data from './data.js';
import stylesheet from './style.js';

//refrence the root node 
let node = document.querySelector('[data-quot="node"]');
//define children nodes
let quote = document.createElement('div');
let quoter = document.createElement("small");
//get quote randomly #index
let index = [Math.round((data.length - 1) * Math.random())];
//to start with : append quote and quoter on respective nodes 
quote.innerHTML = data[index][0];
quoter.innerHTML = `${String.fromCharCode(8212)+"  "+data[index][1]}`;
//add stylesheet
node.appendChild(quote);
node.appendChild(quoter);


//append styles to children nodes 
Object.assign(quote.style, stylesheet.quot);
Object.assign(quoter.style, stylesheet.quotr);
//hooks for custom stylesheet
quote.classList.add('quot');
quoter.classList.add('quotr');

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
quoter.innerHTML = `${String.fromCharCode(8212)+"  "+data[index][1]}`;

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
    delay: 100,
    easing: 'cubic-bezier(.55, .085, .68, .53)',
    fill: 'both'
  });
}

window.setInterval($quot, 15000);

