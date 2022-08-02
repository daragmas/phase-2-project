import '../App.css';
import Home from './Home';
import Search from './Search';
import NavBar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';




const App = () => {

  const [currentUser, setCurrentUser] = useState()
  const {user} = useAuth0
  console.log(user)

  const handleUserChange = async (curUser) => {
    const test = await curUser
    setCurrentUser(test)
    console.log('UserChange')
  }

  

  return (
    <div>
      <NavBar onUserChange={handleUserChange} curUser={currentUser} />
      < Routes >
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/search/' element={<Search />}></Route>
        <Route path='/user' element={<UserProfile curUser={currentUser} />}>
          <Route path=':userId' element={<UserProfile />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
