import ProfPic from './ProfPic'
import UserFaves from './UserFaves'
import UserName from './UserName'
import Links from './Links'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


const UserInfo = ({ userData = [], onNewPhoto, curUser = {} }) => {

  const [newPhoto, setNewPhoto] = useState({
    imageOwner: userData.id, timesFavorited: 0, tags: []
  })

  console.log('User Data', userData)

  if (userData == []) return <h1>Loading...</h1>

  const handleNewPhotoInfo = (e) => {
    e.preventDefault();
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
    return (
      <form id='newPhotoForm' onSubmit={newPhotoBtn}>
        <button type='submit'>New Photo</button>
        <label>Photo Url</label>
        <input type="text" name="source" onSubmit={handleNewPhotoInfo} value={newPhoto.source} />
        <label>Tags</label>
        <input type="text" name="tags" onSubmit={handleNewPhotoInfo} value={newPhoto.tags} />
      </form>)
  }

  return (
    <>
      <div className='userInfoDiv'>

        <NavLink to={'/'}><h1
          className='h1user'
          style={{
            color: '#E2DCC8',
            fontVariant: 'small-caps',
            fontSize: "50px",
            padding: 20,
            marginTop: 0,
            marginBottom: '20px'
          }}
        >Albm</h1></NavLink>

        <ProfPic userProfPic={userData.picture} />
        <UserName userNickname={userData.nickname} />
        <Links userLinks={userData.links} />
        {/* <UserFaves userFavorites={userData.favoriteImages}/> */}
        {userData.id === curUser.id ? <NewPhotoForm /> : null}
      </div>

    </>
  )
}

export default UserInfo;
