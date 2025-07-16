import './App.css'
import PageLayout from './templates/PageLayout'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useContext } from 'react'
import { userContext } from './contexts/UserSignupContext'

function App() {
   const {isLoggedIn} = useContext(userContext)
  return (
    <div className='w-full min-h-screen'>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='postdetails/:id' element={<PostDetails />} />
          <Route path='createpost' element={<CreatePost />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
