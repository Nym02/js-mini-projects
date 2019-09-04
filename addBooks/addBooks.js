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
    const storedBooks = [
      {
        title: 'Career of Evil',
        author: 'JK Rowling',
        isbn: '123456'
      },
      {
        title: 'Career of Evil v.2',
        author: 'JK Rowling',
        isbn: '654321'
      }
    ];

    const books = storedBooks;
    books.forEach(book => UI.addBooksToList(book));
  }

  static addBooksToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-small delete">X</a></td>
        
        `;

    list.appendChild(row);
  }
  static deleteBooks(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
  static clearField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
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
    alert('Please fill in all the fields');
  }

  const book = new Book(title, author, isbn);

  // add book to ui
  UI.addBooksToList(book);

  // clear fields
  UI.clearField();
});

// Event: Remove a book
document.querySelector('#book-list').addEventListener('click', e => {
  UI.deleteBooks(e.target);
});
