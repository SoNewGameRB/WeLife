import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container text-center">
        <h1 className="display-4 fw-bold text-primary mb-3">
          🌞 歡迎來到 <span className="text-dark">WeLife</span>
        </h1>
        <p className="lead text-secondary mb-5">
          旅遊 · 娛樂 · 資訊探索 · 個人空間，全在這裡！
        </p>

        <div className="row justify-content-center g-4">
          {/* 電影推薦 */}
          <div className="col-md-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">📽️ 電影推薦</h5>
                  <p className="card-text text-muted">
                    精選熱門與冷門電影，發現你不知道的寶藏片單！
                  </p>
                </div>
                <Link to="/movie" className="btn btn-outline-primary mt-3">前往電影頁</Link>
              </div>
            </div>
          </div>

          {/* 旅遊體驗 */}
          <div className="col-md-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">🌴 旅遊體驗</h5>
                  <p className="card-text text-muted">
                    從山林到海岸，探索你心中理想的旅行風格。
                  </p>
                </div>
                <Link to="/travel" className="btn btn-outline-success mt-3">查看旅遊</Link>
              </div>
            </div>
          </div>

          {/* 資訊探索 */}
          <div className="col-md-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">📚 資訊探索</h5>
                  <p className="card-text text-muted">
                    最新主題文章、討論與生活科技趨勢。
                  </p>
                </div>
                <Link to="/explore" className="btn btn-outline-warning mt-3">開始探索</Link>
              </div>
            </div>
          </div>

          {/* 個人空間 */}
          <div className="col-md-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">🧍 個人空間</h5>
                  <p className="card-text text-muted">
                    管理收藏與帳號設定，打造專屬體驗。
                  </p>
                </div>
                <Link to="/profile" className="btn btn-outline-dark mt-3">我的帳號</Link>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-muted">
          📎 點擊上方功能區塊，開啟你的 WeLife 生活之旅！
        </p>
      </div>
    </div>
  )
}

export default Home
