import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
/* margin-left: 100rem; */
`

export const ButtonQuit = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme["red-500"]};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 0.9rem;
  cursor: pointer;
  margin: 1.5rem 12rem 1.5rem auto;
  
  justify-content: flex-end;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    margin-left: 0;
    margin-right: auto;
  }

  &:hover {
    background: ${(props) => props.theme["red-700"]};
    transition: background-color 0.2s;
  }
`