import styled from "styled-components"

export const DivProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`

export const CardProfileUser = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["gray-100"]};
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
    width: auto;
  }
`

export const ImageProfileUser = styled.div`
  display: grid;
  width: 40%;
  justify-content: center;
  margin-top: 2.75rem;
  margin-left: 4rem;

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

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;

    #button {
      margin-top: 1rem;
      width: 100%;
    }
  }
`

export const ImagePR = styled.img`
  justify-content: center;
  align-items: center;
  width: 8em;
  height: 8rem;
  margin-left: 5rem;
  border-radius: 100%;
  border-style: solid;
  border-color: ${(props) => props.theme["orange-SZ"]};
`

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
  width: auto;
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  justify-content: center;

  #number {
    width: auto;
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
    margin-left: 4rem;
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1.5rem;
    width: auto;
    
    align-items: center;
    justify-content: center;
    #button {
      margin-left: 0;
    }
    
    #number {
      width: 100%;
    }
  }
`

export const Input = styled.input`
  width: auto;
  color: #000000;
  background-color: #97c6c126;
  border: 0;
  margin-top: 0.75rem;
  margin-left: 1rem;
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

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px 5px 10px;
    width: 100%;
  }
`

export const Label = styled.label`
  color: #000000;
  font-size: 14px;
  margin-left: -3rem;
  display: block;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`
