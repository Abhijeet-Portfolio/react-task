import '../assets/css/search.css';
import {useState} from 'react';

function Search() {

    const [input, setinput] = useState();

    const submit = e => {
        e.preventDefault();

        console.log(input);
        fetch('https://www.abibliadigital.com.br/api/verses/search', {
            method: 'POST',
            body: {
                "version": "nvi",
                "search": "Levítico"
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
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
                </div>
            </section>
        </main>
    )
}

export default Search;