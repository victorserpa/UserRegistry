import { Link } from "react-router-dom"
import { ButtonQuit, Container } from "./styles"

export default function Button(){
    function logout() {
    if (window.confirm("Você tem certeza de que deseja sair?")) {
      localStorage.removeItem("token")
      location.assign("/")
    }
  }
    
  return (
    <Container>
      <Link onClick={logout}>
        <ButtonQuit>
          <span>Sair</span>
        </ButtonQuit>
      </Link>
    </Container>
  )
}