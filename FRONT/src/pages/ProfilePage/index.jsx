import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import { useRef } from "react"
import InputMask from "react-input-mask"
import {
  ButtonProfile,
  CardProfileUser,
  DivProfile,
  Form,
  ImagePR,
  ImageProfileUser,
  InfosProfileUser,
  Input,
  Label,
  TrProfile,
} from "./styles"

export default function ProfilePage() {
  const token = localStorage.getItem("token") || null
    const currentUser = token ? jwtDecode(token) : ""
    const isAdmin = token ? currentUser.admin : ""
    const namee = token ? currentUser.name : ""
    
      const [name, setName] = useState(currentUser.name)
      const [birthday, setBirthday] = useState(currentUser.birthday)
      const [email, setEmail] = useState(currentUser.email)
      const [telefone, setTelefone] = useState("")
      const [editable, setEditable] = useState(false)
      const inputRef = useRef(null)
  
    useEffect(() => {
      redirectUsers()
    }, [])
  
    const redirectUsers = () => {
      if (!token) {
        window.location = "/"
      }
    }

  function handleEdit() {
    setEditable(!editable)
    const inputs = inputRef.current.getElementsByTagName("input")
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].disabled = !editable
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    // enviar dados para o banco de dados
    handleEdit()
  }

  return (
    <DivProfile>
      <CardProfileUser id="header">
        <div>
          <ImageProfileUser>
            <ImagePR
              id="imagee"
              src="https://source.unsplash.com/random/100x100"
              alt="Imagem do Usuário"
            />
            <button id="button" disabled={true}>
              Alterar Imagem
            </button>
            <button onClick={handleEdit} id="button">
              {editable ? "Cancelar" : "Editar Perfil"}
            </button>
          </ImageProfileUser>
        </div>
        <InfosProfileUser>
          <TrProfile>
            <Form onSubmit={handleSubmit}>
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
                placeholder={namee}
                disabled={!editable}
              />

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
                placeholder={email}
                disabled={!editable}
              />

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
                placeholder="Data de Nascimento"
                disabled={!editable}
              />
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
                disabled={!editable}
              >
                {(inputProps) => (
                  <input {...inputProps} type="tel" disabled={!editable} />
                )}
              </InputMask>
              <button disabled={!editable} id="button">
                Salvar alteração
              </button>
            </Form>
          </TrProfile>
        </InfosProfileUser>
      </CardProfileUser>
    </DivProfile>
  )
}
