<div align="center">

# 💬 ConvoX

### Real-Time Chat Application built with the MERN Stack

A full-stack chat application with secure JWT authentication and a Socket.IO real-time messaging layer.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-real--time-010101?logo=socket.io&logoColor=white)](https://socket.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-in--development-orange)](#-project-status)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Architecture](#️-architecture) • [Getting Started](#-getting-started) • [Roadmap](#-project-status)

</div>

---

## 📖 Overview

ConvoX is a full-stack real-time chat application built to explore secure authentication and live communication patterns in the MERN stack. It currently ships a complete, production-style authentication flow — JWT sessions in httpOnly cookies, bcrypt password hashing, and protected API routes — with a Socket.IO layer connected end-to-end and the chat interface actively being wired up for live messaging.

## 🌟 Features

| Category | Details |
|---|---|
| 🔐 **Authentication** | Register & login with email/password, bcrypt password hashing, JWT stored in a secure httpOnly cookie |
| 🛡️ **Route Protection** | Custom Express middleware verifies JWTs before granting access to protected endpoints |
| 🔄 **Session Handling** | Session automatically restored on page refresh via React Context |
| 💬 **Chat Interface** | Sidebar with user profile and conversation list, chat window with message bubbles and input bar |
| ⚡ **Real-Time Layer** | Socket.IO server and client connected between backend and frontend |
| 📡 **REST API** | Clean route → middleware → controller → model architecture |
| 📱 **Responsive UI** | Built with Tailwind CSS for a consistent experience across screen sizes |

## 💻 Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Vite, React Router DOM, Context API, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JWT, bcrypt |
| **Real-Time** | Socket.IO |
| **Tooling** | ESLint, dotenv |

</div>

## 🏗️ Architecture

```
                    ┌────────────────┐
                    │   React App     │
                    │  (Vite, SPA)    │
                    └───────┬─────────┘
                            │
              REST API (fetch)  +  Socket.IO (WS)
                            │
                    ┌───────▼─────────┐
                    │  Express Server  │
                    │  + Socket.IO     │
                    ├──────────────────┤
                    │ Routes           │
                    │  /api/auth/*     │
                    │  /api/user/*     │
                    ├──────────────────┤
                    │ Middleware       │
                    │  verifyToken     │
                    ├──────────────────┤
                    │ Controllers      │
                    │  userAuth        │
                    │  userController  │
                    └───────┬──────────┘
                            │
                    ┌───────▼─────────┐
                    │    MongoDB       │
                    │  User collection │
                    └──────────────────┘
```

<details>
<summary><strong>🔐 Authentication flow</strong></summary>

```
Register / Login form
        │
        ▼
POST /api/auth/register | /api/auth/login
        │
        ▼
bcrypt hash / compare
        │
        ▼
Sign JWT → set httpOnly cookie
        │
        ▼
Client redirects to /chatWindow
        │
        ▼
verifyToken middleware on protected routes
        │
        ▼
GET /api/user/me → AuthContext hydrates session
```

</details>

## 📂 Project Structure

```
Chat Application/
│
├── frontend/
│   └── src/
│       ├── api/
│       │   ├── api.js            # fetch wrapper (base URL, credentials)
│       │   ├── authAPI.js        # login / register / logout / getCurrentUser
│       │   └── index.js
│       ├── context/
│       │   └── AuthContext.jsx   # auth state, session restore
│       ├── layouts/
│       │   ├── AuthLayout.jsx
│       │   └── ChatLayout.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   └── ChatWindow/
│       │       ├── Chat.jsx
│       │       ├── ChatWindow.jsx
│       │       └── Sidebar.jsx
│       ├── socket/
│       │   └── socket.js         # socket.io-client instance
│       ├── App.jsx
│       └── main.jsx
│
├── backend/
│   ├── Controllers/
│   │   ├── userAuth.js           # register, login, logout
│   │   └── userController.js     # getUserProfile
│   ├── Middlewares/
│   │   └── authMiddleware.js     # verifyToken
│   ├── Models/
│   │   └── user.js
│   ├── routes/
│   │   ├── authRoutes.js         # /api/auth/*
│   │   └── userRoutes.js         # /api/user/*
│   ├── socket/
│   │   └── socket.js             # Socket.IO connection handler
│   ├── config/
│   │   └── database.js
│   └── server.js
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (local instance or connection string)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/VipinKumar-70/ConvoX.git
cd ConvoX
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
CLIENT_URL=http://localhost:5173
SECRET_KEY=your_jwt_secret
```

```bash
npm start
```

The API runs on `http://localhost:3000`.

### 3. Frontend setup

In a separate terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:

```env
VITE_BASE_URL=http://localhost:3000/api
```

```bash
npm run dev
```

The app runs on `http://localhost:5173`.

## 🛠️ Usage

1. Register a new account — email must be unique
2. Login with your credentials
3. Session is restored automatically on refresh
4. Access the chat screen at `/chatWindow`

## 🔒 Security

- Passwords hashed with **bcrypt** before storage
- **JWT** issued on login and stored as an httpOnly cookie (inaccessible to client-side JS)
- Protected API routes enforced via `verifyToken` middleware
- **CORS** scoped to the configured client origin with credentials enabled
- Sensitive configuration kept in environment variables

## 🚧 Project Status

ConvoX is under active development.

**Completed**
- [x] User registration & login (JWT + bcrypt)
- [x] Session restore on refresh
- [x] Protected API routes
- [x] REST API architecture (routes → middleware → controllers → models)
- [x] Socket.IO server & client scaffolding
- [x] Chat UI layout

**In Progress**
- [ ] Wire Socket.IO events into the chat UI for live messaging
- [ ] Message schema & persistence in MongoDB
- [ ] Real user list & conversation selection
- [ ] Scope messages to individual conversations/rooms

## 🔮 Roadmap

- Online/offline presence & typing indicators
- Read receipts and delivery status
- Image and file sharing
- Message search, editing, and deletion
- Group conversations
- Production deployment

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push the branch
5. Open a Pull Request

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## 📩 Contact

<div align="center">

**Vipin Kumar** — MERN Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-VipinKumar--70-181717?logo=github)](https://github.com/VipinKumar-70)
[![Email](https://img.shields.io/badge/Email-vipin70kr%40gmail.com-D14836?logo=gmail&logoColor=white)](mailto:vipin70kr@gmail.com)

⭐ If you found this project useful, consider giving it a star!

</div>