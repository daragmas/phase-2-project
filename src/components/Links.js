<<<<<<< HEAD
const Links = ({userLinks =[]}) => {
=======
const Links = ({userLinks = []}) => {
>>>>>>> 1790f956e562b593b72941272b9e88ca2d545330
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
