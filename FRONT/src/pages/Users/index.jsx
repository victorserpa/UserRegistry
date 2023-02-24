import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import jwtDecode from "jwt-decode"
import { toast } from "react-toastify"

import {
  CenteredContainer,
  Heading,
  Container,
  HeadingContainer,
  Paginate,
  Selector,
} from "../Users/styles"

import { setIsLoading } from "../../store/actions"

export default function Users() {
  const [users, setUsers] = useState([])
  const [perPage, setPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)
  const token = localStorage.getItem("token") || null
  const dispatch = useDispatch()
  const currentUser = token ? jwtDecode(token) : ""
  const isAdmin = token ? currentUser.admin : ""

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
      window.location = "/"
      localStorage.removeItem("token")
    }
  }

  async function getAllUsers() {
    axios
      .get("http://localhost:8081/users", { headers: getHeaders() })
      .then((response) => setUsers(response.data))
      .catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          window.location = "/"
          localStorage.removeItem("token")
        }
      })
      .finally(() => {
        {
          users.length <= 0 ? loaded() : ""
        }
      })
  }

  async function deleteUser(id, name) {
    if (currentUser.id_user === id) {
      toast.error("Você não pode excluir você mesmo.")
      return
    }
    if (
      window.confirm("Você tem certeza de que deseja excluir este usuário?")
    ) {
      try {
        if (isAdmin || currentUser.id_user === id) {
          await axios.delete(`http://localhost:8081/users/${id}`, {
            headers: getHeaders(),
          })
          axios
            .get("http://localhost:8081/users", { headers: getHeaders() })
            .then((response) => {
              setUsers(response.data)
              toast.success(`Usuário excluído com sucesso!`)
            })
            .catch((error) => {
              console.log(error)
              toast.error(
                "Erro ao excluir o usuário, por favor tente novamente."
              )
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

  function listUser() {
    const start = currentPage * perPage
    const end = start + perPage
    const userList = !isAdmin
      ? [users.find((elem) => currentUser.id_user === elem.id_user)]
      : [...users.slice(start, end)]
    return userList.map((user) => (
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
            Apagar
          </button>
        </th>
      </tr>
    ))
  }

  const numPages = Math.ceil(users.length / perPage)

  const handlePerPageChange = (e) => {
    const newPerPage = parseInt(e.target.value)
    setPerPage(newPerPage)
    setCurrentPage(0)
  }

  return (
    <>
      <div>
        <CenteredContainer small>
          <HeadingContainer>
            <Heading>Usuários cadastrados</Heading>
          </HeadingContainer>
          {currentUser.admin == isAdmin ? (
            <Selector
              id="per-page"
              value={perPage}
              onChange={handlePerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </Selector>
          ) : (
            ""
          )}
          <Container>
            <tbody>
              <tr>
                <td width="35%" id="header">
                  Nome do usuário
                </td>
                <th id="header">Login</th>
                <th id="header">E-mail</th>
                <th id="header">Telefone</th>
                <th width="25%" id="header">
                  Apagar usuário
                </th>
              </tr>
              {users && users.length > 0 && listUser()}
            </tbody>
          </Container>
          {isAdmin && users.length > perPage ? (
            <Paginate
              pageCount={numPages}
              onPageChange={(data) => setCurrentPage(data.selected)}
              containerClassName={"pagination"}
              activeClassName={"active"}
              previousLabel={"Voltar"}
              nextLabel={"Avançar"}
              breakClassName={"break"}
              marginPagesDisplayed={1}
              pageRangeDisplayed={5}
            />
          ) : (
            ""
          )}
        </CenteredContainer>
      </div>
    </>
  )
}
