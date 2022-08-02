import {useState} from 'react'


const FavoritesButton = ({image}) => {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(image.timesFavorited)

  const EMPTY_HEART = '♡'
  const FULL_HEART = '♥'
  // let likeCount = image.timesFavorited
  console.log(likeCount)

const handleClick = () => {

  const changeLike = async () => {
    // console.log(likeCount)
    if (liked === true) {
      // console.log('if')
      setLikeCount((likeCount) => likeCount + 1)
    } else {
      // console.log('else')
      setLikeCount((likeCount) => likeCount - 1)
    }

    console.log(likeCount)
    let req = await fetch(`http://localhost:3001/images/${image.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({timesFavorited: likeCount})
    });
    let res = await req.json();

  }
  changeLike();
  setLiked(!liked)
}

  return(

      <span className='button' style={{color: 'red'}} onClick={handleClick}>{liked ? FULL_HEART : EMPTY_HEART}</span>

  )
}

export default FavoritesButton;
