const Links = ({userLinks = []}) => {
  return(
    <div>
    {userLinks.map((link) => {
      return(
        <li key={link}>
          <a href={link} className='links' style={{color:'#E2DCC8', backgroundColor: '#F05454', fontSize: '25px'}}>{link}</a>
        </li>
      )})}

    </div>
  )
}

export default Links;
