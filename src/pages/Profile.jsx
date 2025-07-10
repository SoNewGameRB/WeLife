import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Profile = () => {
  const [user, setUser] = useState({
    name: '小賴',
    avatar: 'https://i.imgur.com/6VBx3io.png',
    joined: '2024-05-10',
    darkMode: false,
    notifications: true
  })

  const [favorites, setFavorites] = useState([
    { title: '星際效應', liked: true },
    { title: '山林探險', liked: false },
    { title: '駭客任務', liked: true }
  ])

  const [comments, setComments] = useState([
    { id: 1, content: '超喜歡這部電影！' },
    { id: 2, content: '這個景點我去過，超美！' }
  ])

  const [selectedComment, setSelectedComment] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [previewAvatar, setPreviewAvatar] = useState(null)

  const toggleFavorite = (index) => {
    const updated = [...favorites]
    updated[index].liked = !updated[index].liked
    setFavorites(updated)
  }

  const openEditModal = (comment) => {
    setSelectedComment(comment)
    setShowModal(true)
  }

  const saveComment = () => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === selectedComment.id ? { ...c, content: selectedComment.content } : c
      )
    )
    setShowModal(false)
  }

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setPreviewAvatar(URL.createObjectURL(file))
    }
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <img
          src={previewAvatar || user.avatar}
          alt="avatar"
          className="rounded-circle shadow"
          width="100"
          height="100"
        />
        <div className="mt-2">
          <label className="btn btn-sm btn-outline-secondary">
            上傳頭像
            <input type="file" accept="image/*" hidden onChange={handleAvatarUpload} />
          </label>
        </div>
        <h2 className="fw-bold mt-3">👋 嗨，{user.name}</h2>
        <p className="text-muted">這是你的專屬空間 ✨</p>
      </div>

      <div className="row g-4">
        {/* 收藏清單 */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">📌 收藏清單</h5>
              <ul className="list-group mt-3">
                {favorites.map((item, idx) => (
                  <li
                    key={idx}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {item.title}
                    <button
                      className={`btn btn-sm ${item.liked ? 'btn-danger' : 'btn-outline-secondary'}`}
                      onClick={() => toggleFavorite(idx)}
                    >
                      {item.liked ? '❤️ 已收藏' : '🤍 收藏'}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 留言紀錄 */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">💬 留言紀錄</h5>
              <ul className="list-group mt-3">
                {comments.map((comment) => (
                  <li
                    key={comment.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {comment.content}
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => openEditModal(comment)}
                    >
                      編輯
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 偏好設定 */}
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">⚙️ 偏好設定</h5>
              <div className="form-check form-switch my-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={user.darkMode}
                  onChange={() => setUser({ ...user, darkMode: !user.darkMode })}
                />
                <label className="form-check-label">啟用深色模式</label>
              </div>

              <div className="form-check form-switch my-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={user.notifications}
                  onChange={() => setUser({ ...user, notifications: !user.notifications })}
                />
                <label className="form-check-label">接收 Email 通知</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 編輯留言 Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>編輯留言</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className="form-control"
            rows="3"
            value={selectedComment?.content || ''}
            onChange={(e) =>
              setSelectedComment((prev) => ({ ...prev, content: e.target.value }))
            }
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            取消
          </Button>
          <Button variant="primary" onClick={saveComment}>
            儲存變更
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Profile
