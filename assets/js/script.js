// import required variables
import { fetchedBooks, paginationObj } from "./constants.js";

// import all the functions from other files
import { loadTheme, switchTheme } from "./themeFns.js";
import { loadBooks, searchBooks } from "./booksFns.js";
import { loadLayout, switchLayout } from "./layoutFns.js";
import { nextPage, prevPage, checkPages } from "./paginationFns.js";
import { sortBooks, resetBooks } from "./sortFns.js";

// get all the elements from their id's
const switchThemeBtn = document.getElementById("switchThemeBtn");
const openGitHubBtn = document.getElementById("openGitHubBtn");
const listViewBtn = document.getElementById("listViewBtn");
const gridViewBtn = document.getElementById("gridViewBtn");
const bookSearch = document.getElementById("bookSearch");
const sortByTitle = document.getElementById("sortByTitle");
const sortByRelease = document.getElementById("sortByRelease");
const sortByDefault = document.getElementById("sortByDefault");
const previousPageBtn = document.getElementById("previousPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");

// search books on typing input
bookSearch.addEventListener("input", (event) => searchBooks(event));

// switch theme on click of the button
switchThemeBtn.addEventListener("click", switchTheme);

// open github link on click of the button
openGitHubBtn.addEventListener("click", () => window.open("https://github.com/ManjeetSingh-02/masterji-book-library"));

// switch layout on click of the button
listViewBtn.addEventListener("click", () => switchLayout("list"));
gridViewBtn.addEventListener("click", () => switchLayout("grid"));

// sort books order on click
sortByTitle.addEventListener("click", () => sortBooks("title"));
sortByRelease.addEventListener("click", () => sortBooks("release"));
sortByDefault.addEventListener("click", resetBooks);

// move to different pages on click
previousPageBtn.addEventListener("click", () => {
  prevPage();
  checkPages(previousPageBtn, nextPageBtn);
});
nextPageBtn.addEventListener("click", () => {
  nextPage();
  checkPages(previousPageBtn, nextPageBtn);
});

// load the default functionality when page loads first time
document.addEventListener("DOMContentLoaded", async () => {
  // if not present, store default empty object in localstorage
  if (!localStorage.getItem("booksLibrary")) localStorage.setItem("booksLibrary", JSON.stringify({}));

  // load default theme
  loadTheme();

  // load default layout
  loadLayout();

  // load default books
  await loadBooks();

  // update total no of pages
  paginationObj.totalPages = fetchedBooks.length;

  // check for multiple pages for pagination
  checkPages(previousPageBtn, nextPageBtn);
});
