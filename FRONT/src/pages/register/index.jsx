import React, { useState, useRef, useEffect } from "react"
import axios from "axios"
import InputMask from "react-input-mask"
import { toast } from "react-toastify"

import {
  Button,
  ButtonBackHome,
  Container,
  Field,
  Form,
  FormContainer,
  Heading,
  Input,
  Label,
  List,
} from "./styles"
import { Link } from "react-router-dom"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [birthday, setBirthday] = useState("")
  const [telefone, setTelefone] = useState("")
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [mask, setMask] = useState("(99) 99999-9999")
  const inputRef = useRef(null)
  
  const token = localStorage.getItem("token") || null
  
  useEffect(() => {
    redirectUsers()
  })
  
    const redirectUsers = () => {
      if (token) {
        window.location = "/users"
      }
    }
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    const { data, error } = await postData("http://localhost:8081/register", {
      login,
      name,
      telefone,
      email,
      birthday,
      password,
    })
    if (error) {
      toast.error("Erro ao se cadastrar, tente novamente !")
    } else {
      setLogin("")
      setName("")
      setTelefone("")
      setEmail("")
      setBirthday("")
      setPassword("")
      setConfirmPassword("")
    }
  }

  const postData = async (url, data) => {
    try {
      const response = await axios.post(url, data)
      toast.success("Usuário criado com sucesso!")
      return response.data
    } catch (error) {
      toast.error("Erro ao cadastrar o usuário")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Container small>
        <FormContainer>
          <Link to="/">
            <ButtonBackHome>Voltar</ButtonBackHome>
          </Link>
          <Heading>Cadastre-se</Heading>
          <Form onSubmit={handleSubmit}>
            <Field>
              <Label htmlFor="name" label="name">
                Nome Completo
              </Label>
              <Input
                name="name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autocomplete
                placeholder="Nome Completo"
              />
            </Field>
            <Field>
              <Label htmlFor="email" label="email">
                Email
              </Label>
              <Input
                name="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autocomplete
                placeholder="Email"
              />
            </Field>
            <Field>
              <Label htmlFor="email" label="email">
                Data de Nascimento
              </Label>
              <Input
                name="birthday"
                type="date"
                id="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
                autocomplete
                placeholder="Data de Nascimento"
              />
            </Field>
            <Field>
              <Label htmlFor="email" label="email">
                Telefone
              </Label>
              <InputMask
                name="number"
                type="tel"
                id="number"
                ref={inputRef}
                mask="(99) 99999-9999"
                maskChar={null}
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Telefone"
              >
                {(inputProps) => <input {...inputProps} type="tel" required />}
              </InputMask>
            </Field>
            <Field>
              <Label htmlFor="email" label="email">
                Login
              </Label>
              <Input
                name="login"
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
                autocomplete
                placeholder="Login"
              />
            </Field>
            <Field>
              <Label htmlFor="password">Senha</Label>
              <Input
                name="password"
                type="password"
                id="password"
                onInput={(e) => e.target.setCustomValidity("")}
                minlength="8"
                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                onInvalid={(e) => {
                  e.target.setCustomValidity("")
                  if (!e.target.validity.valid) {
                    e.target.setCustomValidity(
                      "Deve conter pelo menos uma letra maiúscula, pelo menos uma letra minúscula, pelo menos um número, pelo menos um caractere especial, mínimo de oito de comprimento"
                    )
                  }
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Senha"
              />
            </Field>

            <Field>
              <Label htmlFor="confirmPassword">Confirme a senha</Label>
              <Input
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                minlength="8"
                required
                placeholder="Confirme a Senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyUp={(e) => {
                  if (
                    password &&
                    confirmPassword &&
                    password !== confirmPassword
                  ) {
                    e.target.setCustomValidity("Passwords must match")
                  } else {
                    e.target.setCustomValidity("")
                  }
                }}
              />
            </Field>
            <br />
            <p>A senha deve conter:</p>
            <List>
              <li>Pelo menos 1 letra maiúscula e minúscula</li>
              <li>Pelo menos 1 número</li>
              <li>Pelo menos 1 caracter especial</li>
              <li>Pelo menos 8 caracteres</li>
            </List>
            <Button type="submit" disabled={submitting}>
              Cadastrar
            </Button>
          </Form>
        </FormContainer>
      </Container>
    </>
  )
}
