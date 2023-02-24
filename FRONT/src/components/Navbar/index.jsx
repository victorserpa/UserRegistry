import { CaretDoubleLeft, CaretDoubleRight, House, List, User } from "phosphor-react"
import { useDispatch, useSelector } from "react-redux"
import { toggleNavbar } from "../../store/actions"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ButtonNavBar, Div, ItensNavBar, UlNav } from "./styles"

export default function NavBar() {  
  const dispatch = useDispatch()
  const navbarOpen = useSelector((state) => state.navbar.navbarOpen)

  const handleClickNavBar = () => {
    dispatch(toggleNavbar())
  }


  return (
    <Div navBarOpen={navbarOpen}>
      <UlNav navBarOpen={navbarOpen}>
        {navbarOpen ? (
          <ItensNavBar>
            <Link to="/home" id="navBar">
              <House size={21} weight="bold" />
              Home
            </Link>
            <Link to="users" id="navBar">
              <List size={21} weight="bold" />
              Usuários
            </Link>
            <Link to="profile" id="navBar">
              <User size={21} />
              Seus Dados
            </Link>
          </ItensNavBar>
        ) : (
          <ItensNavBar>
            <Link to="/home" id="iconNavbar">
              <House size={25} />
            </Link>
            <Link to="users" id="iconNavbar">
              <List size={25} />
            </Link>
            <Link to="profile" id="iconNavbar">
              <User size={25} />
            </Link>
          </ItensNavBar>
        )}

        <ButtonNavBar onClick={handleClickNavBar}>
          {navbarOpen ? (
            <CaretDoubleLeft size={21} weight="thin" />
          ) : (
            <CaretDoubleRight size={25} weight="bold" />
          )}
        </ButtonNavBar>
      </UlNav>
    </Div>
  )
}
