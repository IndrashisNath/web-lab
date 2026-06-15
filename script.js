const themeToggleButton = document.querySelector("#theme-toggle");

themeToggleButton.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.body.removeAttribute("data-theme");
    themeToggleButton.textContent = "Toggle Dark Mode";
  } else {
    document.body.setAttribute("data-theme", "dark");
    themeToggleButton.textContent = "Toggle Light Mode";
  }
});

console.log("JS is connected! 🚀");