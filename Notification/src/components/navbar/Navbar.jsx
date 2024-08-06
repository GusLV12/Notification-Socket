import './navbar.css'
import Notification from '../../../public/notification.svg'
import Settings from '../../../public/settings.svg'
import Message from '../../../public/message.svg'
export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Notificación</span>
      <div className='icons'>
        <div className='icon'>
          <img className='iconImg' src={Notification} alt='' />
          <div className='counter'>2</div>
        </div>
        <div className='icon'>
          <img className='iconImg' src={Message} alt='' />
          <div className='counter'>2</div>
        </div>
        <div className='icon'>
          <img className='iconImg' src={Settings} alt='' />
          <div className='counter'>2</div>
        </div>
      </div>
    </div>
  )
}
