import '../App.css';
import Home from './Home';
import Search from './Search';
import NavBar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import {useState} from 'react'


function App() {
  const [currentUser,setCurrentUser] = useState()

  // console.log('currentUser:',currentUser)

  return (
    <div>
      <NavBar onUserChange={setCurrentUser} curUser={currentUser}/>
      < Routes >
        <Route exact path='/' element={<Home curUser={currentUser}/>}></Route>
        <Route path='/search/' element={<Search />}></Route>
        <Route path='/user' element={<UserProfile/>}>
          <Route path=':userId' element={<UserProfile/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
