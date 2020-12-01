
const QUOT = {
 init: function(nodeId) {
  //refernce node
  const $quot = () => document.getElementById(nodeId);
  //get started
  let data = fetch('/data.json')

   //parse
   .then(data => data.json())
   //define and refernce variables
   .then((data) => window.setInterval(() => {
    //create nodes
    let quote = document.createElement('div');
    let quoter = document.createElement("small");

    //afterwards add content to node"
    //But first ==>
    //remove space at start and end then add fullstop to .quoteContent
    //fetchedData.quoteContent.trim();

    let index = [Math.round(data.length * Math.random())];

    console.log(index)

    quote.appendChild(document.createTextNode(data[index][0]));

    quoter.appendChild(document.createTextNode(data[index][1]));

    //add stylesheet 
    quote.classList.add('quot');
    quoter.classList.add('quotr');
    //then add to holder
    $quot(nodeId).appendChild(quote);
    $quot(nodeId).appendChild(quoter);
   }, 5000)).then(()=>{
    nodeId.innerHTML = ''
   });
 }
}