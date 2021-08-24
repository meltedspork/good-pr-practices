import Dog from './containers/Dog';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Dog />
      </header>
    </div>
  );
}

export default App;
