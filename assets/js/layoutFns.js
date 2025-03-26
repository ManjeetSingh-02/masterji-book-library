// import required variables
import { localStorageObj } from "./constants.js";

// get elements from their id's
const listViewBtn = document.getElementById("listViewBtn");
const gridViewBtn = document.getElementById("gridViewBtn");
const allBooksContainer = document.getElementById("allBooksContainer");

// function to load the layout
function loadLayout() {
  // set default layout to grid
  if (!localStorageObj.booksLayout) {
    localStorageObj.booksLayout = "grid";
    localStorage.setItem("booksLibrary", JSON.stringify(localStorageObj));
  }

  // if list layout, switch to list view
  if (localStorageObj.booksLayout === "list") {
    // remove the selected class from grid button
    gridViewBtn.classList.remove("view-selected");

    // add the selected class into list button
    listViewBtn.classList.add("view-selected");

    // remove the grid layout class from container
    allBooksContainer.classList.remove("books-grid-view");

    // add the list layout class into container
    allBooksContainer.classList.add("books-list-view");
  }
}

// function to switch the layout
function switchLayout(type) {
  // get default object
  const localStorageObj = JSON.parse(localStorage.getItem("booksLibrary"));

  if (type === "list") {
    // remove the selected class from grid button
    gridViewBtn.classList.remove("view-selected");

    // add the selected class into list button
    listViewBtn.classList.add("view-selected");

    // remove the grid layout class from container
    allBooksContainer.classList.remove("books-grid-view");

    // add the list layout class into container
    allBooksContainer.classList.add("books-list-view");

    // change layout to list
    localStorageObj.booksLayout = "list";
  } else {
    // remove the selected class from list button
    listViewBtn.classList.remove("view-selected");

    // add the selected class into grid button
    gridViewBtn.classList.add("view-selected");

    // remove the list layout class from container
    allBooksContainer.classList.remove("books-list-view");

    // add the grid layout class into container
    allBooksContainer.classList.add("books-grid-view");

    // change layout to grid
    localStorageObj.booksLayout = "grid";
  }

  // update localstorage for layout
  localStorage.setItem("booksLibrary", JSON.stringify(localStorageObj));
}

// export functions
export { loadLayout, switchLayout };
