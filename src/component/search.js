import '../assets/css/search.css';
import {useState} from 'react';
import Loader from './loader';
import Displaybook from './displayBook';

function Search() {

    const [input, setinput] = useState();
    const [result,setResult] = useState([]);
    const [display, setDisplay] = useState(false);
    const [loading, setLoading] = useState(false);

    const submit = e => {
        e.preventDefault();
        
        if(input === undefined) {
            alert("Input is required!")
            return
        }

        setDisplay(true);
        setLoading(false);

        fetch('https://www.abibliadigital.com.br/api/verses/search', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "version": "nvi",
                "search": input
            })              
        })
        .then(res => res.json())
        .then(data => {
            setResult(data);
            setLoading(true);
        })
        .catch(error => alert('Error',error));
    }

    const displayResult = () => {

        if(result.occurrence === 0) {
            alert('Sorry, No result Found !!')
            return
        }

        console.log(result);
        const res = result.verses.map((element) => {
            return {
                "author": element.book.author,
                "chapters": element.book.chapters,
                "name": element.book.name
            }
        });
        
        const res2 = res.filter((element,key) => key < 12);

        return ( <Displaybook book={res2} />)
    }

    return (
        <main>
            <section className="search">
                <div className="wrapper">
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Enter the name book" onChange={e => setinput(e.target.value)}/>
                            <span>This field is required!</span>
                        </div>
                        <div className="form-control">
                            <button onClick={e => submit(e)}>Submit</button>
                        </div>
                    </form>
                    {display ? loading ? displayResult() : <Loader /> : null}
                </div>
            </section>
        </main>
    )
}

export default Search;