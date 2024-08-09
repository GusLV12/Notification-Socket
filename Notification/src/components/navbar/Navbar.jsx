import './navbar.css'
import Notification from '../../../public/notification.svg'
import Settings from '../../../public/settings.svg'
import Message from '../../../public/message.svg'
import { useEffect, useState } from 'react'
export const Navbar = ({ socket }) => {
  const [notification, setNotification] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    socket.on('getNotification', (data) => {
      setNotification((prev) => [...prev, data])
    })
  }, [])

  const displayNotification = ({ senderName, type }) => {
    let action

    if (type === 1) {
      action = 'liked'
    } else if (type === 2) {
      action = 'commented'
    } else {
      action = 'shared'
    }

    return (
      <span className='notification'>{`${senderName} ${action} your post`}</span>
    )
  }

  return (
    <div className='navbar'>
      <span className='logo'>Notificación</span>
      <div className='icons'>
        <div className='icon'>
          <img className='iconImg' src={Notification} onClick={() => setOpen(!open)} />
          <div className='counter'>2</div>
        </div>
        <div className='icon'>
          <img className='iconImg' src={Message} onClick={() => setOpen(!open)} />
          <div className='counter'>2</div>
        </div>
        <div className='icon'>
          <img className='iconImg' src={Settings} onClick={() => setOpen(!open)} />
          <div className='counter'>2</div>
        </div>
        {open && <div className='notifications'>
          {notification.map(noty => (
            displayNotification(noty)
          ))}
        </div>}
      </div>
    </div>
  )
}
