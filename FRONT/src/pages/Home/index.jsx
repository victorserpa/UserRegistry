import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import {
  Button,
  CenteredContainer,
  Container,
  CreateAccount,
  Field,
  ForgetPassword,
  Form,
  FormContainer,
  GroupLinks,
  Heading,
  Input,
  Label,
} from "./styles"
import { toast } from "react-toastify"

export default function HomePage() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const [submitting, setSubmitting] = useState(false)

  const token = localStorage.getItem("token") || null

  useEffect(() => {
    redirectUsers()
  })

  const redirectUsers = () => {
    if (token) {
      window.location = "/home"
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const { data } = await axios.post("http://localhost:8081/login", {
        login,
        password,
      })
      localStorage.setItem("token", data.token)
      toast.success("Login efetuado com sucesso!")
      setTimeout(() => {
        window.location = "/home"
      }, 1000)
    } catch (err) {
      setSubmitting(false)
      toast.error("Login e/ou Senha incorreta!")
    }
  }

  return (
    <>
      <CenteredContainer small>
        <h1>Seja Bem vindo!</h1>
        <FormContainer>
          <Heading>Login</Heading>
          <Form onSubmit={handleSubmit}>
            <Field>
              <Label htmlFor="email" label="email">
                Login
              </Label>
              <Input
                type="text"
                name="login"
                id="login"
                placeholder="Login"
                required
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </Field>
            <Field>
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Field>
            <Button type="submit">
              {submitting ? "Carregando..." : "Entrar"}
            </Button>
          </Form>
          <GroupLinks>
            <Link to="/register">
              <CreateAccount>
                <span>Cadastre-se</span>
              </CreateAccount>
            </Link>
            <Link to="/resetpassword">
              <ForgetPassword>
                <span>Perdeu a Senha?</span>
              </ForgetPassword>
            </Link>
          </GroupLinks>
        </FormContainer>
      </CenteredContainer>
    </>
  )
}
