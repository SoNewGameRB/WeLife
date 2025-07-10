import React, { useState } from "react"

const allMovies = [
  {
    id: 1,
    title: "🌌 星際效應",
    description: "探索宇宙、時間與情感交織的經典神作。",
    category: "科幻",
    image: "https://m.media-amazon.com/images/M/MV5BMjM5Y2M4YWYtYzNhNy00ZGRlLWIwYjMtYzgwYjQyMTA1Mzc5XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg",
    tags: ["宇宙", "親情", "時間"],
    link: "https://www.imdb.com/title/tt0816692/",
    rating: 8.6,
    year: 2014,
    liked: true
  },
  {
    id: 2,
    title: "💣 奧本海默",
    description: "一場改變人類歷史的物理與道德衝突。",
    category: "歷史",
    image: "https://m.media-amazon.com/images/M/MV5BNzg4MGZmNzgtMWE5NS00YWNkLWIxNGItMjBiOTEyMjExMzViXkEyXkFqcGc@._V1_FMjpg_UY720_.jpg",
    tags: ["原子彈", "科學", "戰爭"],
    link: "https://www.imdb.com/title/tt15398776/",
    rating: 8.4,
    year: 2023,
    liked: false
  },
  {
    id: 3,
    title: "👁️‍🗨️ 駭客任務",
    description: "紅藥丸還是藍藥丸？虛擬世界與真實的哲學挑戰。",
    category: "動作",
    image: "https://m.media-amazon.com/images/M/MV5BZjVkOGM1ZTctZGZmOC00MTM0LWFjYjctNjg2MTg1YTM4N2VlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    tags: ["虛擬實境", "哲學", "AI"],
    link: "https://www.imdb.com/title/tt0133093/",
    rating: 8.7,
    year: 1999,
    liked: false
  },
  {
    id: 4,
    title: "👨‍🚀 登月先鋒",
    description: "描述阿姆斯壯首次登月的歷史旅程。",
    category: "傳記",
    image: "https://www.nlpi.edu.tw/FileDownLoad/MovieFestival/20200621105043668.JPG",
    tags: ["太空", "歷史", "勇氣"],
    link: "#",
    rating: 7.5,
    year: 2018,
    liked: false
  },
  {
    id: 5,
    title: "🧠 永生程式",
    description: "AI主宰世界，記憶能否永存？",
    category: "科幻",
    image: "https://char.tw/wp-content/uploads/2017/08/1503017600-211720167a4abf6870b8a9cc8367fd5a.jpg",
    tags: ["AI", "未來", "科技"],
    link: "#",
    rating: 8.1,
    year: 2025,
    liked: false
  }
]

const Movie = () => {
  const [movies, setMovies] = useState(allMovies.slice(0, 3))

  const toggleLike = (id) => {
    const updated = movies.map((m) =>
      m.id === id ? { ...m, liked: !m.liked } : m
    )
    setMovies(updated)
  }

  const randomizeMovies = () => {
    const shuffled = allMovies.sort(() => 0.5 - Math.random()).slice(0, 3)
    setMovies(shuffled)
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold display-5 text-primary">🎬 賴的電影推薦</h2>
        <p className="text-muted fs-5">
          每一部片，都是一段人生碎片，獻給正在探索世界的你 🍿
        </p>
        <button className="btn btn-outline-primary mt-2" onClick={randomizeMovies}>
          🔀 隨機推薦 3 部
        </button>
      </div>

      <div className="row g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 transition hover-shadow">
              <img
                src={movie.image}
                className="card-img-top"
                alt={movie.title}
                style={{ objectFit: "cover", height: "220px" }}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x200?text=No+Image")
                }
              />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-primary">{movie.category}</span>
                  <button
                    className={`btn btn-sm ${
                      movie.liked ? "btn-danger" : "btn-outline-danger"
                    }`}
                    onClick={() => toggleLike(movie.id)}
                  >
                    {movie.liked ? "❤️ 已收藏" : "🤍 收藏"}
                  </button>
                </div>

                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text text-muted">{movie.description}</p>

                <div className="mb-2">
                  <span className="badge bg-dark me-2">⭐ {movie.rating}</span>
                  <span className="text-muted small">🎬 {movie.year}</span>
                </div>

                <div className="mt-2 mb-3">
                  {movie.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="badge bg-light text-dark me-1 mb-1"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href={movie.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark mt-auto"
                >
                  🔗 前往 IMDb
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movie
