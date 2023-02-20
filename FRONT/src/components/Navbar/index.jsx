import { CaretDoubleLeft, CaretDoubleRight, House, List, User } from "phosphor-react"
import { useDispatch, useSelector } from "react-redux"
import { toggleNavbar } from "../../store/actions"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ButtonNavBar, Div, ItensNavBar, UlNav } from "./styles"

export default function NavBar() {
  // const [navBarOpen, setNavBarOpen] = useState(true)
  
  const dispatch = useDispatch()
  const navbarOpen = useSelector((state) => state.navbar.navbarOpen)

  const handleClickNavBar = () => {
    dispatch(toggleNavbar())
  }

  // const handleClickNavBar = () => {
  //   setNavBarOpen(!navBarOpen)
  // }

  return (
    <Div navBarOpen={navbarOpen}>
      <UlNav navBarOpen={navbarOpen}>
        {navbarOpen ? (
          <ItensNavBar>
            <Link to="/home" id="navBar">
              <House size={20} weight="bold" />
              Home
            </Link>
            <Link to="users" id="navBar">
              <List size={20} weight="bold" />
              Usuários
            </Link>
            <Link to="profile" id="navBar">
              <User size={20} />
              Seus Dados
            </Link>
          </ItensNavBar>
        ) : (
          <ItensNavBar>
            <Link to="/home" id="iconNavbar">
              <House size={20} />
            </Link>
            <Link to="users" id="iconNavbar">
              <List size={20} />
            </Link>
            <Link to="profile" id="iconNavbar">
              <User size={20} />
            </Link>
          </ItensNavBar>
        )}

        <ButtonNavBar onClick={handleClickNavBar}>
          {navbarOpen ? (
            <CaretDoubleLeft size={20} weight="thin" />
          ) : (
            <CaretDoubleRight size={20} weight="thin" />
          )}
        </ButtonNavBar>
      </UlNav>
    </Div>
  )
}
