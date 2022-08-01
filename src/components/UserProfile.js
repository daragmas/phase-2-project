import UserInfo from './UserInfo'
import UserPics from './UserPics'
import {useState, useEffect} from 'react'


const UserProfile = () => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const getData = async () => {
          let req = await fetch('http://localhost:3001/users')
          let res = await req.json()
          setUserData(res)

        }
        getData()
    },[])

console.log(userData)

    return (
      <div>
          <UserInfo />
          <UserPics />
      </div>
    )
}

export default UserProfile;
