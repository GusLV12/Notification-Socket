import { useContext, useState } from 'react'
import { userContext } from '../../App'

export const Login = () => {
  const [username, setUsername] = useState('')
  const { setuser } = useContext(userContext)

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleLogin = () => {
    setuser(username)
  }

  return (
    <>
      <h3>Login</h3>

      <div className='login'>
        <input type='text' placeholder='username' onChange={handleChange} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  )
}
