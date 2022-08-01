import { useState, useEffect } from 'react'
import FavoritesButton from './FavoritesButton'

const ImageCard = ({userId}) => {
  const [userImages, setUserImages] = useState([])

  useEffect(() => {
    const getImages = async () => {
      let req = await fetch('http://localhost:3001/images')
      let res = await req.json()
      setUserImages(res.filter((image) => image.imageOwner == userId ? image : null))
    }
    getImages()
  }, [])


  return(
    <div>
      {userImages.map((image) => {
        return (
          <>
            <img className='ImageCard' key={image.source} src={image.source}/>
            <FavoritesButton image={image}/>
          </>
        )
      })}
    </div>
  )
}

export default ImageCard;
