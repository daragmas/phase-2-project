import UserInfo from './UserInfo'
import UserPics from './UserPics'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const UserProfile = ({ curUser = {}, onLike }) => {
    const [userData, setUserData] = useState(null)
    const [addedPhoto, setAddedPhoto] = useState()
    let params = useParams()
    // console.log("userId from params:", params.userId)
    console.log('currentUser',curUser)

    useEffect(() => {
        const getData = async () => {
            let req = await fetch(`http://localhost:3001/users/${params.userId}`)
            let res = await req.json()
            setUserData(res)
        }
        getData()
    }, [params])

    function handleAddPhoto(newPhoto) {
        setAddedPhoto(newPhoto)
    }

    if(!userData)return <h1>Loading</h1>

    return (
        <div>
            <UserInfo userData={userData} onNewPhoto={handleAddPhoto} curUser={curUser} />
            <UserPics userId={params.userId} addedPhoto={addedPhoto} curUser={curUser} onLike={onLike}/>
        </div>
    )
}

export default UserProfile;
