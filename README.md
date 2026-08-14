# ConvoX - Real-Time Chat Application

A modern **Real-Time Chat Application** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). ConvoX allows users to **register, login, and chat**, with secure cookie-based authentication and a Socket.IO layer for real-time messaging.

---

## 🌟 Features

- **User Authentication & Registration**
  - Register & login with email and password
  - Password hashing using bcrypt
  - JWT stored in a secure httpOnly cookie
  - Duplicate email checks
  - Auth middleware to protect API routes
- **Session Handling**
  - Session restored automatically on page refresh via AuthContext
- **Chat Interface**
  - Sidebar with user profile and conversation list
  - Chat window with message bubbles and input bar
  - Responsive layout for all screen sizes
- **Real-Time Communication**
  - Socket.IO server connected to the Express backend
  - Socket.IO client connected from the React frontend
- **Backend**
  - RESTful API using **Node.js & Express**
  - Data storage with **MongoDB & Mongoose**
- **Security**
  - Password hashing using **bcrypt**
  - JWT authentication
  - Protected routes via middleware
  - CORS configured for the frontend origin

---

## 💻 Tech Stack

| Layer          | Technology                               |
| -------------- | ----------------------------------------- |
| Frontend       | React.js, Tailwind CSS, React Router DOM  |
| Backend        | Node.js, Express.js                       |
| Database       | MongoDB, Mongoose                         |
| Authentication | JWT, bcrypt                               |
| Real-Time      | Socket.IO                                 |
| API Requests   | Fetch API                                 |

---

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

---

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

---

## 🚀 Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/VipinKumar-70/ConvoX.git
cd "ConvoX"
```

2. **Backend Setup:**

```bash
cd backend
npm install
# Create a .env file with:
# CLIENT_URL=http://localhost:5173
# SECRET_KEY=<your_jwt_secret>
npm start
```

3. **Frontend Setup:**

```bash
cd frontend
npm install
# Create a .env file with:
# VITE_BASE_URL=http://localhost:3000/api
npm run dev
```

4. Open your browser at `http://localhost:5173`

---

## 🛠 Usage

- Register a new account → email must be unique
- Login using your registered credentials
- Session is restored automatically on refresh
- Access the chat screen from `/chatWindow`

---

## 🔒 Security & Validation

- Passwords stored hashed in MongoDB using bcrypt
- JWT signed on login and stored in a httpOnly cookie
- Duplicate emails are blocked during registration
- Protected API routes verified through auth middleware
- CORS restricted to the configured client origin

---

## 🚧 Project Status

ConvoX is currently under development.

- ✅ Authentication (register, login, logout, session restore)
- ✅ Protected API routes
- ✅ Chat UI layout
- ✅ Socket.IO server & client scaffolding
- 🔄 Connecting Socket.IO events to the chat UI
- 🔄 Message storage in MongoDB
- 🔄 Real user list & conversation selection

---

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Make sure to follow the standard coding conventions and best practices.

---

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details. [MIT License](LICENSE)

---

## 📩 Contact

If you have any questions or need further assistance, please don't hesitate to contact me at  
[Vipin Kumar](mailto:vipin70kr@gmail.com). I'll be happy to help!