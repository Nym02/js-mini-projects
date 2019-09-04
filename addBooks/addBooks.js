class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI class: Handle UI task
class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(book => UI.addBooksToList(book));
  }

  static addBooksToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-small delete ">X</a></td>
        
        `;

    list.appendChild(row);
  }
  static deleteBooks(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
  static showAlert(msg, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    // vanish in 1.5 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
  }
  static clearField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}
// Store class: handle storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static addBooks(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}
//Event: Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add Books
document.querySelector('#book-form').addEventListener('submit', e => {
  //prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  //validating form

  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill in all the fields', 'danger');
  } else {
    const book = new Book(title, author, isbn);

    // add book to ui
    UI.addBooksToList(book);

    Store.addBooks(book);
    //show success msg
    UI.showAlert('Book Added', 'success');
    // clear fields
    UI.clearField();
  }
});

// Event: Remove a book
document.querySelector('#book-list').addEventListener('click', e => {
  // remove a book
  UI.deleteBooks(e.target);

  //remove book from localstorage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  UI.showAlert('Book Removed', 'info');
});
