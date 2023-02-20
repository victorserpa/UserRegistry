import { useState, useEffect } from "react"
import axios from "axios"

export default function UserAvatar({ currentUser }) {
  const [userAvatar, setUserAvatar] = useState(null)
  
    const getHeaders = () => {
      return {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      }
    }

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/uploads/${currentUser.avatar}`,
          {
            headers: getHeaders(),
            // responseType: "arraybuffer",
          }
        )

        const base64Image = Buffer.from(response.data, "binary").toString(
          "base64"
        )

        setUserAvatar(
          `data:${response.headers["content-type"]};base64,${base64Image}`
        )
      } catch (error) {
        console.log(error)
      }
    }

    fetchAvatar()
  }, [currentUser])

  return (
    <img
      src={userAvatar}
      alt="Avatar do usuário"
      style={{ width: "100px", height: "100px" }}
    />
  )
}

