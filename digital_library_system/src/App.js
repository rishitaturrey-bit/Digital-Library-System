import logo from './logo.svg';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
const [author, setAuthor] = useState("");
const [category, setCategory] = useState("");
const [search, setSearch] = useState("");
const [books, setBooks] = useState([]);

const addBook = (e) => {
  e.preventDefault();

  if (title === "" || author === "" || category === "") {
    alert("Please fill all fields");
    return;
  }

  const newBook = {
    title,
    author,
    category,
  };

  setBooks([...books, newBook]);

  setTitle("");
  setAuthor("");
  setCategory("");
};

const deleteBook = (index) => {
  const newBooks = books.filter((book, i) => i !== index);
  setBooks(newBooks);
};
  return (
      <div>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <a className="navbar-brand" href="#">
        Digital Library
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#addbook">
              Add Book
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#books">
              Book List
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  {/* Home */}
  <section id="home" className="container mt-5">
    <h2>Welcome to Digital Library</h2>
    <p>Manage your books easily using this Digital Library System.</p>
  </section>

  {/* Add Book */}
  <section id="addbook" className="container mt-5">
    <h3>Add Book</h3>

    <form onSubmit={addBook}>
    

      <input
        type="text"
        id="author"
        className="form-control mb-3"
        placeholder="Author"
      />

      <input
        type="text"
        id="category"
        className="form-control mb-3"
        placeholder="Category"
      />

      <button type="submit" className="btn btn-success">
        Add Book
      </button>
    </form>
  </section>

  {/* Search */}
  <section className="container mt-5">
    <input
      type="text"
      id="search"
      className="form-control"
      placeholder="Search Book"
    />
  </section>

  {/* Book List */}
  <section id="books" className="container mt-5">
    <h3>Book List</h3>

    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody id="bookList"></tbody>
    </table>
  </section>

  {/* Contact */}
  <section id="contact" className="container mt-5 mb-5">
    <h3>Contact</h3>
    <p>Email: library@gmail.com</p>
    <p>Phone: 9876543210</p>
  </section>
</div>
  );
}

export default App;
