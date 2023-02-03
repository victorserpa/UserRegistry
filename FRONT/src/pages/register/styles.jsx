import styled from "styled-components"

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Container = styled(CenteredContainer)`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 800px) {
    flex-direction: ${(props) => (props.row ? "row" : "column")};
    width: ${(props) => (props.small ? "50%" : "100%")};
  }
`
export const Heading = styled.h2`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  margin-block-start: 0;
  color: #000000;
`

export const FormContainer = styled(CenteredContainer)`
  display: flex;
  padding: 20px 24px 20px 24px;
  text-align: left;
  width: 85%;
  height: 100%;
  background: #FFF;
  box-shadow: 1px 0px 15px -4px #000000;
  border-radius: 8px;
  display: ${(props) => (props.hidden ? "none" : "block")};

  @media (min-width: 800px) {
    width: 80%;
    max-width: 424px;
    padding: 19px 22px 19px;
  }
`

export const Form = styled.form`
  width: 100%;
  margin-top: 12px;

  #number {
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
  }
`

export const Field = styled.div`
  width: 100%;
  position: relative;
  margin-top: 0.75rem;
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
`
export const Button = styled.button`
  border: 0;
  background-color: #d32c00;
  color: white;
  font-weight: bold;
  width: 100%;
  margin-top: 12px;
  padding: 8px;
  height: 45px;
  font-size: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
  border-radius: 8px;
  &:focus {
    outline: none;
    box-shadow: #82c0b9 0px 0px 2px 2px;
  }
  &:hover {
    background-color: #b02500;
    transition: background-color 0.5s;
  }
`

export const ButtonBackHome = styled.button`
  border: 0;
  background-color: #d32c00;
  color: white;
  font-weight: bold;
  width: 20%;
  height: 1.5rem;
  cursor: pointer;
  border-radius: 5px;

  &:focus {
    outline: none;
    box-shadow: #82c0b9 0px 0px 2px 2px;
  }
  &:hover {
    background-color: #b02500;
    transition: background-color 0.5s;
  }
`


export const List = styled.ul`
  list-style: disc;
  list-style-position: inside;
  padding-inline-start: 0;
  font-size: 12px;
  color: #000000;
`
