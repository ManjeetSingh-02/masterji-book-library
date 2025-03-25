// function to sort books by title
function sortBooks(type, fetchedBooks) {
  if (type === "title") {
    // sort books on basis of title
    const sortedBooks = fetchedBooks.sort((a, b) => a.title.localeCompare(b.title));

    // define default order
    let defOrder = 1;

    // change order of each book element on the basis of sorted array books
    sortedBooks.forEach((book) => {
      // find book by title
      const findBooksElement = document.querySelectorAll(`[title="${book.title}"]`);

      // get each book element if multiple found
      findBooksElement.forEach((bookElement) => {
        // change order of current book
        bookElement.style.order = defOrder;

        // increase order for next book
        defOrder++;
      });
    });
  } else {
    // sort books on basis of published date
    const sortedBooks = fetchedBooks.sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate));

    // define default order
    let defOrder = 1;

    // change order of each book element on the basis of sorted array books
    sortedBooks.forEach((book) => {
      // find book by published date
      const findBooksElement = document.querySelectorAll(`[publishedDate="${book.publishedDate}"]`);

      // get each book element if multiple found
      findBooksElement.forEach((bookElement) => {
        // change order of current book
        bookElement.style.order = defOrder;

        // increase order for next book
        defOrder++;
      });
    });
  }
}

// export functions
export default sortBooks;
