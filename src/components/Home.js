import UserProfile from "./UserProfile"
import {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom"

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

    if(homeImage===[])return <h1>loading</h1>

  return(
    <div className='homeScreen'>

          <h1 className='h1'
          style={{ color: '#E2DCC8',
          fontVariant: 'small-caps',

          width: '100vw',
          height: '30vh',
          fontSize: "1500%",
          padding: 20,
          marginTop: 0,
          marginBottom: '20px'}}
          >Albm</h1>

        <div className='homeImageDiv'>


            {homeImage.sort((a,b)=>a.timesFavorited > b.timesFavorited ? -1: 1).map((image, index) => {
              return(
              <NavLink key={index} to={`user/${image.imageOwner}`}><img className='homeImage' src={image.source} key={image.id}/></NavLink>
            )})}


        </div>
    </div>


    )
}


export default Home
