function getted() {
 let quotArr = [];
 let quotrArr = [];
 let holder = [];
 let arr = [];

 let response = fetch('uu.txt')
  .then(response => response.text())
  .then(response => {
   response = response.replace(/\d{1,}\./igm, '');
   holder = response.split('“').slice()
   
   for (let elem of holder) {
    elem = elem.toString().replace(/”.*/, '').replace(/-\s.*/igm,'').trim();
    if (elem) {
     quotArr.push(`["${elem}"]`);
    }
       }
   for (let elem of holder) {
    elem = elem.match(/-\s.*/igm);
    if (elem) {
     elem = elem.toString()
      .replace(/-/g, '')
      .replace(/―/, '').trim();
     quotrArr.push(`["${elem}"]`);
    }
   }
   console.log(quotrArr);
   for (let item = 0; item < holder.length - 1; item++) {
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