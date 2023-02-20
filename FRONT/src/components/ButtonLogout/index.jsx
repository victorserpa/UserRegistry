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
      <div onClick={logout}>
        <ButtonQuit>
          <span>Sair</span>
        </ButtonQuit>
      </div>
    </Container>
  )
}