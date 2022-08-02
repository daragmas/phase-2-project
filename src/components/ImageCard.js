import { useState, useEffect } from 'react'
import FavoritesButton from './FavoritesButton'

const ImageCard = ({ image }) => {
  // const [userImages, setUserImages] = useState([])

  // useEffect(() => {
  //   const getImages = async () => {
  //     let req = await fetch('http://localhost:3001/images')
  //     let res = await req.json()
  //     setUserImages(res.filter((image) => image.imageOwner == userId ? image : null))
  //   }
  //   getImages()
  // }, [])


  return (
    <div className='divImageCard'>

      <img className='ImageCard' src={image.source} />

      <FavoritesButton image={image} />
    </div>
  )
}

export default ImageCard;
