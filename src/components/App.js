import '../App.css';
import Home from './Home';
import Test from './Test';
import NavBar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import {useState} from 'react'


function App() {
  const [currentUser,setCurrentUser] = useState()

  return (
    <div>
      <NavBar onUserChange={console.log('Test')} curUser={currentUser}/>
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
