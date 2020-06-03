window.addEventListener('DOMContentLoaded', () => {
  class LocalStorage {
    static getBooks() {
      const books = localStorage.getItem('books');
      if (!books) {
        return [];
      }
      state.books = JSON.parse(books);
      return JSON.parse(books);
    }

    static addBook(book) {
      const books = LocalStorage.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(bookId) {
      let books = LocalStorage.getBooks();
      books = books.filter((book) => book.isbn !== bookId);
      //   localStorage.setItem('books', JSON.stringify(books));
      LocalStorage.setBooks(books);
    }

    static setBooks(books) {
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  class UserInterface {
    displayBooks() {
      const books = LocalStorage.getBooks();
      if (books.length > 0) {
        books.forEach((book, i) => this.addToBookList(book));
      }
    }

    addToBookList(book) {
      const tBody = document.getElementById('tBody');
      const tr = document.createElement('tr');
      const trForm = document.createElement('tr');
      trForm.setAttribute('class', 'hideForm');
      tr.innerHTML = `
               <th scope="row">${book.isbn}</th>
                    <td>${book.name}</td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>
                     <span id="editIcon" class="edit" bookId=${book.isbn}>@edit</span>
                    </td>
                    <td>
                     <span id="deleteIcon" class="delete" bookId=${book.isbn} >@delete</span>
                    </td>
              `;
      trForm.innerHTML = `
                    <th scope="row">
                        <input
                        type="number"
                        name="isbn"
                        class="form-control updateForm"
                        value="${book.isbn}"
                        aria-describedby="isbnNumber"
                        placeholder="ISBN number"
                        />
                    </th>
                    <td>
                     <input
                        type="text"
                        name="name"
                        class="form-control updateForm"
                        value="${book.name}"
                        aria-describedby="bookName"
                        placeholder="Book name"
                        />
                    </td>
                    <td>
                         <input
                        type="text"
                        name="title"
                        class="form-control updateForm"
                        value="${book.title}"
                        aria-describedby="bookTitle"
                        placeholder="Book title"
                        />
                    </td>
                    <td>
                         <input
                        type="text"
                        name="author"
                        class="form-control updateForm"
                        value="${book.author}"
                        aria-describedby="bookAuthor"
                        placeholder="Book author"
                        />
                    </td>
                    <td>
                        <button id="cancelUpdate" class="btn btn-secondary cancelUpdate" bookId=${book.isbn}>Cancel</button>
                    </td>
                    <td>
                        <button id="submitUpdate" class="btn btn-primary submitUpdate" bookId=${book.isbn}>Update</button>
                    </td>
              `;
      tBody.appendChild(tr);
      tBody.appendChild(trForm);
    }

    updateBookList(e) {
      const btn = e.target.classList;

      if (btn.contains('delete')) {
        const bookId = e.target.getAttribute('bookId');
        LocalStorage.removeBook(bookId);
        e.target.parentElement.parentElement.remove();
      }
      if (btn.contains('edit')) {
        toggleForm(e);
        const bookId = e.target.getAttribute('bookId');
        handleUpdate(bookId);
      }
      if (btn.contains('cancelUpdate')) {
        cancelToggleForm(e);
        clearState();
      }
      if (btn.contains('submitUpdate')) {
        const bookId = e.target.getAttribute('bookId');
        cancelToggleForm(e);
        setTimeout(() => submitUpdate(bookId), 1000);
      }
    }
  }
  function toggleForm(e) {
    const book = e.target.parentElement.parentElement;
    e.target.parentElement.parentElement.nextElementSibling.classList.toggle(
      'hideForm'
    );
    book.classList.toggle('hideForm');
  }
  function cancelToggleForm(e) {
    const book = e.target.parentElement.parentElement;
    e.target.parentElement.parentElement.previousElementSibling.classList.toggle(
      'hideForm'
    );
    book.classList.toggle('hideForm');
  }

  const UI = new UserInterface();
  const state = {
    newBook: {
      name: '',
      title: '',
      author: '',
      isbn: null,
    },
    updateBook: {
      name: '',
      title: '',
      author: '',
      isbn: null,
    },
  };
  function handleInputs(e) {
    state.newBook = {
      ...state.newBook,
      [e.target.name]: e.target.value,
    };
    console.log(state.newBook);
  }

  function handleUpdate(bookId) {
    const books = LocalStorage.getBooks();
    state.updateBook = books.filter((book) => book.isbn === bookId)[0];
  }
  function handleUpdateInputs(e) {
    console.log(state.updateBook);
    state.updateBook = {
      ...state.updateBook,
      [e.target.name]: e.target.value,
    };
  }
  function submitUpdate(bookId) {
    const { name, title, author, isbn } = state.updateBook;
    if (!name || !title || !author || !isbn) return 'All fields are mandatory';
    let books = LocalStorage.getBooks();
    books = books.map((book) => {
      if (book.isbn == bookId) {
        book = state.updateBook;
      }
      return book;
    });
    LocalStorage.setBooks(books);
    document.getElementById('tBody').innerHTML = '';
    UI.displayBooks();
    clearState();
  }
  function clearState() {
    state.newBook = {
      name: '',
      title: '',
      author: '',
      isbn: null,
    };
    state.updateBook = {
      name: '',
      title: '',
      author: '',
      isbn: null,
    };
  }

  function clearInputs() {
    document
      .querySelectorAll('.createForm')
      .forEach((input) => (input.value = ''));
  }

  function submitBook(e) {
    e.preventDefault();

    const { name, title, author, isbn } = state.newBook;
    if (!name || !title || !author || !isbn) return 'All fields are mandatory';
    LocalStorage.addBook(state.newBook);
    UI.addToBookList(state.newBook);
    clearInputs();
    clearState();
  }

  //DOM mount
  UI.displayBooks();
  document.querySelectorAll('input.createForm').forEach((input) => {
    input.addEventListener('keyup', (event) => {
      handleInputs(event);
    });
  });

  document.querySelectorAll('input.updateForm').forEach((input) => {
    input.addEventListener('keyup', (event) => {
      handleUpdateInputs(event);
    });
  });

  document.querySelector('#submit').addEventListener('submit', submitBook);

  document.querySelector('#tBody').addEventListener('click', UI.updateBookList);
});
