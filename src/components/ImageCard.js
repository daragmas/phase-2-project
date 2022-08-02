import { useState, useEffect } from 'react'
import FavoritesButton from './FavoritesButton'

const ImageCard = ({ image }) => {
  return (
    <div className='divImageCard'>

      <img className='ImageCard' src={image.source} />

      <FavoritesButton image={image} />
    </div>
  )
}

export default ImageCard;
