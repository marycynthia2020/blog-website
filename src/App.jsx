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
import EditPost from './pages/EditPost'
import PostLayout from './templates/PostLayout'
import MyBlog from './pages/MyBlog'

function App() {
   const {isLoggedIn} = useContext(userContext)
  return (
    <div className='w-full min-h-screen'>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route>
            <Route  path='/postdetails/:id' element={<PostDetails />} />
            <Route path='/postdetails/:id/edit' element={<EditPost />} />
          </Route>
          <Route path='createpost' element={<CreatePost />} />
          <Route path='/myblog' element={<MyBlog />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
