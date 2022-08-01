const FavoritesButton = ({userImages}) => {
  return(
    <>
      {console.log(userImages)}
      <span className='button' onClick={() => alert(`liked photo #${userImages.id}`)}>♥</span>
    </>
  )
}

export default FavoritesButton;
