
function randomQuoteEngine(nodeId) {
 //declarations
 let max = quoteEngine.length + 1,
  min = 1,
  index = Math.round((max - min) * Math.random() + min),
  quoteArr = [quoteEngine[index][0],
quoteEngine[index][1]],
  container = document.getElementById(`${nodeId}`),
  quoteContainer = document.createElement('div'),
  quoterContainer = document.createElement('small');
 quote = document.createTextNode(quoteArr[0]),
  quoter = document.createTextNode(quoteArr[1]);
 //style
 quoteContainer.classList.add('quot');
 quoterContainer.classList.add('quotr');
 quoteContainer.appendChild(quote);
 quoterContainer.appendChild(quoter);
 container.appendChild(quoterContainer);
 container.insertBefore(quoteContainer, quoterContainer);
}