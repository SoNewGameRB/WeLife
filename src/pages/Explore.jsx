import React from 'react'

const articles = [
  {
    id: 1,
    title: '2025 數位生活趨勢：AI、Web3 與你',
    description: '從 AI 助理到區塊鏈錢包，生活科技正悄悄改變你我的日常。',
    tag: '科技'
  },
  {
    id: 2,
    title: '生活工作平衡的哲學：數位時代的自我管理',
    description: '不再只是生產力，更多是心理能量與生活節奏的重新思考。',
    tag: '心靈'
  },
  {
    id: 3,
    title: 'Z 世代正在閱讀什麼？五本改變觀點的書',
    description: '從虛擬社群到真實連結，閱讀依然是探索世界最有效的方式。',
    tag: '閱讀'
  }
]

const Explore = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-3 fw-bold text-primary fs-2">
        📚 <span className="text-gradient">資訊探索</span>
      </h2>
      <p className="text-muted fs-5">
        精選主題文章、生活洞察、Z 世代正在關注的事。
      </p>

      {/* 🔍 搜尋欄 */}
      <div className="input-group my-4 shadow-sm">
        <input
          type="text"
          className="form-control focus-ring"
          placeholder="🔍 搜尋文章關鍵字..."
        />
        <button className="btn btn-outline-primary" type="button">
          搜尋
        </button>
      </div>

      {/* 🧠 主題文章列表 */}
      <div className="row g-4">
        {articles.map((article) => (
          <div key={article.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm hover-shadow transition">
              <div className="card-body d-flex flex-column">
                <span className="badge rounded-pill mb-2 bg-gradient-tag">
                  {article.tag}
                </span>
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text text-muted">{article.description}</p>
                <button className="btn btn-sm btn-outline-dark mt-auto transition">
                  🔗 閱讀更多
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 💬 底部互動提示 */}
      <div className="alert alert-info text-center mt-5 soft-shadow bg-opacity-75">
        💬 想留言嗎？<strong>未來將開放文章互動功能</strong>，敬請期待！
      </div>
    </div>
  )
}

export default Explore
