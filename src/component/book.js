import '../assets/css/books.css';
import { useEffect, useState } from 'react';

function Books() {

    const [getBooks, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://www.abibliadigital.com.br/api/books')
            .then(response => response.json())
            .then(data => setBooks(data));
    },[]);

    return (
        <main>
            <section className="books">
                <div className="wrapper">
                    <h2>Books</h2>
                    <ul>
                        {getBooks.map((getbook,key) => book(getbook,key))}
                    </ul>
                </div>
            </section>
        </main>
    )
}

const book = ({author,chapters,name},key) => {
    return (
        <li key={name}>
            <h3>ID : {key+1}</h3>
            <h4>Name : {name}</h4>
            <h5>Author : {author}</h5>
            <h6>Chapters : {chapters}</h6>
        </li>
    )
}

export default Books;