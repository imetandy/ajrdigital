import logo from './logo_white.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="AppBg"></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The future of film distribution is coming soon.
        </p>
        <p>Contact andrew@ajr.digital for more details.</p>
      </header>
    </div>
  );
}

export default App;
