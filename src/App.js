import DogImage from './components/DogImage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Random Dog Picture</code>
        </p>
        <DogImage />
      </header>
    </div>
  );
}

export default App;
