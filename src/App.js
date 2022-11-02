import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
          Python Books
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
        >
          Background Check for Coders
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
        >
          Design Books
        </a>
      </header>
    </div>
  );
}

export default App;
