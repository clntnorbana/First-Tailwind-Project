const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");

  if (btn.classList.contains("open")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
