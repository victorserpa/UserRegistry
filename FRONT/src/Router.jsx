import { Routes, Route, redirect } from "react-router-dom"

import HomePage from "./pages/Home"
import Register from "./pages/register"
import ForgotPassword from "./pages/ResetPassword"
import Users from "./pages/Users"

export function Router() {
  const token = localStorage.getItem("token")
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/users" element={<Users />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/resetpassword" element={<ForgotPassword />} />
    </Routes>
  )
}
