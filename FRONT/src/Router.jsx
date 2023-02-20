import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home"
import ProfilePage from "./pages/ProfilePage"
import Register from "./pages/register"
import ForgotPassword from "./pages/ResetPassword"
import HomeUser from "./pages/UserHomePage"
import Users from "./pages/Users"
import { DefaultLayout } from "./styles/layouts/DefaultLayout"

export function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/resetpassword" element={<ForgotPassword />} />
      <Route element={<DefaultLayout />}>
        <Route exact path="/home" element={<HomeUser />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/users" element={<Users />} />
      </Route>
    </Routes>
  )
}
