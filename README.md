# Class Website Frontend 🎓

一個給學生與講師使用的課程平台前端，主打「登入後就能快速找到你要的課、開你想開的課」。

## 專案亮點

- 角色分流：學生與講師登入後看到不同功能
- JWT 驗證流程：與後端 API 串接授權操作
- 課程操作完整：瀏覽、搜尋、建立、註冊
- 介面直覺：導覽列依登入狀態動態顯示

## 功能清單

### 訪客可用
- 註冊帳號（可選 student / instructor）
- 登入系統
- 瀏覽首頁

### 登入後（共用）
- 檢視個人資訊
- 進入課程頁面
- 登出

### 講師專屬
- 新增課程（標題、描述、價格）
- 查看自己開設的課程

### 學生專屬
- 依名稱搜尋課程
- 註冊課程（Enroll）
- 查看自己已註冊課程

## 技術棧

- React 18
- React Router v6
- Axios
- Bootstrap（樣式）

## 本機啟動

1. 安裝套件

```bash
npm install
```

2. 啟動開發伺服器

```bash
npm start
```

3. 開啟瀏覽器

```text
http://localhost:3000
```

## 常用指令

```bash
npm start      # 開發模式
npm test       # 測試（CRA 預設）
npm run build  # 產生正式版
```

## 操作教學（快速上手）

### A. 講師流程
1. 註冊時選擇 `instructor`
2. 登入後進入「新增課程」
3. 填寫課程資料並送出
4. 到「課程頁面」確認課程已建立

### B. 學生流程
1. 註冊時選擇 `student`
2. 登入後到「註冊課程」
3. 搜尋課程名稱並點選註冊
4. 查看已註冊課程清單

## API 串接說明

目前前端服務預設呼叫雲端 API：

- `https://class-website-api-2.onrender.com/api/user`
- `https://class-website-api-2.onrender.com/api/courses`

若你要改成連本機後端（例如 `http://localhost:8080`），請調整：

- `src/services/auth.service.js`
- `src/services/course.service.js`

## 專案結構（重點）

```text
src/
	components/      # 畫面元件（首頁、登入、註冊、課程、個人頁）
	services/        # API 服務（auth、course）
	App.js           # 路由與整體入口
```

## 小提醒

- 請先確認後端與資料庫可用，避免登入或課程 API 失敗
- JWT 會存放在 localStorage 的 `user` 物件中
