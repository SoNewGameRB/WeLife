import React from 'react'

const Travel = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">🏖️ 旅遊推薦</h2>

      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">探索屬於你的旅遊靈感 🌍</h5>
          <p className="card-text">
            這裡會列出各種推薦的旅遊地點，讓你從城市到大自然、從放空系到探索派，找到最適合你的行程。
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://source.unsplash.com/400x250/?beach" className="card-img-top" alt="海灘旅遊" />
            <div className="card-body">
              <h5 className="card-title">熱情海灘</h5>
              <p className="card-text">陽光、沙灘、比基尼，一起衝浪吧 🏄‍♂️</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://source.unsplash.com/400x250/?mountain" className="card-img-top" alt="山林冒險" />
            <div className="card-body">
              <h5 className="card-title">山林探險</h5>
              <p className="card-text">喜歡登山或露營？這裡推薦自然系景點 ⛰️</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://source.unsplash.com/400x250/?city" className="card-img-top" alt="都市旅遊" />
            <div className="card-body">
              <h5 className="card-title">城市慢活</h5>
              <p className="card-text">探索都市裡的藝文景點與美食 🍜</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travel
