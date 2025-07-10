import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-auto">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* 品牌與簡介 */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-warning">WeLife</h5>
            <p className="small text-muted">
              打造 Z 世代的自助生活平台，整合旅遊、娛樂與資訊探索，體驗屬於你的生活風格。
            </p>
          </div>

          {/* 導覽連結 */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold text-light">快速導覽</h6>
            <ul className="list-unstyled small">
              <li><Link to="/" className="text-white text-decoration-none">🏠 首頁</Link></li>
              <li><Link to="/movie" className="text-white text-decoration-none">🎬 電影推薦</Link></li>
              <li><Link to="/travel" className="text-white text-decoration-none">🏖️ 旅遊體驗</Link></li>
              <li><Link to="/explore" className="text-white text-decoration-none">📚 資訊探索</Link></li>
              <li><Link to="/profile" className="text-white text-decoration-none">👤 個人空間</Link></li>
            </ul>
          </div>

          {/* 聯絡資訊 & 社群 */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold text-light">聯絡我們</h6>
            <p className="small mb-1">📧 Email：team@welife.fake</p>
            <p className="small mb-2">📍 國立青春科技大學資工系</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="https://line.me" target="_blank" rel="noreferrer" className="text-white">
                <i className="bi bi-line fs-5"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white">
                <i className="bi bi-github fs-5"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 底線版權 */}
        <div className="text-center border-top border-light pt-3 mt-3">
          <small className="text-muted">
            &copy; 2025 WeLife 專題小組 — All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
