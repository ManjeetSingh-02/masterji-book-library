// import required variable
import { fetchedBooks, paginationObj } from "./constants.js";

// import required function
import { addBook } from "./booksFns.js";

// get element from the id
const allBooksContainer = document.getElementById("allBooksContainer");

// get elements from their id's
const pageNo = document.getElementById("pageNo");

let currentPage = 1;

// function to go to previous page
function prevPage() {
  // decrease current page
  currentPage--;

  // move to that page (currentPage - 1 for 0-based indexing)
  changePage(currentPage - 1);

  // update page no
  pageNo.textContent = currentPage;
}

// function to go to next page
function nextPage() {
  // increase current page
  currentPage++;

  // move to that page (currentPage - 1 for 0-based indexing)
  changePage(currentPage - 1);

  // update page no
  pageNo.textContent = currentPage;
}

// function to change page and update books on click
function changePage(pageIndex) {
  // remove all the previous books from container
  allBooksContainer.innerHTML = "";

  // add the book into container
  fetchedBooks[pageIndex].forEach((book) => addBook(book));
}

function checkPages(previousPageBtn, nextPageBtn) {
  // if only single page, then disable buttons
  if (paginationObj.totalPages === 1) {
    // set disabled attribute to true
    previousPageBtn.disabled = true;

    // add disabled class
    previousPageBtn.classList.add("btn-disabled");

    // set disabled attribute to true
    nextPageBtn.disabled = true;

    // add disabled class
    nextPageBtn.classList.add("btn-disabled");
  } else {
    if (currentPage === 1) {
      // set disabled attribute to true
      previousPageBtn.disabled = true;

      // add disabled class
      previousPageBtn.classList.add("btn-disabled");
    } else if (currentPage === paginationObj.totalPages) {
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
}

export { prevPage, nextPage, checkPages };
