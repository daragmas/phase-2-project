const UserName = ({userNickname}) => {
  return(
    <div className='userNickname'>
      <h2 style={{ color: '#E2DCC8',
      fontVariant: 'small-caps', fontSize: '60px'}}>{userNickname}</h2>
    </div>
  )
}

export default UserName;
