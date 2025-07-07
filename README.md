
# WeLife 自助生活體驗平台

> 旅遊 / 娛樂 / 資訊探索 / 個人空間，全在這裡！

---

## 🧠 專案簡介

WeLife 是一個結合多項功能的網頁應用平台，整合旅遊推薦、電影娛樂、生活記錄與個人空間四大模組，提供一站式的生活體驗！

---

## 👥 團隊分工

| 成員 | 負責區塊 |
|------|-----------|
| 賴   | 🎬 電影模組（feature-movie） |
| 哲   | 🏖️ 旅遊模組（feature-travel） |
| 席   | 👤 個人空間 + 部分後端（feature-profile / backend-api） |
| 祐丞 | 🧠 統籌 & 後端主要開發（main / backend-api） |

---

## 🛠️ 使用技術

- React + Vite
- Bootstrap 5
- Git + GitHub（多人協作）
- Node.js (for API)
- VS Code

---

## 📁 專案目錄結構

```bash
WeLife/
├── public/
├── src/
│   ├── components/      # 共用元件
│   ├── pages/           # 功能頁面
│   │   ├── Movie.jsx
│   │   ├── Travel.jsx
│   │   ├── Profile.jsx
│   │   └── Admin.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
🚀 本機安裝與開發流程

# 1️⃣ 下載專案
git clone https://github.com/SoNewGameRB/WeLife.git
cd WeLife

# 2️⃣ 安裝套件
npm install

# 3️⃣ 啟動開發伺服器
npm run dev
啟動成功後會看到網址：http://localhost:5173

🌿 Git 分支策略
請每位成員「只在自己的分支開發」，不要直接改 main 分支，否則會讓整個專案 crash 🚫

分支名稱	用途說明
main	穩定主分支（只能由組長合併）
feature-movie	🎬 賴：電影功能開發區
feature-travel	🏖️ 哲：旅遊模組開發區
feature-profile	👤 席：個人空間開發區
backend-api	🧠 席 / 祐丞：後端功能整合

🔁 Git 開發流程（圖文補教等級 🧠）
✅ 【第一次開發流程】

# 🧭 1. 從 GitHub 下載整個專案（只做一次）
git clone https://github.com/SoNewGameRB/WeLife.git
cd WeLife

# 📦 2. 安裝套件（只做一次）
npm install

# 🚀 3. 建立自己的分支（只做一次）
git checkout -b feature-movie  # 👈 把 feature-movie 改成你自己要負責的模組
✅ 【之後每次開工前】

# 🧼 更新 main 分支，確保最新
git checkout main
git pull origin main

# 🔁 回到自己的分支
git checkout feature-movie
✅ 【開始寫程式後要怎麼送上 GitHub？】

# ✅ 1. 查看你改了哪些檔案（可以不用打，但習慣好）
git status

# ✅ 2. 加入所有你有修改的內容（準備提交）
git add .

# ✅ 3. 加上提交訊息（清楚說你做了什麼）
git commit -m "feat: 加入電影搜尋元件"

# ✅ 4. 把這次進度推送到 GitHub
git push origin feature-movie
✅ 【建立 PR（Pull Request）讓組長幫你合併】
打開 GitHub repo 頁面 👉 https://github.com/SoNewGameRB/WeLife

上方會看到一個黃色提示：「Compare & Pull Request」

點進去 → 確認「從你的分支」要「合併到 main」

填寫說明，按下 Create Pull Request

傳訊 tag 組長說「我 PR 好了喔」～

💬 Commit Message 規範
前綴	說明
feat:	新功能（例如：加入按鈕元件）
fix:	修 bug
style:	調整排版、CSS、字體等
refactor:	重構程式但不改功能
docs:	說明文件（README）
chore:	工具設定 / 套件升級

🧠 範例：


git commit -m "feat: 加入旅遊景點卡片區塊"
git commit -m "fix: 修正個人頁面照片上傳錯誤"
🧯 常見錯誤提醒
問題	解法
error: failed to push some refs	是因為 GitHub 上有人已經有推過，要先 git pull origin main 把最新的抓下來再 push
推不上 GitHub 出現「rejected」	請確認是否推到正確分支，例如：feature-xxx
PR 建錯方向（不是合併到 main）	回到 GitHub → 編輯 PR → 改選 base: main

📬 協作建議（請大家一起遵守）
每位成員都只改自己的分支 ✅

要 push 上去就先 pull 下來（不然會炸）

有問題優先發 PR 或在群組說，不要偷偷改 main ⚠️

加新功能、重構前，先跟組長講一下 👍

📌 TODO 任務清單（可改成 GitHub Project）
 🎬 電影模組：顯示電影清單、搜尋、詳細頁

 🏖️ 旅遊模組：景點分類、地圖標記、熱門推薦

 👤 個人空間：登入、註冊、個人資料編輯

 🔧 管理後台：帳號管理、留言審核

 🔗 串接 API 或使用 JSON 模擬資料




