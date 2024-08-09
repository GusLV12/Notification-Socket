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
  }, [])

  useEffect(() => {
    socketClient.emit('newUser', user)
  }, [socketClient, user])

  return (
    <userContext.Provider value={{ user, setuser }}>
      <div className='container'>
        {user
          ? <>
            <Navbar socket={socketClient} />
            {posts.map((post) => (

              <Card key={post.id} post={post} socket={socketClient} user={user} />
            ))}
            </>
          : <Login />}
      </div>
    </userContext.Provider>
  )
}
