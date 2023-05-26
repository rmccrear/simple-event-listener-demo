
const resultsElm = document.getElementById("results");

const mainBox = document.getElementById("main-box");



function handleClick(event) {
  let target = event.target;
  let pElm = document.createElement("div");

  if (target.id === "box-1") {
    pElm.textContent = "You clicked Box 1."
  } else if (target.id === "box-2") {
    pElm.textContent = "You clicked Box 2."
  } else if (target.id === "box-3") {
    pElm.textContent = "You clicked Box 3."
  }
  resultsElm.appendChild(pElm);
}

mainBox.addEventListener("click", handleClick);
