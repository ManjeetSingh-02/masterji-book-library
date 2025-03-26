// get element from the id
const allBooksContainer = document.getElementById("allBooksContainer");

// function to fetch books
async function fetchBooks() {
  // default parameters to fetch books from API
  const url = "https://api.freeapi.app/api/v1/public/books?page=1&limit=20&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  // try-catch for data
  try {
    // fetch books data
    const res = await fetch(url, options);
    const data = await res.json();

    // return fetched data
    return data;
  } catch (error) {
    // catch error
    console.log(error);
  }
}

// function to load books
async function loadBooks(fetchedBooks) {
  // get fetched books from API
  const fetchedData = await fetchBooks();
  const books = fetchedData.data.data;

  // counter
  let i = 0;

  // array to store set of 9 books
  let bookSet = [];

  // details of each book
  books.forEach((book) => {
    // create object of book details
    const bookDetailsObj = {
      title: book.volumeInfo.title,
      author: book.volumeInfo?.authors?.[0] || "Unknown",
      publisher: book.volumeInfo?.publisher || "Unknown",
      publishedDate: book.volumeInfo.publishedDate,
      thumbnail: book.volumeInfo.imageLinks.thumbnail,
      infoLink: book.volumeInfo.infoLink,
    };

    // check for completion of set till books are available
    if (i == 9) {
      // store set of books to main array
      fetchedBooks.push(bookSet);

      // reset counter and book set
      i = 0;
      bookSet = [];
    }

    // store the details in an array
    bookSet.push(bookDetailsObj);

    // add the book into container
    addBook(bookDetailsObj);

    // increase counter
    i++;
  });

  // if any set left, push to main array
  if (bookSet) fetchedBooks.push(bookSet);
}

function addBook({ title, author, publisher, publishedDate, thumbnail, infoLink }) {
  // create div for book
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card", "card-shadow");
  bookCard.style.order = 1;
  bookCard.setAttribute("title", `${title}`);
  bookCard.setAttribute("publishedDate", `${publishedDate}`);

  // create a element for link redirection
  const a = document.createElement("a");
  a.href = infoLink;
  a.target = "_blank";

  // create image element for thumbnail
  const img = document.createElement("img");
  img.src = thumbnail;
  img.alt = title;

  // append image inside a element
  a.appendChild(img);

  // create book information div
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("book-info");

  // create title span
  const bookTitle = document.createElement("span");
  bookTitle.classList.add("book-title");
  bookTitle.textContent = title;
  infoDiv.appendChild(bookTitle);

  // create author span and append into info div
  const bookAuthor = document.createElement("span");
  bookAuthor.classList.add("book-details");
  bookAuthor.textContent = "By: " + author;
  infoDiv.appendChild(bookAuthor);

  // create publisher span and append into info div
  const bookPublisher = document.createElement("span");
  bookPublisher.classList.add("book-details");
  bookPublisher.textContent = "Publisher: " + publisher;
  infoDiv.appendChild(bookPublisher);

  // create published date span and append into info div
  const bookPDate = document.createElement("span");
  bookPDate.classList.add("book-details");
  bookPDate.textContent = "Date: " + publishedDate;
  infoDiv.appendChild(bookPDate);

  // append all the book details inside the book card
  bookCard.appendChild(a);
  bookCard.appendChild(infoDiv);

  // append book-card into container
  allBooksContainer.appendChild(bookCard);
}

// function to search books
function searchBooks(event, fetchedBooks) {
  // remove all the books from container
  allBooksContainer.innerHTML = "";

  // get book title or author from the search input
  const searchedText = event.target.value.toLowerCase().trim();

  // array to store searched books
  const searchedBooks = [];

  // find the required books from all books array based on the search input
  fetchedBooks.forEach((bookSet) =>
    bookSet.filter((book) => {
      // if book title or author matched then push to searched array
      if (book.title.toLowerCase().includes(searchedText) || book.author.toLowerCase().includes(searchedText)) searchedBooks.push(book);
    })
  );

  // add the required books inside container
  searchedBooks.forEach((book) => addBook(book));
}

// export functions
export { loadBooks, searchBooks };
