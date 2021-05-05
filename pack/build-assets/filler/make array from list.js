function getted() {
 let quotArr = [];
 let quotrArr = [];
 let holder = [];
 let arr = [];

 let response = fetch('u.txt')
  .then(response => response.text())
  .then(response => {
   holder = response.split('“').slice()
   let quot = null;
   // response.match(/“\w.*(?=\.”\s.*–)/igm);
   //let quotr = response.match(/–\s.*/ig).toString().replace(/–/g,'').trim();
   for (let elem of holder) {
    elem = elem.toString().replace(/”.*/, '').trim();
    if (elem) {
     quotArr.push(`["${elem}"]`);
    }
   }
   for (let elem of holder) {
    elem = elem.match(/”.*/igm);
    if (elem) {
     elem = elem.toString()
     .replace(/”/, '')
     .replace(/–/g, '')
     .replace(/―/, '').trim();
     quotrArr.push(`["${elem}"]`);
    }
   }
   console.log(quotrArr);
   for (let item = 0; item < holder.length ; item++) {
    arr.push(`[${quotArr[item]},
    ${quotrArr[item]}]`)
   }
   return arr
  }).then(arr => {
   let node = document.getElementById('node');
   node.appendChild(document.createTextNode(arr));

  })
}
getted()
/*elem = elem.slice(elem.indexOf('–'), elem[elem.length - 1]);
elem = elem.replace(/“/, '').trim();”.*“*/