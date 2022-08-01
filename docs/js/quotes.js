import data from "./data.js";
const duration = 15000;
// function Quotes(selector: string, duration: number = 15000) {
//reference the parent element and create two child elements to hold the quote and author 
const parentElement = document === null || document === void 0 ? void 0 : document.querySelector("[data-quotes-container]");
const quoteContainer = document === null || document === void 0 ? void 0 : document.createElement("div");
const quoterContainer = document === null || document === void 0 ? void 0 : document.createElement("small");
//generate the quote and append them to the elements
const quoteIndex = Math.round((data.length - 1) * Math.random());
quoteContainer.innerHTML = data[Number(quoteIndex)].quote;
quoterContainer.innerHTML = data[Number(quoteIndex)].quoter;
//append the elements to the parent element
parentElement === null || parentElement === void 0 ? void 0 : parentElement.appendChild(quoteContainer);
parentElement === null || parentElement === void 0 ? void 0 : parentElement.appendChild(quoterContainer);
//append styling the the children elements
quoteContainer.classList.add("quote");
quoterContainer.classList.add("quoter");
function run() {
    //generate the quote and append them to the elements
    const quoteIndex = Math.round((data.length - 1) * Math.random());
    quoteContainer.innerHTML = data[Number(quoteIndex)].quote;
    quoterContainer.innerHTML = data[Number(quoteIndex)].quoter;
    //append the elements to the parent element
    parentElement === null || parentElement === void 0 ? void 0 : parentElement.appendChild(quoteContainer);
    parentElement === null || parentElement === void 0 ? void 0 : parentElement.appendChild(quoterContainer);
    //animate node
    parentElement === null || parentElement === void 0 ? void 0 : parentElement.animate([
        //keyframes
        { filter: 'blur(5px)' },
        { opacity: 0 },
        { filter: 'blur(0)' },
        { opacity: 1 }
    ], {
        // timing options
        duration: 1000,
        delay: 100,
        easing: 'cubic-bezier(.55, .085, .68, .53)',
        fill: 'both'
    });
}
//animate node
window.setInterval(run, duration);
// }
