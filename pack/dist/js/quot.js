const QUOT = {
 init: function(nodeId) {
  //refernce node
  /*const $quot = () => {
   let node = document.getElementById(nodeId);
   let quote = document.createElement('div');
   let quoter = document.createElement('small');

   node.appendChild(quote);
   node.appendChild(quoter);

   return [quote, quoter]
  }*/
  //get started
  let data = fetch('/data.json')

   //parse
   .then(data => data.json())
   //define and refernce variables
   .then((data) => window.setInterval(() => {
    //create nodes
    let quote = document.getElementById('div');
    let quoter = document.getElementById("small");

    //afterwards add content to node"
    //But first ==>
    //remove space at start and end then add fullstop to .quoteContent
    //fetchedData.quoteContent.trim();

    let index = [Math.round(data.length * Math.random())];

    console.log(index)

    quote.innerHTML = data[index][0];

   quoter.innerHTML = data[index][1];

    //add stylesheet 
    quote.classList.add('quot');
    quote.classList.add('text-blur-out')
    quoter.classList.add('quotr');
    //then add to holder
    //$quot(nodeId).appendChild(quote);
    //$quot(nodeId).appendChild(quoter);
   }, 3500))
 }
}