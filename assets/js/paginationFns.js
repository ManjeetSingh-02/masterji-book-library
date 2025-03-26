// import required variables
import { paginationObj } from "./constants.js";

// get elements from their id's
const pageNo = document.getElementById("pageNo");

let currentPage = 1;

// function to go to previous page
function prevPage() {
  currentPage--;
  changePage(currentPage);
  pageNo.textContent = currentPage;
}

// function to go to next page
function nextPage() {
  currentPage++;
  changePage(currentPage);
  pageNo.textContent = currentPage;
}

// function to change page on click
function changePage(currentPage) {}

function checkPages(previousPageBtn, nextPageBtn) {
  // if only single page, then disable buttons
  if (currentPage === 1) {
    // set disabled attribute to true
    previousPageBtn.disabled = true;

    // add disabled class
    previousPageBtn.classList.add("btn-disabled");

    // set disabled attribute to true
    nextPageBtn.disabled = true;

    // add disabled class
    nextPageBtn.classList.add("btn-disabled");
  } else {
    // set disabled attribute to false
    previousPageBtn.disabled = false;

    // remove disabled class
    previousPageBtn.classList.remove("btn-disabled");

    // set disabled attribute to false
    nextPageBtn.disabled = false;

    // remove disabled class
    nextPageBtn.classList.remove("btn-disabled");
  }
}

export { prevPage, nextPage, checkPages };
