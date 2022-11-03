import logo from './logo.svg';
import Fas_img from './img/Fas_img.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Fas_img} className="prof_img" alt="logo" />
        <p>
          Akintola Oluwafemi
        </p>
        <a
          className="btn"
          href="https://training.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id='btn_zuri'>
          Twitter Link
          </button>
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id='books'>
          Zuri Team
          </button>
        </a>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
        >
          <button id='books'>
          Python Books
          </button>
        </a>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
        >
          <button id='books'>
          Background Check for Coders
          </button>
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
        >
          <button id='books'>
          Design Books
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
