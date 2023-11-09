const header_icon = document.getElementById("header_icon");
const header_items = document.getElementById("header_items");

const header_search = document.getElementById("header_search");
const header_form = document.getElementById("header_form");

header_icon.addEventListener("click", () => {
  header_items.classList.toggle("header-item-show");
  header_form.classList.remove("header-form-show");
});

header_search.addEventListener("click", () => {
  header_form.classList.toggle("header-form-show");
  header_items.classList.remove("header-item-show");
});
