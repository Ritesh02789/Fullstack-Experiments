const text = document.getElementById("text");
const counter = document.getElementById("counter");

text.addEventListener("input", function () {
  counter.textContent = text.value.length;
});
