const container = document.querySelector("#container");
let side = 100;
let fill = side * side;

for (i = 1; i <= fill; i++) {
  let dimension = 600 / side - 2 + "px";
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
}
