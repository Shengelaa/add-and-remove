const first = document.querySelector("#first");
const second = document.querySelector("#second");
const container = document.querySelector(".container");
let block;
first.addEventListener("click", function () {
  block = document.createElement("div");
  block.classList.add("block");
  container.appendChild(block);
});

second.addEventListener("click", function () {
  container.removeChild(block);
});
