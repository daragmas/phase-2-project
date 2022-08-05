import UserInfo from './UserInfo'
import UserPics from './UserPics'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const UserProfile = ({ curUser = {}, onLike }) => {
    const [userData, setUserData] = useState(null)
    const [addedPhoto, setAddedPhoto] = useState()
    let params = useParams()
    // console.log("userId from params:", params.userId)
    // console.log('currentUser', curUser)

    useEffect(() => {
        const getData = async () => {
            let req = await fetch(`http://localhost:3001/users/${params.userId}`)
            let res = await req.json()
            setUserData(res)
        }
        getData()
    }, [params])

    function handleAddPhoto(newPhoto) {
        setAddedPhoto(newPhoto)
    }

    const [imageModalInfo, setImageModalInfo] = useState({
        display: false,
        classList: 'imageModal hidden',
        image: ''
    })

    // console.log(imageModalInfo)

    const handleModal = (clickedImage) => {
        const classes = imageModalInfo.display ? 'imageModal' : 'imageModal hidden'
        setImageModalInfo({
            classList: classes,
            display: !imageModalInfo.display,
            image: clickedImage
        })
    }

    const handleModalClick = () =>{
        setImageModalInfo({ ...imageModalInfo,
            classList: 'imageModal hidden',
            display: !imageModalInfo.display })
    }

    const ImageModal = () => {
        return (
            <div className={imageModalInfo.classList}>
            <div classname='imgDivBackdrop'></div>
                <img className='imgModalImg' src={imageModalInfo.image} onClick={handleModalClick}/>
            </div>

        )
    }

    if (!userData) return <h1>Loading</h1>

    return (
        <div>
            <UserInfo
                userData={userData}
                onNewPhoto={handleAddPhoto}
                curUser={curUser} />
            <UserPics
                userId={params.userId}
                addedPhoto={addedPhoto}
                curUser={curUser}
                onLike={onLike}
                onImageClick={handleModal} />
            <ImageModal />
        </div>
    )
}

export default UserProfile;
