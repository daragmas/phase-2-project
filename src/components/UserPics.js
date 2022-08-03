import { useState, useEffect } from 'react'
import ImageCard from './ImageCard'

const UserPics = ({userId, addedPhoto}) => {
  const[allImages, setAllImages] = useState([])

  // const [userImages, setUserImages] = useState([])

  useEffect(() => {
    const getImages = async () => {
      let req = await fetch('http://localhost:3001/images')
      let res = await req.json()
      setAllImages(res)
      // setUserImages(res.filter((image) => image.imageOwner == userId ? image : null))
    }
    getImages()
  }, [])

  let userImagesArray = allImages.filter((image) => image.imageOwner == userId ? image : null)

  if(addedPhoto) userImagesArray.push(addedPhoto)

  console.log('userimages',userImagesArray)


  // console.log(dummyData)

  return(
    <div className='imageContainer'>
      {userImagesArray.map((image, index) =><ImageCard key={index} image={image} />)}
    </div>
    
  )
}

export default UserPics;
