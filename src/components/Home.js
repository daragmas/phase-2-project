import UserProfile from "./UserProfile"
import {useState, useEffect} from 'react'

const Home = ({curUser})=>{
    // console.log("Home curUser", curUser)

    const [homeImage, setHomeImage] = useState([])
    useEffect(() => {
      const grabImages = async () => {
        let req = await fetch('http://localhost:3001/images')
        let res = await req.json()
        setHomeImage(res)
      }
      grabImages()
    }, [])

  return(

        <div className='homeImageDiv'>
            <h1 style={{ color: 'white', fontVariant: 'small-caps', padding: 20 }}>Welcome to Albm!</h1>

            {homeImage.map((image) => {
              return(
              <img className='homeImage' src={image.source} key={image.id}/>
            )})}


        </div>


    )
}


export default Home
