import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AboutUs from '../Pages/AboutUs'
import ContactUs from '../Pages/ContactUs'
import NotFound from '../Pages/NotFound'
import MoviesPage from '../Pages/Movie'
import SingleMovie from '../Pages/SingleMovie'
import WatchPage from '../Pages/WatchPage'
import Login from '../Pages/Login'
import Profile from '../Pages/Dashboard/Profile'
import Register from '../Pages/Register'
import Password from '../Pages/Dashboard/Password'
import FavoritesMovie from '../Pages/Dashboard/FavoritesMovie'
import MovieList from '../Pages/Dashboard/Admin/MovieList'
import Dashboard from '../Pages/Dashboard/Admin/Dashboard'
import Categories from '../Pages/Dashboard/Admin/Categories'
import Users from '../Pages/Dashboard/Admin/Users'
import AddMovie from '../Pages/Dashboard/Admin/AddMovie'
import ChangePassword from '../Pages/ChangePassword'

function routes() {

  return (
  
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/movie-us' element={<MoviesPage />} />
        <Route path='/movie/:id' element={<SingleMovie />} />
        <Route path='/watch/:id' element={<WatchPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/favoritemovies' element={<FavoritesMovie />} />
        <Route path='/password' element={<Password />} />
        <Route path='/movieslist' element={<MovieList />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/users' element={<Users />} />
        <Route path='addmovie' element={<AddMovie />} />
        <Route path='changepassword' element={<ChangePassword />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
  

  )
}

export default routes
