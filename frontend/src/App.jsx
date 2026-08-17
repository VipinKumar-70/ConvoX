import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <section>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* Public Route */}
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          ></Route>

          {/* Private Route */}
          <Route
            path="/chatWindow"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </section>
  );
}

export default App;
