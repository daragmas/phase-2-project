import { useState, useEffect } from 'react'
import FavoritesButton from './FavoritesButton'

const ImageCard = ({ image, curUserLikedpics }) => {
  const [isLiked, setIsLiked] = useState(curUserLikedpics.includes(image.id))

  return (
    <div className='divImageCard'>

      <img className='ImageCard' src={image.source} />

      <FavoritesButton image={image} startingEmoji={isLiked}/>
    </div>
  )
}

export default ImageCard;
