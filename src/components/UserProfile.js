import UserInfo from './UserInfo'
import UserPics from './UserPics'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const UserProfile = ({ curUser }) => {
    const [userData, setUserData] = useState([])
    let params = useParams()
    // console.log("userId from params:", params.userId)
    console.log(curUser)

    useEffect(() => {
        const getData = async () => {
            let req = await fetch(`http://localhost:3001/users/${params.userId}`)
            let res = await req.json()
            setUserData(res)
        }
        getData()
    }, [])

function handleAddPhoto(newPhoto) {
  console.log(newPhoto)
}

    return (
        <div>
            <UserInfo userData={userData} />
            <UserPics userId={params.userId}/>
        </div>
    )
}

export default UserProfile;
