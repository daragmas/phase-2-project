import UserInfo from './UserInfo'
import UserPics from './UserPics'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const UserProfile = ({ curUser }) => {
    const [userData, setUserData] = useState(null)
    const [replaceThis, setReplaceThis] = useState()
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
    }, [])

    function handleAddPhoto(newPhoto) {
        setReplaceThis(newPhoto)
    }

    if(!userData)return <h1>Loading</h1>

    return (
        <div>
            <UserInfo userData={userData} onNewPhoto={handleAddPhoto} />
            <UserPics userId={params.userId} dummyData={replaceThis} />
        </div>
    )
}

export default UserProfile;
