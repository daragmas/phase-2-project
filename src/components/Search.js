import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
const Search = () => {
    const [searchBy, setSearchBy] = useState('')
    const [allUsers, setAllUsers] = useState([])
    const [allImages, setAllImages] = useState([])
    const [searchToggle, setSearchToggle] = useState(false)

    let searchMatches

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then((res) => res.json())
            .then((json) => setAllUsers(json))
        fetch('http://localhost:3001/images')
            .then((res) => res.json())
            .then((json) => setAllImages(json))
    }, [])

    // console.log(allUsers)
    const handleToggle = ()=>{
        setSearchToggle(!searchToggle)
    }

    const handleInputChange = (e) => {
        setSearchBy(e.target.value)
    }

    const filterUsers = ()=>{
        const data = allUsers.filter((user) => user.nickname.toLowerCase().includes(searchBy.toLowerCase()) ? user : null)
        return (data.map((user) => {
            return (
                <li key={user.id}>
                    <img src={user.picture} className='search-image' href={`/user/${user.id}`} />
                    <NavLink to={`/user/${user.id}`}>{user.nickname}</NavLink>
                </li>
            )
        }))
    }
    const filterImages = ()=>{
        const data = (allImages.filter((image) => image.tags.includes(searchBy.toLowerCase()) ? image : null))
        return (data.map((image) => {
            return (
                <li key={image.id}>
                    <img src={image.source} className='search-image' href={`/user/${image.imageOwner}`} />
                </li>
            )
        }))
    }

    searchMatches = searchBy? (searchToggle? filterImages():filterUsers()):[]
    // console.log('searchmatches', searchMatches)
    
    return (
        <div>
            <label htmlFor="searchbar">Search</label>
            <input id='searchbar' type='text' onChange={handleInputChange}/>
            <label htmlFor='search-toggle' className="switch">Search Users/Images
            <input id='search-toggle' type="checkbox" onChange={handleToggle}/>
            <span className="slider round"></span>
            </label>
            <ul>
                {searchMatches}
            </ul>
        </div>
    )

}

export default Search

