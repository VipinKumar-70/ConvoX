import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/api/auth/register" element={<Register />}></Route>
        <Route path="/api/auth/login" element={<Login />}></Route>
      </Routes>
    </section>
  );
}

export default App;
