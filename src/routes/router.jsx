import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Explore from '../pages/Explore'

// 🔜 後續新增
import Movie from '../pages/Movie'
import Travel from '../pages/Travel'
import Profile from '../pages/Profile'
import Home from '../pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  )
}

export default AppRoutes
