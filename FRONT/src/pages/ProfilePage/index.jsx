import axios from "axios"
import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import { useRef } from "react"
import InputMask from "react-input-mask"
import { toast } from "react-toastify"
import { Heading, HeadingContainer } from "../Users/styles"
import {
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
  const id = token ? currentUser.id_user : ""
  console.log()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [editable, setEditable] = useState(false)
  const inputRef = useRef(null)
  const [avatar, setAvatar] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telefone: "",
    avatar: "",
  })

  const getHeaders = () => {
    return {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    }
  }

  const [names, setNames] = useState("")
  const [emaill, setEmaill] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    redirectUsers()

    axios
      .get(`http://localhost:8081/users/${currentUser.id_user}`, {
        headers: getHeaders(),
      })
      .then((response) => {
        const userData = response.data
        setNames(userData.name)
        setEmaill(userData.email)
        setPhone(userData.telefone)
        setAvatar(userData.avatar)
      })
      .catch((error) => {
        console.error(error)
        if (error.response.status === 401) {
          window.location = "/"
          localStorage.removeItem("token")
        }
      })
  }, [currentUser.id])

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

  const handleImageChange = (e) => {
    setAvatar(e.target.files.item(0))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const formData = new FormData()

    if (avatar) {
      formData.append("avatar", avatar)
    }

    if (name) {
      formData.append("name", name)
    }

    if (email) {
      formData.append("email", email)
    }

    if (telefone) {
      formData.append("telefone", telefone)
    }

    if (name && email && telefone) {
      toast.error("Por favor, preencha pelo menos um campo")
      setSubmitting(false)
      return
    }

    try {
      const { data } = await axios.patch(
        `http://localhost:8081/users/${id}`,
        formData,
        {
          headers: getHeaders(),
        }
      )

      setEditable(false)
      toast.success("Dados atualizados com sucesso!")
    } catch (error) {
      console.error(error)
      toast.error("Erro ao editar os dados")
    }

    setSubmitting(false)
  }

  return (
    <>
      <HeadingContainer>
        <Heading>Seus dados</Heading>
      </HeadingContainer>

      <DivProfile>
        <CardProfileUser id="header">
          <div>
            <ImageProfileUser>
              <ImagePR
                id="image-preview"
                src={`http://localhost:8081/uploads/${avatar}`}
                alt="Imagem do Usuário"
                headers={getHeaders()}
              />
              <Input
                name="avatar"
                type="file"
                id="image"
                onChange={handleImageChange}
                disabled={!editable}
              />
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
                  placeholder={names}
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
                  placeholder={emaill}
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
                  placeholder={phone}
                  disabled={!editable}
                >
                  {(inputProps) => (
                    <input {...inputProps} type="tel" disabled={!editable} />
                  )}
                </InputMask>
                <button type="submit" disabled={!editable} id="button">
                  Salvar alteração
                </button>
              </Form>
            </TrProfile>
          </InfosProfileUser>
        </CardProfileUser>
      </DivProfile>
    </>
  )
}
