import { useEffect, useState } from "react";
import Loader from "./Loader";
import Displaybook from "./DisplayBook";
import "../assets/css/Books.css";

const Books = () => {
  const [getBooks, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://www.abibliadigital.com.br/api/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(true);
      });
  }, []);

  return (
    <main>
      <section className="books">
        <div className="wrapper">
          <h2>Books</h2>
          {loading ? <Displaybook book={getBooks} /> : <Loader />}
        </div>
      </section>
    </main>
  );
};

export default Books;
