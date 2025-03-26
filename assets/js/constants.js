// get default object
const localStorageObj = JSON.parse(localStorage.getItem("booksLibrary"));

// array to store books
const fetchedBooks = [];

// object to store books data
const paginationObj = {
  // variable to store no of total pages
  totalPages: 0,

  // to check no of books in each set
  booksPerSet: 9,

  // total no of books per page
  booksPerPage: 9,
};

export { localStorageObj, fetchedBooks, paginationObj };
