import {useState} from 'react'

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const FavoritesButton = ({image}) => {
  const [liked, setLiked] = useState(false)


const handleClick = () => {
  setLiked(!liked)
}

  return(
    
      <span className='button' style={{color: 'red'}} onClick={handleClick}>{liked ? FULL_HEART : EMPTY_HEART}</span>

  )
}

export default FavoritesButton;
