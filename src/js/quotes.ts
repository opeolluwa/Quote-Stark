import data from "./data.json"
 class Quotes {
    public init(selector: string, duration: number = 15000) {
        //reference the parent element and create two child elements to hold the quote and author 
        const parentElement = document?.querySelector(selector)
        const quoteContainer = document?.createElement("div");
        const quoterContainer = document?.createElement("small")

        //generate the quote and append them to the elements
        const quoteIndex = Math.round((data.length - 1) * Math.random())
        quoteContainer.innerHTML = data[Number(quoteIndex)].quote
        quoterContainer.innerHTML = data[Number(quoteIndex)].quoter

        //append the elements to the parent element
        parentElement?.appendChild(quoteContainer)
        parentElement?.appendChild(quoterContainer)


        //append styling the the children elements
        quoteContainer.classList.add("quote")
        quoterContainer.classList.add("quoter")

        //animate node
        window.setInterval(this.run, duration);

    }


    run(parentElement: HTMLElement, quoteContainer: HTMLElement, quoterContainer: HTMLElement) {
        //generate the quote and append them to the elements
        const quoteIndex = Math.round((data.length - 1) * Math.random())
        quoteContainer.innerHTML = data[Number(quoteIndex)].quote
        quoterContainer.innerHTML = data[Number(quoteIndex)].quoter

        //append the elements to the parent element
        parentElement?.appendChild(quoteContainer)
        parentElement?.appendChild(quoterContainer)


        /*   let index = [Math.round(data.length * Math.random())];
  
          quote.innerHTML = data[index][0];
          quoter.innerHTML = data[index][1];
   */
        //animate node
        parentElement.animate([
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

    // window.setInterval($quot, 15000);


}

//refrence the root node 
// let node = document.querySelector('[data-quot="node"]');
// //define children nodes
// let quote = document.createElement('div');
// let quoter = document.createElement("small");
// //get quote randomly #index
// let index = [Math.round((data.length - 1) * Math.random())];
// //to start with : append quote and quoter on respective nodes 
// quote.innerHTML = data[index][0];
// quoter.innerHTML = data[index][1];
// //add stylesheet
// node.appendChild(quote);
// node.appendChild(quoter);


//append styles to children nodes 
//Object.assign(quote.style, stylesheet.quot);
//Object.assign(quoter.style, stylesheet.quotr);
//hooks for custom stylesheet
// quote.classList.add('quot');
// quoter.classList.add('quotr');

//quote.classList.add('atz');
/*define a function that repeat the process
=> get index
=> get quote at index
=> append quote and quoter to nodes
=> append quote and quoter nodes to root node
*/
// function $quot() {
//     let index = [Math.round(data.length * Math.random())];

//     quote.innerHTML = data[index][0];
//     quoter.innerHTML = data[index][1];

//     //animate node
//     node.animate([
//         //keyframes
//         { filter: 'blur(5px)' },
//         { opacity: 0 },
//         { filter: 'blur(0)' },
//         { opacity: 1 }],
//         {
//             // timing options
//             duration: 1000,
//             delay: 100,
//             easing: 'cubic-bezier(.55, .085, .68, .53)',
//             fill: 'both'
//         });
// }

// window.setInterval($quot, 15000);

