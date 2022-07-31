import { useAuth0 } from "@auth0/auth0-react"
import { NavLink } from "react-router-dom"

const NavBar = () => {

    const { user, isAuthenticated} = useAuth0()
    // console.log('isAuth: ', isAuthenticated)
    console.log('user ', user)

    const LoginButton = ()=>{
        const {loginWithRedirect} = useAuth0()
        return <button onClick={()=> loginWithRedirect()}>Log In</button>
    }

    const LogoutButton = () => {
        const { logout } = useAuth0();

        return (
            <button onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
            </button>
        );
    };

    return (
    <div>
        <h1>NAVBAR!</h1>
        {isAuthenticated? <LogoutButton/>:<LoginButton/>}
        <NavLink to='/test'>Test Page</NavLink>
        <NavLink to='/'> Home </NavLink>
    </div>
    )

}


export default NavBar