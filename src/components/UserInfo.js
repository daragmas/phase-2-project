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

  // console.log('User Data', userData)

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
    setNewPhoto({ ...newPhoto, source: '', tags: [] })
  }

  const NewPhotoForm = () => {
    return (
      <form key='newPhotoForm' id='newPhotoForm' onSubmit={newPhotoBtn}>
        <button type='submit'>New Photo</button>
        <input key='sourceInput' type="text" name="source" onChange={handleNewPhotoInfo} value={newPhoto.source} placeholder='Input photo URL...'/>
        <input key='tagInput' type="text" name="tags" onChange={handleNewPhotoInfo} value={newPhoto.tags} placeholder='Input tags...'/>
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
            marginBottom: '20px',
            textDecoration: 'none'

          }}
        >Albm</h1></NavLink>

        <ProfPic userProfPic={userData.picture} />
        <UserName userNickname={userData.nickname} />
        <Links userLinks={userData.links} />
        {/* <UserFaves userFavorites={userData.favoriteImages}/> */}
        {userData.id === curUser.id ? NewPhotoForm() : null}
      </div>

    </>
  )
}

export default UserInfo;
