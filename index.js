const dropdownList = document.querySelector(".dropdown-list");
const toggleButton = document.querySelector(".toggle-nav");

toggleButton.addEventListener("click", function() {
  const visibility = dropdownList.getAttribute("data-visible");

  if (visibility === "false") {
    dropdownList.setAttribute("data-visible", true);
    toggleButton.setAttribute("data-visible", true);
  } else if (visibility === "true") {
    dropdownList.setAttribute("data-visible", false);
    toggleButton.setAttribute("data-visible", false);
  }
});

document.addEventListener("click", function(e) {
  if (e.target != toggleButton && e.target != dropdownList && e.target.parentNode != dropdownList && e.target.parentNode.parentNode != dropdownList) {
    dropdownList.setAttribute("data-visible", false);
    toggleButton.setAttribute("data-visible", false);
  }
});


/* document.addEventListener("click", e => {
  if (!toggleButton && e.target.closest("[data-dropdown]") != null) return
  const visibility = dropdownList.getAttribute("data-visible");
  if (visibility === "true") {
    dropdownList.setAttribute("data-visible", false);
    toggleButton.setAttribute("data-visible", false);
  }
  if (e.target === toggleButton) {
    if (visibility === "false") {
      dropdownList.setAttribute("data-visible", true);
      toggleButton.setAttribute("data-visible", true);
    } else if (visibility === "true") {
      dropdownList.setAttribute("data-visible", false);
      toggleButton.setAttribute("data-visible", false);
    }
  }
}); */