import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 sticky-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          WeLife
        </Link>

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
            {[
              { path: '/', label: '🏠 首頁' },
              { path: '/movie', label: '🎬 電影' },
              { path: '/travel', label: '🏖️ 旅遊' },
              { path: '/explore', label: '📚 探索' },
              { path: '/profile', label: '👤 個人' }
            ].map((item, idx) => (
              <li className="nav-item" key={idx}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link px-3 fw-medium ${isActive ? 'active-link' : 'text-light'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
