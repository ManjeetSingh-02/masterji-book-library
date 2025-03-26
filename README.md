# masterji-book-library

**Objective:**

- Build a Book Library webite using FreeAPI.app that will fetch and display book data dynamically in a user-friendly way. This will help you practice working with API requests, handling JSON data, and rendering dynamic content using JavaScript.

- TechStack: `HTML`, `CSS` and `JS`

**Requirements:**

- Fetch books from the API and display them as a list/grid
- Provide an option to user to switch between the viewing type of list v/s grid
- Show book details including title, author, publisher, published date, and thumbnail
- Implement a search bar to filter books by title or author
- Implement a sort feature to list books in Alphabetical order based on their title, date of release (publishedDate)
- Implement pagination on reaching the end of the page to call next set of details
- Clicking on a book item, should open more details in a new tab (using infoLink)

## Introduction

- The Book Library is a web application that display books and its data
- This application fetch books data from api and displays to user with its details
- This application has sort and search books feature

## Scope

- The project aims to provide a good Book Library with essential features like search, sort and view books along with its details
- This application will have a simple and user friendly interface to interact between users and application
- This application has feature to switch b/w light or dark theme

## Features

- **Accessible** on both mobile devices and desktops
- **Responsive** on both mobile devices and desktops
- Functionality to **switch b/w light and dark theme** by clicking on **Theme Icon Button**
- Functionality to **fetch books and its data from API** and **display it to user** as a book card
- Functionality to **switch b/w list layout or grid layout of books** for user
- Functionality to **search books** by typing **book title** or **book author** inside **search bar**
- Functionality to **sort books** by clicking on **Sort Button**
- Sort button has multiple options:
  - Sort by **Book Title**
  - Sort by **Book Published Date**
  - **Reset** books order
- Each book card will contain the following information:
  - **Title** of the book
  - **Author**(if any) of the book
  - **Publisher**(if any) of the book
  - **Published Date** of the book
  - **Thumbnail** of the book cover
- Functionality to **view different pages(pagination)** and view multiple books
- Functionality to **open book for more details in new tab by clicking on book cover thumbnail**

## Screenshots

**Home Page Light Theme**
![Home Page Light Theme](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-book-library/main/assets/images/01_home_light_theme.png)

**Home Page Dark Theme**
![Home Page Light Theme](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-book-library/main/assets/images/02_home_dark_theme.png)

**Grid View**
![Grid View](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-book-library/main/assets/images/03_grid_view.png)

**List View**
![List View](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-book-library/main/assets/images/04_list_view.png)

**Search by Book Name**
![Search by Book Name](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-book-library/main/assets/images/05_search_by_book_name.png)

**Search by Author Name**
![Search by Author Name](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-book-library/main/assets/images/06_search_by_author_name.png)

**Sort by Book Title**
![Sort by Book Title](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-book-library/main/assets/images/07_books_sorting_by_title.png)

**Sort by Book Published Date**
![Sort by Book Published Date](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-book-library/main/assets/images/08_books_sorting_by_published_date.png)

## Important Information

### API

- Application uses `freeapi.app` [**get books fetch api**](https://api.freeapi.app/api/v1/public/books) to fetch books and its data
- `freeapi.app` is owned by [**Hitesh Choudhary**](https://github.com/hiteshchoudhary/apihub)

### Responsive

- Application uses certain breakpoints to provide responsiveness among multiple devices that are standerized globally
- These standerized breakpoints are avaliable at [**Tailwind CSS**](https://tailwindcss.com/docs/responsive-design)

## Deployment

- Application is deployed on GitHub Pages for accessibility across web
- View Website - [**Click Here**](https://manjeetsingh-02.github.io/masterji-book-library/)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
