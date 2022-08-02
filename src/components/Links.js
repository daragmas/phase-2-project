const Links = ({userLinks = []}) => {
  return(
    <div>
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
