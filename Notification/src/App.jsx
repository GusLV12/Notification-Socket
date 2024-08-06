import './App.css'
import { createContext, useEffect, useState } from 'react'
import { Login } from './views/Log-in/Login'
import { Card, Navbar } from './components'
import { posts } from './data'

export const userContext = createContext()

export const App = () => {
  const [user, setuser] = useState('')

  useEffect(() => {
    console.log('Usuario: ', user)
  }, [user])

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
