import '../assets/css/App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <header>
      <div className="wrapper">
        <h1>Sample SPA</h1>
        <nav>
          <ul>
            <Link to='/' className='link'><li>Home</li></Link>
            <Link to='/stuff' className='link'><li>Stuff</li></Link>
            <Link to='/contact' className='link'><li>Contact</li></Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default App;
