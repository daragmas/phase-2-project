import logo from '../logo.svg';
import '../App.css';

import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  const Default = ()=>{
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  }
  
  return (
    <div>
      <h1>Tesing 1 2 3</h1>
      {/* <NavBar/> */}
      {/* < Routes >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/app/' element={<App/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
