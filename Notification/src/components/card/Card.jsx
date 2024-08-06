import './card.css'
import Heart from '../../../public/heart.svg'
import HeartFilled from '../../../public/heartFilled.svg'
import Comment from '../../../public/comment.svg'
import Share from '../../../public/share.svg'
import Info from '../../../public/info.svg'
import { useState } from 'react'

export const Card = ({ post }) => {
  const [liked, setLiked] = useState(false)

  const handleNotiFication = () => {
    setLiked((state) => !state)
  }

  return (
    <div className='card'>
      <div className='info'>
        <img src={post.userImg} alt='userImg' className='userImg' />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt='' className='postImg' />
      <div className='interaction'>
        {liked
          ? (<img src={HeartFilled} alt='' className='cardIcon' onClick={handleNotiFication} />)
          : (<img src={Heart} alt='' className='cardIcon' onClick={handleNotiFication} />)}

        <img src={Comment} alt='' className='cardIcon' />
        <img src={Share} alt='' className='cardIcon' />
        <img src={Info} alt='' className='cardIcon' />
      </div>
    </div>
  )
}
