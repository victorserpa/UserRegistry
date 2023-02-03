import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

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
  List,
} from "../Home/styles"
import { ButtonBackHome } from "../register/styles"

export default function ForgotPassword() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [error, setError] = useState("")

  const [submitting, setSubmitting] = useState(false)
  
    const token = localStorage.getItem("token") || null

    useEffect(() => {
      redirectUsers()
    })

    const redirectUsers = () => {
      if (token) {
        window.location = "/users"
      }
    }
  

  async function updatePassword(login, password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
      return toast.error("As senhas devem corresponder")
    }
    const body = {
      login,
      password,
    }
    try {
      const user = await axios.put(`http://localhost:8081/users/${login}`, body)
      if (!user) {
        return toast.error("Erro ao atualizar a senha, tente novamente.")
      }
      toast.success(
        "Senha do usuário com " + `${login}` + " atualizada com sucesso!"
      )
      setLogin("")
      setPassword("")
      setPasswordConfirmation("")
    } catch (error) {
      toast.error("Erro ao atualizar a senha, tente novamente.")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const message = updatePassword(login, password, passwordConfirmation)
    setError("")
    setSubmitting(false)
  }

  return (
    <>
      <CenteredContainer small>
        <h1>Redefinir Senha</h1>
        <FormContainer>
          <Link to="/">
            <ButtonBackHome>Voltar</ButtonBackHome>
          </Link>
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
              <Label htmlFor="password">Nova Senha</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Nova Senha"
                value={password}
                onInput={(e) => e.target.setCustomValidity("")}
                onChange={(e) => setPassword(e.target.value)}
                required
                minlength="8"
                onInvalid={(e) => {
                  e.target.setCustomValidity("")
                  if (!e.target.validity.valid) {
                    e.target.setCustomValidity(
                      "Deve conter pelo menos uma letra maiúscula, pelo menos uma letra minúscula, pelo menos um número, pelo menos um caractere especial, mínimo de oito de comprimento"
                    )
                  }
                }}
              />
            </Field>
            <Field>
              <Label htmlFor="passwordConfirmation">
                Confirme a Nova Senha
              </Label>
              <Input
                type="password"
                name="passwordConfirmation"
                placeholder="Confirme a Nova Senha"
                id="passwordConfirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
                onKeyUp={(e) => {
                  if (
                    password &&
                    passwordConfirmation &&
                    password !== passwordConfirmation
                  ) {
                    e.target.setCustomValidity("Passwords must match")
                  } else {
                    e.target.setCustomValidity("")
                  }
                }}
              />
            </Field>
            <p>A senha deve conter:</p>
            <List>
              <li>Pelo menos 1 letra maiúscula e minúscula</li>
              <li>Pelo menos 1 número</li>
              <li>Pelo menos 1 caracter especial</li>
              <li>Pelo menos 8 caracteres</li>
            </List>
            <Button type="submit" disabled={submitting}>
              Redefinir Senha
            </Button>
            {error && <p>{error}</p>}
          </Form>
        </FormContainer>
      </CenteredContainer>
    </>
  )
}
