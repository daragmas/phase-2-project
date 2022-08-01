import { useAuth0 } from "@auth0/auth0-react"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const NavBar = ({ onUserChange, curUser }) => {
    const [currentUserID, setCurrentUserID] = useState()

    const { user, isAuthenticated } = useAuth0()
    // console.log('isAuth: ', isAuthenticated)
    // console.log('user ', user)

    const getCurrentUserID = async () => {
        const req = await fetch('http://localhost:3001/users/')
        const res = await req.json()
        const currentUserData = res.filter((dbUser) => dbUser.nickname === user.nickname ? dbUser : null)
        // console.log("currentUserData.id: ", currentUserData[0].id)
        setCurrentUserID(currentUserData[0].id)
    }

    const LoginButton = () => {
        const { loginWithRedirect } = useAuth0()
        return <button onClick={() => loginWithRedirect()}>Log In</button>
    }

    const LogoutButton = () => {
        const { logout } = useAuth0();
        return (
            <button onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
            </button>
        );
    };

    if (user) {
        onUserChange(user)
        getCurrentUserID() 
        console.log("currentUserID: ", currentUserID)  
    }

    

    return (
        <div>
            <h1>NAVBAR!</h1>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            <NavLink to='/test'>Test Page</NavLink>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/user/1'> Test User Nav </NavLink>
            {currentUserID? <NavLink to={`/user/${currentUserID}`}>Profile</NavLink>:null}
        </div>
    )

}


export default NavBar