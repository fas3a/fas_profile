import logo from './logo.svg';
import prof_img from './img/prof_img.jpg'
import zuri_img from './img/zuri_img.svg'
import ingress from './img/ingress.png'
import git_logo from './img/git_logo.png'
import slack_logo from './img/slack_logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: "white"}}>
        <img src={prof_img} className="prof_img" id="profile_img" alt="logo" />
        <p className="prof_name" id="twitter">
          Akintola Oluwafemi
        </p>
        <p id="slack">Fas3a</p>
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
          href="https://books.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id='books'>
          Zuri Team
          </button>
        </a>
        
        <a
          className="App-link"
          href="https://bools.zuri.team/python-for-beginner?ref_id=fas3a"
          target="_blank"
        >
          <button id='book_python'>
          Python Books
          </button>
        </a>
        
        <a
          className="App-link"
          href="https://background.zuri.team"
          target="_blank"
        >
          <button id='pitch'>
          Background Check for Coders
          </button>
        </a>
        <a
          className="App-link"
          href="https://books.zuri.team/design-rules"
          target="_blank"
        >
          <button id='book_design'>
          Design Books
          </button>
        </a>
      </header>

      {/*Tools logos*/}
      
      <div className="tool_logo">
        <img src={slack_logo} alt="logo"/>
        <img src={git_logo} alt="logo"/>
      </div>
      
      <hr/>

      <footer>
        <img src={zuri_img} alt='logo'/>
        <h4>HNG Internship 9 Frontend Task</h4>
        <img src={ingress} alt='logo'/>
      </footer>
    </div>
  );
}

export default App;
