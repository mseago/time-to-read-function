
var wikiarticle = document.querySelector("#container");
var minToRead = document.querySelector("#min-to-read");
//minToRead holds DOM Element

console.log(minToRead);

function timeToRead(str) {
  console.log(str);
  var x = str.split(" ").length;
  x = x/230;
  x = Math.round(x);
  return x;
}


var result = timeToRead(wikiarticle.textContent);
//textContent holds text for DOM element
minToRead.textContent = result + " minutes to read";


  console.log(result);
