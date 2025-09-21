let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", function () {
  ul.style.display = "block";
  ul.style.backgroundColor = "#eee";
});

document.body.addEventListener("click", function (e) {
  if (!icon.contains(e.target) && !ul.contains(e.target)) {
    ul.style.display = "none";
  }
});


