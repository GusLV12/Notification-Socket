import './App.css'
import { createContext, useEffect, useState } from 'react'
import { Login } from './views/Log-in/Login'
import { Card, Navbar } from './components'
import { posts } from './data'
import { socketClient } from './Socket/socketClient'

export const userContext = createContext()

export const App = () => {
  const [user, setuser] = useState('')
  const socket = socketClient

  useEffect(() => {
    console.log('Socket: ', socket)
    console.log(socket.on('hello', (msg) => {
      console.log('Mensaje del servidor: ', msg.message)
    }))
  }, [])

  return (
    <userContext.Provider value={{ user, setuser }}>
      <div className='container'>
        {user
          ? <>
            <Navbar />
            {posts.map((post) => (

              <Card key={post.id} post={post} />
            ))}
            </>
          : <Login />}
      </div>
    </userContext.Provider>
  )
}
