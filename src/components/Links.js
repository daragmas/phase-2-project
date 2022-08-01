const Links = ({userLinks = []}) => {
  // console.log(userLinks)
  return(
    <div className="flex">
    {userLinks.map((link) => {
      return(
        <li key={link}>
          <a href={link}>{link}</a>
        </li>
      )})}

    </div>
  )
}

export default Links;
