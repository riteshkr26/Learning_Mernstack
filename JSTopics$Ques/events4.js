let li = document.querySelector("ul");

li.addEventListener("click", function(dets) {
   // dets.target.style.textDecoration = "line-through";
     dets.target.classList.toggle("lt");
});