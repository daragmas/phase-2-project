import ProfPic from './ProfPic'
import UserFaves from './UserFaves'
import UserName from './UserName'
import Links from './Links'
import {useState} from 'react'


const UserInfo = ({userData}) => {
  // console.log('UserInfo UserData: ', userData)

  const [newPhotoURL, setNewPhotoURL] = useState('')
  const [newPhotoTags, setNewPhotoTags] = useState('')
  if(userData==[]) return <h1>Loading...</h1>
  
  const handleNewPhotoUrl = (e) => {
    setNewPhotoURL(e.target.value)
  }
  const handleNewPhotoTags = (e) => {
    setNewPhotoTags(e.target.value)
  }

  const newPhotoBtn = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        source: e.target['url'].value,
        tags:[e.target['tags'].value],
        timesFavorited:0,
        imageOwner: userData.id
      })
    });
  }

  return(
    <>
      <div className='userInfoDiv'>
        <ProfPic userProfPic={userData.picture}/>
        <UserName userNickname={userData.nickname}/>
        <Links userLinks={userData.links}/>
        <UserFaves userFavorites={userData.favoriteImages}/>

        <form id='newPhotoForm' onSubmit={newPhotoBtn}>
          <button type='submit'>New Photo</button>
          <label>Photo Url</label>
          <input type="text" name="url" onChange={handleNewPhotoUrl} value={newPhotoURL}/>
          <label>Tags</label>
          <input type="text" name="tags" onChange={handleNewPhotoTags} value={newPhotoTags}/>
        </form>
      </div>

    </>
  )
}

export default UserInfo;
