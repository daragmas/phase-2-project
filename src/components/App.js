import '../App.css';
import Home from './Home';
import Test from './Test';
import NavBar from './Navbar';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar />
      < Routes >
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/test/' element={<Test />}></Route>
      </Routes>
    </div>
  );
}

export default App;
