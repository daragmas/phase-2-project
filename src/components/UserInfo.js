import ProfPic from './ProfPic'
import UserFaves from './UserFaves'
import UserName from './UserName'
import Links from './Links'
import { useState } from 'react'


const UserInfo = ({ userData=[], onNewPhoto, curUser={} }) => {

  const [newPhoto, setNewPhoto] = useState({
    imageOwner: userData.id, timesFavorited: 0, tags: []
  })

  console.log('User Data',userData)

  if (userData == []) return <h1>Loading...</h1>

  const handleNewPhotoInfo = (e) => {
    const key = e.target.name
    const value = e.target.value.includes(',') ? (e.target.value).split(',') : e.target.value
    setNewPhoto({ ...newPhoto, [key]: value })
    console.log(newPhoto)
  }

  const newPhotoBtn = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPhoto)
    });
    onNewPhoto(newPhoto)
  }

  const NewPhotoForm = () => {
    return( <form id='newPhotoForm' onSubmit={newPhotoBtn}>
      <button type='submit'>New Photo</button>
      <label>Photo Url</label>
      <input type="text" name="source" onChange={handleNewPhotoInfo} value={newPhoto.source} />
      <label>Tags</label>
      <input type="text" name="tags" onChange={handleNewPhotoInfo} value={newPhoto.tags} />
    </form>)
  }

  return (
    <>
      <div className='userInfoDiv'>
        <ProfPic userProfPic={userData.picture} />
        <UserName userNickname={userData.nickname} />
        <Links userLinks={userData.links} />
        {/* <UserFaves userFavorites={userData.favoriteImages}/> */}
        {userData.id === curUser.id?<NewPhotoForm/>:null}
      </div>

    </>
  )
}

export default UserInfo;
