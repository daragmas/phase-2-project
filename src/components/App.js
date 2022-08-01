import '../App.css';
import Home from './Home';
import Test from './Test';
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
        <Route path='/test/' element={<Test />}></Route>
        <Route path='/user' element={<UserProfile/>}>
          <Route path=':userId' element={<UserProfile/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
