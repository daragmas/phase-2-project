import '../App.css';
import Home from './Home';
import Test from './Test';
import NavBar from './Navbar';
import { Route, Routes, useParams } from 'react-router-dom';
import UserProfile from './UserProfile';


function App() {
  return (
    <div>
      <NavBar />
      < Routes >
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/test/' element={<Test />}></Route>
        <Route path='/user' element={<Home/>}>
          <Route path=':userId' element={<UserProfile/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
