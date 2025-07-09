import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">WeLife</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">🏠 首頁</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movie" className="nav-link">🎬 電影</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/travel" className="nav-link">🏖️ 旅遊</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/explore" className="nav-link">📚 探索</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">👤 個人</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
