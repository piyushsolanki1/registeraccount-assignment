import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import AccountPage from "./Pages/AccountPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/register" element={<RegisterPage />} />

    </Routes>
  );
}

export default App;

