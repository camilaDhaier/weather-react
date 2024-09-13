import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>
        Hello from React
       </h1>
       <Weather city="Paris"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This React project was coded by Camila Dhaier and it is <a href='https://github.com/camilaDhaier/weather-react'>open-sourced</a>
        </a>
      </header>
    </div>
  );
}

export default App;
