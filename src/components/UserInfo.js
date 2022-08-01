import ProfPic from './ProfPic'
import UserFaves from './UserFaves'
import UserName from './UserName'
import Links from './Links'


const UserInfo = ({userData}) => {
  return(
    <>
    {console.log(userData.nickname)}
      <div>
        <ProfPic userProfPic={userData.picture}/>
        <UserName userNickname={userData.nickname}/>
        <Links userLinks={userData.links}/>
        <UserFaves userData={userData}/>
      </div>

    </>
  )
}

export default UserInfo;
