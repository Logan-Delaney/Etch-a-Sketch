const container = document.querySelector("#container");
let side = 16;
let fill = side * side;
let btn = document.querySelector("#btn")
let dimension = 0

function populateDivs(side) {
  fill = side * side;
for (i = 1; i <= fill; i++) {
  dimension = 600 / side - 2 + "px";
  // dimension += "px"
  const newdiv = document.createElement("div");
  container.appendChild(newdiv).id = "newdiv";
  newdiv.style.border = "1px solid black";
  newdiv.style.minHeight = dimension;
  newdiv.style.minWidth = dimension;
  newdiv.style.flexWrap = "wrap";
  newdiv.addEventListener("mouseover", (e) => {
    newdiv.style.backgroundColor = "#000000";
  });
  window.addEventListener('scroll', () => {
    newdiv.style.backgroundColor = "gray";
  });
  
}
}

populateDivs(side)

btn.addEventListener("click", () =>{
  side = prompt("How many squares per side");
  container.innerHTML = "";
  if (side >= 16 && side <= 100){
  populateDivs(side);}
  else{
    populateDivs(16)
    alert("Input must be between 16 and 100")
  }
})
