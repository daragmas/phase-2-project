import { useAuth0 } from "@auth0/auth0-react"
import { NavLink } from "react-router-dom"
import { useEffect } from "react"

const NavBar = ({ onUserChange, curUser }) => {

    const { user, isAuthenticated } = useAuth0()
    // console.log('isAuth: ', isAuthenticated)
    console.log('user ', user) 

    const addNewUser = async ()=>{
        const newUser={
            "email": user.email,
            "nickname": user.nickname,
            "picture": user.picture,
            "links": [],
            "images": [],
            "favoriteImages": [],
            "favoriteUsers": []
        }
        const req = await fetch('http://localhost:3001/users/',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(newUser)
        })
        return onUserChange(newUser)
    }

    const getCurrentUserID = async () => {
        const req = await fetch('http://localhost:3001/users/')
        const res = await req.json()
        const currentUserData = res.filter((dbUser) => dbUser.nickname === user.nickname ? dbUser : null)
        console.log(currentUserData)
        if(!currentUserData[0]) return addNewUser()
        return (currentUserData[0])
    }

    useEffect(()=>{
        if (user) {
            onUserChange(getCurrentUserID())
            console.log(curUser)
        }
    },[])

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

    

    // console.log("curUser" ,curUser)
    

    return (
        <div>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            <NavLink to='/search'>🔎</NavLink>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/user/1'> Test User Nav </NavLink>
            {curUser? <NavLink to={`/user/${curUser.id}`}>Profile</NavLink>:null}
        </div>
    )

}


export default NavBar