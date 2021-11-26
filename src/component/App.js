import { Link } from "react-router-dom";
import "../assets/css/App.css";

const App = () => {
  return (
    <header>
      <div className="wrapper">
        <h1>Logo</h1>
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/books">
              <li>Books</li>
            </Link>
            <Link to="/search">
              <li>Search</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default App;
