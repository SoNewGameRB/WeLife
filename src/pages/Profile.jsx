import React from 'react'

const Profile = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">👤 個人空間</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">歡迎回來，使用者！</h5>
          <p className="card-text">
            這裡是你的個人空間，你可以在這裡查看與管理你的活動記錄、收藏、留言與帳號設定。
          </p>

          <ul className="list-group list-group-flush mt-3">
            <li className="list-group-item">📌 收藏的內容</li>
            <li className="list-group-item">📝 我的留言紀錄</li>
            <li className="list-group-item">⚙️ 帳號與偏好設定</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile
