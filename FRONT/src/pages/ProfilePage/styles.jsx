import styled from "styled-components"

export const DivProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

export const CardProfileUser = styled.div`
  display: flex;
  background: ${(props) => props.theme["gray-100"]};
  width: 100vh;
  height: 50vh;
`

export const ImageProfileUser = styled.div`
  display: grid;
  width: 40vh;
  justify-content: center;
  margin-top: 2.75rem;

  #button {
    margin-top: 2rem;
    height: 2rem;
    border-style: none;
    border-radius: 120px;
    color: black;
    background: ${(props) => props.theme["orange-SZ"]};

    &:focus {
      outline: none;
      box-shadow: #82c0b9 0px 0px 2px 2px;
    }

    &:hover {
      background: ${(props) => props.theme["orange-SZ-Hover"]};
      transition: background-color 0.5s;
    }

    &:disabled {
      cursor: not-allowed;
      background: ${(props) => props.theme["orange-SZ"]};
    }
  }
`

export const ImagePR = styled.img`
  justify-content: center;
  align-items: center;
  width: 8em;
  border-radius: 100%;
  border-style: solid;
  border-color: ${(props) => props.theme["orange-SZ"]};
`

export const ButtonProfile = styled.button``

export const InfosProfileUser = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  margin: 2rem;
`

export const TrProfile = styled.div`
  grid-template-columns: 1;
  margin-bottom: 1rem;
`

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 50px 1fr;
  margin: 2rem;

  align-items: center;
  justify-content: center;

  #number {
    width: 100%;
    color: #000000;
    background-color: #97c6c126;
    border: 0;
    margin-top: 0.75em;
    padding: 1em;
    box-sizing: border-box;
    border-radius: 0.5rem;
    &:focus {
      outline: none;
      box-shadow: #82c0b9 0px 0px 2px 2px;
    }
    &:focus:invalid {
      outline: none;
      box-shadow: #b00020 0px 0px 2px 2px;
    }
  }

  #button {
    margin-top: 2rem;
    height: 4rem;
    width: 10rem;
    border-style: none;
    border-radius: 120px;
    color: black;
    background: ${(props) => props.theme["orange-SZ"]};

    &:focus {
      outline: none;
      box-shadow: #82c0b9 0px 0px 2px 2px;
    }

    &:hover {
      background: ${(props) => props.theme["orange-SZ-Hover"]};
      transition: background-color 0.5s;
    }

    &:disabled {
      cursor: not-allowed;
      background: ${(props) => props.theme["orange-SZ"]};
    }
  }
`

export const Input = styled.input`
  width: 100%;
  color: #000000;
  background-color: #97c6c126;
  border: 0;
  margin-top: 0.75rem;

  padding: 15px 10px 15px;
  box-sizing: border-box;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
    box-shadow: #82c0b9 0px 0px 2px 2px;
  }
  &:focus:invalid {
    outline: none;
    box-shadow: #b00020 0px 0px 2px 2px;
  }
`

export const Label = styled.label`
  color: #000000;
  font-size: 14px;
  margin-left: -3rem;
  /* margin: 10rem; */
`
