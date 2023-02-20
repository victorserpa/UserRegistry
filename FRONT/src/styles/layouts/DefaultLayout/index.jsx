import { Outlet } from 'react-router-dom'
import Button from '../../../components/ButtonLogout'

import NavBar from "../../../components/Navbar"
import { LayoutContainer } from "./styles"

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <NavBar />
      <Button />
      <Outlet />
    </LayoutContainer>
  )
}
