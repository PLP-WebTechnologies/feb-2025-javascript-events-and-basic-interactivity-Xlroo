const button = document.getElementById("btn");
const text = document.getElementById("toggleText");

button.onclick = function () {
  const isHidden = window.getComputedStyle(text).display === "none";
  
  if (isHidden) {
    text.style.display = "block";
    button.textContent = "You signed up already";
  }
};
const button = document.getElementById("btn");

button.addEventListener("dblclick", function () {
  alert("🔐 Secret double-click activated!");
});
  