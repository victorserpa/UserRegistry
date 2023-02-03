import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import jwtDecode from "jwt-decode"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

import {
  CenteredContainer,
  Heading,
  ButtonQuit,
  Container,
  HeadingContainer,
} from "../Users/styles"

import { setIsLoading } from "../../store/actions"

export default function Users() {
  const [user, setUser] = useState([])
  const token = localStorage.getItem("token") || null
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.loading)
  const currentUser = (token) ? jwtDecode(token) : ""
  const isAdmin = (token) ? currentUser.admin : ""
  const name = (token) ? currentUser.name : ""
  let toastDisplayed = false

  useEffect(() => {
    redirectUsers()
    if (token) {
      getAllUsers()
    }
  }, [])
  
  const loaded = () => {
    dispatch(setIsLoading())
  }

  const getHeaders = () => {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  }
  
  const redirectUsers = () => {
    if (!token) {
      window.location="/"
    }
  }

  async function getAllUsers() {
    axios
      .get("http://localhost:8081/users", { headers: getHeaders() })
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error))
      .finally(() => {
        if (!toastDisplayed) {
          toast.success(`Seja bem-vindo, ${name}`)
          toastDisplayed = true
        }
        loaded()
      })
  }

async function deleteUser(id, name) {
  if (window.confirm("Você tem certeza de que deseja excluir este usuário?")) {
    try {
      if (isAdmin || currentUser.id_user === id) {
        await axios.delete(`http://localhost:8081/users/${id}`, {
          headers: getHeaders(),
        })
        axios
          .get("http://localhost:8081/users", { headers: getHeaders() })
          .then((response) => {
            setUser(response.data)
            toast.success(`Usuário excluído com sucesso!`)
          })
          .catch((error) => {
            console.log(error)
            toast.error("Erro ao excluir o usuário, por favor tente novamente.")
          })
      } else {
        toast.error("Você não tem permissão para excluir este usuário.")
      }
    } catch (error) {
      console.log(error)
      toast.error("Erro ao excluir o usuário, por favor tente novamente.")
    }
  }
}

  function logout() {
    if (window.confirm("Você tem certeza de que deseja sair?")) {
      localStorage.removeItem("token")
      location.assign("/")
    }
  }

  return (
    <>
      <div>
        <CenteredContainer small>
          <HeadingContainer>
            <Heading>Usuários cadastrados</Heading>
            <Link onClick={logout}>
              <ButtonQuit>
                <span>Sair</span>
              </ButtonQuit>
            </Link>
          </HeadingContainer>
          <Container>
            <tbody>
              <tr>
                <td id="header">
                  Nome do usuário
                </td>
                <th id="header">Login</th>
                <th id="header">E-mail</th>
                <th id="header">Telefone</th>
                <th id="header">Apagar usuário</th>
              </tr>
              {user && user.length > 0 ? (
                user.map((user) => {
                  if (
                    isAdmin === true ||
                    currentUser.id_user === user.id_user
                  ) {
                    return (
                      <tr key={user.id_user}>
                        <td width="35%">{user.name}</td>
                        <td>{user.login}</td>
                        <td>{user.email}</td>
                        <td width="25%">{user.telefone}</td>
                        <th>
                          <button
                            id="button"
                            key={user.id_user}
                            onClick={() => deleteUser(user.id_user)}
                            disabled={isAdmin !== true}
                          >
                            Excluir
                          </button>
                        </th>
                      </tr>
                    )
                  }
                })
              ) : (
                <tr>Nenhum usuário cadastrado!</tr>
              )}
            </tbody>
          </Container>
        </CenteredContainer>
      </div>
    </>
  )
}
