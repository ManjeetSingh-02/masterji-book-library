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

    // store the details in an array
    fetchedBooks.push(bookDetailsObj);

    // add the book into container
    addBook(bookDetailsObj);
  });
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

  // find the required books from all books array based on the search input
  const searchedBooksbyTitle = fetchedBooks.filter((book) => book.title.toLowerCase().includes(searchedText));
  const searchedBooksbyAuthor = fetchedBooks.filter((book) => book.author.toLowerCase().includes(searchedText));

  // add the required books inside container
  searchedBooksbyTitle.forEach((book) => addBook(book));
  searchedBooksbyAuthor.forEach((book) => addBook(book));
}

// export functions
export { loadBooks, searchBooks };
