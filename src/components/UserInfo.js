import ProfPic from './ProfPic'
import UserFaves from './UserFaves'
import UserName from './UserName'
import Links from './Links'


const UserInfo = ({userData}) => {
  // console.log('UserInfo UserData: ', userData)
  if(userData==[]) return <h1>Loading...</h1>

  return(
    <>
      <div>
        <ProfPic userProfPic={userData.picture}/>
        <UserName userNickname={userData.nickname}/>
        <Links userLinks={userData.links}/>
        <UserFaves userFavorites={userData.favoriteImages}/>
      </div>

    </>
  )
}

export default UserInfo;
