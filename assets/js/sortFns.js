// function to sort books by title
function sortBooks(type, fetchedBooks) {
  // variables to store sorted books and sort type
  let sortedBooks, elementType;

  if (type === "title") {
    // store sorted books on basis of title
    sortedBooks = fetchedBooks.sort((a, b) => a.title.localeCompare(b.title));

    // set the element type to title for searching in HTML elements
    elementType = "title";
  } else {
    // store sorted books on basis of published date
    sortedBooks = fetchedBooks.sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate));

    // set the element type to published date for searching in HTML elements
    elementType = "publishedDate";
  }

  // define default order
  let defOrder = 1;

  // change order of each book element on the basis of sorted array books
  sortedBooks.forEach((book) => {
    // find books
    const findBooksElement = document.querySelectorAll(`[${elementType}="${book[elementType]}"]`);

    // get each book element if multiple found
    findBooksElement.forEach((bookElement) => {
      // change order of current book
      bookElement.style.order = defOrder;

      // increase order for next book
      defOrder++;
    });
  });
}

// export functions
export default sortBooks;
