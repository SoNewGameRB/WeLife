import React from 'react'
import { Link } from 'react-router-dom'

const modules = [
  {
    icon: '📽️',
    title: '電影推薦',
    desc: '精選熱門與冷門電影，發現你不知道的寶藏片單！',
    link: '/movie',
    color: 'primary',
    buttonText: '前往電影頁'
  },
  {
    icon: '🌴',
    title: '旅遊體驗',
    desc: '從山林到海岸，探索你心中理想的旅行風格。',
    link: '/travel',
    color: 'success',
    buttonText: '查看旅遊'
  },
  {
    icon: '📚',
    title: '資訊探索',
    desc: '最新主題文章、討論與生活科技趨勢。',
    link: '/explore',
    color: 'warning',
    buttonText: '開始探索'
  },
  {
    icon: '🧍',
    title: '個人空間',
    desc: '管理收藏與帳號設定，打造專屬體驗。',
    link: '/profile',
    color: 'dark',
    buttonText: '我的帳號'
  }
]

const announcements = [
  {
    icon: '🔥',
    title: '全新旅遊模組上線！',
    text: '立即探索森林系秘境與極光之旅'
  },
  {
    icon: '🧠',
    title: 'AI 行程推薦測試中',
    text: '開啟個人空間體驗 Smart Mode 🚀'
  }
]

const Home = () => {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container text-center">
        {/* Hero 區塊 */}
        <h1 className="display-4 fw-bold text-primary mb-3">
          🌞 歡迎來到 <span className="text-dark">WeLife</span>
        </h1>
        <p className="lead text-secondary mb-4">
          旅遊・娛樂・資訊探索・個人生活管理，<br />一站整合，打造自助生活體驗 🧳
        </p>

        {/* 功能導覽卡片 */}
        <div className="row justify-content-center g-4 mt-4">
          {modules.map((card, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm border-0 hover-shadow transition">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h1 className="fs-2">{card.icon}</h1>
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text text-muted">{card.desc}</p>
                  </div>
                  <Link to={card.link} className={`btn btn-outline-${card.color} mt-3`}>
                    {card.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 推薦活動區塊 */}
        <div className="mt-5">
          <h5 className="text-muted mb-3">📣 熱門公告</h5>
          <div className="row justify-content-center g-3">
            {announcements.map((item, idx) => (
              <div key={idx} className="col-md-6">
                <div className="alert alert-info d-flex align-items-center shadow-sm">
                  <span className="fs-4 me-3">{item.icon}</span>
                  <div className="text-start">
                    <strong>{item.title}</strong>
                    <div className="small text-muted">{item.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-muted fs-6">
          📎 點擊上方功能區塊，開啟你的 WeLife 生活之旅！
        </p>
      </div>
    </div>
  )
}

export default Home
