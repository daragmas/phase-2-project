import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
const Search = () => {
    const [searchBy, setSearchBy] = useState('')
    const [allUsers, setAllUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then((res) => res.json())
            .then((json) => setAllUsers(json))
    }, [])

    // console.log(allUsers)

    const handleInputChange = (e) => {
        setSearchBy(e.target.value)
    }

    const searchMatches = searchBy? allUsers.filter((user) => user.nickname.toLowerCase().includes(searchBy.toLowerCase()) ? user : null):[]
    
    return (
        <div>
            <label htmlFor="searchbar">Search</label>
            <input id='searchbar' type='text' onChange={handleInputChange} placeholder='Enter Username' />
            <ul>
                {searchMatches.map((user)=>{return(
                    <li key={user.id}>
                        <img src={user.picture} className='search-image' href={`/user/${user.id}`}/>
                        <NavLink to={`/user/${user.id}`}>{user.nickname}</NavLink>
                    </li>
                )})}
            </ul>
        </div>
    )

}

export default Search
