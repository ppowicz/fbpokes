/*
  @ppowicz - github.com/ppowicz
  made for personal use only
*/

var pokeButtonText = "Poke Back";
var todayText =      "Today";
var yesterdayText =  "Yesterday";
var codeInterval =   1; // seconds

console.clear()
console.log("Poke bot by @ppowicz\nDo not refresh the page!");

setInterval(() => {
  document.title = "Poke Bot Running | Facebook";

  Array.prototype.map.call(document.querySelectorAll("span .a8c37x1j"), v => {
    if (v.innerHTML === pokeButtonText) {
      let parentElement = v.closest(".ow4ym5g4");
      let wrapperElement = parentElement.childNodes[0].childNodes[0].childNodes[0];
      let name = wrapperElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML;
      let date = wrapperElement.childNodes[1].childNodes[0].innerHTML;
      if (date.contains(todayText) || date.contains(yesterdayText)) {
        v.click();
        console.log("Poked", name + "!");
      }
    }
  })
}, codeInterval * 1000);