import jwtDecode from "jwt-decode"
import { CardProfileUser, Container } from "./styles"

export default function HomeUser() {
  const token = localStorage.getItem("token") || null
  const currentUser = token ? jwtDecode(token) : ""
  const name = token ? currentUser.name : ""

  return (
    <Container>
      <CardProfileUser>
        <h1>
          Seja bem-vindo, {name}
        </h1>
      </CardProfileUser>
    </Container>
  )
}
