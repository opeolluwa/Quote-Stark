const QUOT = {
 init: function(nodeId) {
  //refernce node
  const $quot = () => document.getElementById(nodeId);
  //get started
  let data = fetch('/data.json')
   //parse
   .then(data => data.json())
   //define and refernce variables
   .then((data) => {
    //define index holder
    let index = Math.round(data.length * Math.random());
    //a temporary holder
    fetchedData = {
     quoteContent: data[index][0],
     quoterContent: data[index][1]
    };
    //afterwards accept object
   }).then(() => {
    //create nodes
    let quote = document.createElement('div');
    let quoter = document.createElement("small");
    
    //afterwards add content to node
     fetchedData.quoteContent= (fetchedData.quoteContent[
     fetchedData.quoteContent.length - 1] === '.') ? fetchedData.quoteContent : fetchedData.quoteContent + '.';
    quote.appendChild(document.createTextNode(fetchedData.quoteContent));
    quoter.appendChild(document.createTextNode(fetchedData.quoterContent));
    //add stylesheet 
    quote.classList.add('quot');
    quoter.classList.add('quotr');
    //then add to holder
    $quot(nodeId).appendChild(quote);
    $quot(nodeId).appendChild(quoter);
   });
 }
}