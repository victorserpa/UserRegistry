import jwtDecode from "jwt-decode"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { CardProfileUser, Container } from "./styles"

export default function HomeUser() {
  const token = localStorage.getItem("token") || null
  const currentUser = token ? jwtDecode(token) : ""
  const name = token ? currentUser.name : ""
  

  
  useEffect(() => {
    toast.success(`Seja bem-vindo, ${name}`)
  }, [token])


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
