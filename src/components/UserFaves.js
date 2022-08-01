const UserFaves = ({userFavorites = []}) => {
  return(
    <div className="flex">
    {userFavorites.map((fav) => {
      return(
        <li key={fav}>
          <a>{fav}</a>
        </li>
      )})}

    </div>
  )
}

export default UserFaves;
