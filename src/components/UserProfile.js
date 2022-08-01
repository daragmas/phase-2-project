import UserInfo from './UserInfo'
import UserPics from './UserPics'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const UserProfile = () => {
    const [userData, setUserData] = useState([])
    let params = useParams()
    // console.log("userId from params:", params.userId)

    useEffect(() => {
        const getData = async () => {
            let req = await fetch(`http://localhost:3001/users/${params.userId}`)
            let res = await req.json()
            setUserData(res)
        }
        getData()
    }, [])

    // console.log("userData:", userData)

    return (
        <div>
            <UserInfo userData={userData} />
            <UserPics userId={params.userId}/>
        </div>
    )
}

export default UserProfile;
