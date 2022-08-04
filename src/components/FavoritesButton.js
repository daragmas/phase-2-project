import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const FavoritesButton = ({ image, startingEmoji, onHeartClick }) => {
  const [liked, setLiked] = useState(startingEmoji)
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  // const [likeCount, setLikeCount] = useState(image.timesFavorited)

  const EMPTY_HEART = '♡'
  const FULL_HEART = ' ♥ '
  const COLOR = liked ? 'red' : 'grey'

  const handleClick = async () => {
    if (!isAuthenticated) {
      return loginWithRedirect() //can't figure out how to redirect back to the page the user was on after logging in
    }
    const newLikes = liked ? image.timesFavorited : image.timesFavorited + 1
    const req = await fetch(`http://localhost:3001/images/${image.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ timesFavorited: newLikes })
    });
    const res = await req.json();
    // console.log(res)
    onHeartClick()
    setLiked(!liked)
  }

  return (
      <span
        className='button'
        style={{ color: COLOR, fontSize: '50px' }}
        onClick={handleClick}>
        {FULL_HEART}
      </span>
  )
}

export default FavoritesButton;
