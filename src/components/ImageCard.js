import { useState, useEffect } from 'react'
import FavoritesButton from './FavoritesButton'

const ImageCard = ({ image, curUser, onLike }) => {
  const [isLiked, setIsLiked] = useState(curUser.id ? curUser.favoriteImages.includes(image.id) : false)
  // console.log('Image:',image.id)
  // console.log('curUser',curUser)


  const handleHeartClick = async ()=>{
    // console.log('click heart')
    let newLikedPics = [...curUser.favoriteImages]
    if(!isLiked) newLikedPics.push(image.id)
    else {
      newLikedPics = newLikedPics.filter((likedPic)=> likedPic != image.id ? likedPic : null)
    }

    console.log(newLikedPics)

    setIsLiked(!isLiked)

    const req = await fetch(`http://localhost:3001/users/${curUser.id}`,{
      method:'PATCH',
      headers: {'Content-type':'application/json'},
      body:JSON.stringify({favoriteImages:newLikedPics})
    })
    const res= await req.json()
    console.log(res)
    onLike()
  }

const [imageModalBool, setImageModalBool] = useState(false)
const [imageModalClasses, setImageModalClasses] = useState('imageModal hidden')

const showImageModal = () => {
  setImageModalClasses( imageModalBool ? 'imageModal':'imageModal hidden')
  setImageModalBool(!imageModalBool)
  console.log('hi')
}


  return (
    <div className="bigDiv">

    <div className={imageModalClasses}>
    <img src={image.source} />
    </div>

    <div className='divImageCard'>
      <img onClick={showImageModal} className='ImageCard' src={image.source} />
      <FavoritesButton image={image} startingEmoji={isLiked} onHeartClick={handleHeartClick}/>
    </div>

    </div>

  )
}

export default ImageCard;
