// import required variables
import { localStorageObj } from "./constants.js";

// get element from the id
const themeImg = document.getElementById("themeImg");

// load default theme function
function loadTheme() {
  // sets default theme to light mode
  if (!localStorageObj.theme) {
    localStorageObj.theme = "light";
    localStorage.setItem("booksLibrary", JSON.stringify(localStorageObj));
  }

  // if dark theme, switch to dark mode and theme Image
  if (localStorageObj.theme === "dark") {
    // add the dark class
    document.body.classList.add("dark");

    // change the button image
    themeImg.src = "./assets/icons/sun.svg";
  }
}

// update theme function
function switchTheme() {
  // get default object
  const localStorageObj = JSON.parse(localStorage.getItem("booksLibrary"));

  // change theme to light or dark mode
  if (localStorageObj.theme === "dark") {
    // remove the dark class
    document.body.classList.remove("dark");

    // change the button image
    themeImg.src = "./assets/icons/moon.svg";

    // change theme storage to light
    localStorageObj.theme = "light";
  } else {
    // add the dark class
    document.body.classList.add("dark");

    // change the button image
    themeImg.src = "./assets/icons/sun.svg";

    // change theme storage to dark
    localStorageObj.theme = "dark";
  }

  // update localstorage for theme
  localStorage.setItem("booksLibrary", JSON.stringify(localStorageObj));
}

// export functions
export { loadTheme, switchTheme };
