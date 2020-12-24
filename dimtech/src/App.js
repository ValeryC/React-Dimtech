
import './App.css';
import logo from './logo.svg'

function App() {
  // Learn(){
  //   alert("Under Construction ")
  // }
  return (
    <div className="App">
      <div className="LeftSide">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Welcome">
          <span>Hi,<br />Welcome on Dimtech.</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit.
        </p>
        <div className="ButtonLearn">
          <button>Learn More</button>
        </div>
      </div>
      <div className="Form"></div>

    </div >
  );
}

export default App;
