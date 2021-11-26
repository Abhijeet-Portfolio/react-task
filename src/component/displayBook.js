import '../assets/css/DisplayBook.css';

const Displaybook = (props) => {

    const books = props.book;

    return (
        <ul className="displayBooks">
            {books.map(({author,chapters,name}, key) => (<li key={key}>
                <h3>ID : {key + 1}</h3>
                <h4>Name : {name}</h4>
                <h5>Author : {author}</h5>
                <h6>Chapters : {chapters}</h6>
            </li>))}
        </ul>
    )
}

export default Displaybook;