import logo from './logo.svg';
import './App.css';
import Slides from './components/Slides.js';
import Stepper from './components/Stepper.js'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rohan is fat
        </p>
      </header> */}
      {/* <Slides/> */}
      <Stepper/>
    </div>
  );
}

export default App;