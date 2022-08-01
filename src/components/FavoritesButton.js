const FavoritesButton = ({image}) => {
  return(
    <>
      <span className='button' onClick={() => alert(`liked photo #${image.id}`)}>♥</span>
    </>
  )
}

export default FavoritesButton;
