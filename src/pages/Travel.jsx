import React from 'react'

const travelSpots = [
  {
    id: 1,
    title: '熱情海灘',
    description: '陽光、沙灘、比基尼，一起衝浪吧 🏄‍♂️',
    category: '海邊 chill',
    image: 'https://takao.kcg.gov.tw/public/article/a0/43/atl_43_20190717140318_182.jpg',
    link: 'https://www.google.com/maps/search/beach/',
    tagColor: 'info'
  },
  {
    id: 2,
    title: '山林探險',
    description: '喜歡登山或露營？這裡推薦自然系景點 ⛰️',
    category: '戶外冒險',
    image: 'https://travel.tycg.gov.tw/content/images/district/mou-banner.jpg',
    link: 'https://www.google.com/maps/search/mountain/',
    tagColor: 'success'
  },
  {
    id: 3,
    title: '城市慢活',
    description: '探索都市裡的藝文景點與美食 🍜',
    category: '文化美食',
    image: 'https://www.travel.taipei/image/179629/?r=1591860611184',
    link: 'https://www.google.com/maps/search/city+travel/',
    tagColor: 'secondary'
  },
  {
    id: 4,
    title: '森林系秘境',
    description: '探索森林裡的精靈小徑與神秘瀑布 🌲',
    category: '療癒系',
    image: 'https://egoldenyears.com/wp-content/uploads/2025/03/20250324-p0101.jpg',
    link: 'https://www.google.com/maps/search/forest/',
    tagColor: 'warning'
  },
  {
    id: 5,
    title: '海島自由行',
    description: '跳島行程、浮潛潛水、水上摩托全包 🏝️',
    category: '海島探險',
    image: 'https://ystravel.voyage.com.tw/eWeb_ystravel/IMGDB/000009/000464/000467/001866/001879/00012685.JPG',
    link: 'https://www.google.com/maps/search/island/',
    tagColor: 'primary'
  },
  {
    id: 6,
    title: '極光之旅',
    description: '追逐北極光的奇幻之旅，人生必看一次 ✨',
    category: '夢幻景點',
    image: 'https://www.unotour.com.tw/material/content/tour/List-20250529-164340-2535.webp',
    link: 'https://www.google.com/maps/search/northern+lights/',
    tagColor: 'danger'
  }
]

const Travel = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5 text-success">🏖️ 旅遊靈感推薦</h2>
        <p className="text-muted fs-5">
          不論你是 Chill 派、冒險魂還是文青控，這裡都有為你量身打造的旅程 🧳
        </p>

        {/* 假篩選區塊 */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mt-4">
          {['全部', '海島', '冒險', '文化', '夢幻', '森林'].map((label, idx) => (
            <button key={idx} className="btn btn-sm btn-outline-secondary rounded-pill px-3">
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="row g-4">
        {travelSpots.map((spot) => (
          <div key={spot.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 travel-card overflow-hidden">
              <div className="position-relative">
                <img
                  src={spot.image}
                  alt={spot.title}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '220px' }}
                  onError={(e) =>
                    (e.target.src = 'https://via.placeholder.com/400x250?text=No+Image')
                  }
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient bg-opacity-50"></div>
              </div>
              <div className="card-body d-flex flex-column">
                <span className={`badge bg-${spot.tagColor} mb-2`}>
                  {spot.category}
                </span>
                <h5 className="card-title">{spot.title}</h5>
                <p className="card-text text-muted">{spot.description}</p>
                <a
                  href={spot.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-success mt-auto"
                >
                  📍 查看地點
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Travel
