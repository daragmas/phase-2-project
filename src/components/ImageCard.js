import { useState, useEffect } from 'react'

const ImageCard = () => {
  const [userImages, setUserImages] = useState([])

  useEffect(() => {
    const getImages = async () => {
      let req = await fetch('http://localhost:3001/images')
      let res = await req.json()
      setUserImages(res)
    }
    getImages()
  }, [])


  return(
    <div>
      {userImages.map((image) => {
        return (
          <img className='ImageCard' src={image.source}/>
        )
      })}
    </div>
  )
}

export default ImageCard;
