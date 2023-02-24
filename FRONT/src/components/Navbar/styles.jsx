import styled from "styled-components"

export const Div = styled.div`
  padding: 0;
  margin: 0;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    height: 10%;
  }
`

export const UlNav = styled.ul`
  position: fixed;
  background: ${(props) => props.theme["orange-SZ"]};
  opacity: 0.95;
  width: 12rem;
  height: 100vh;
  top: 0;
  left: 0;
  transform: ${(props) =>
    props.navBarOpen ? "translateX(0)" : "translateX(-8rem)"};
  transition: transform 0.5s ease;

  @media (max-width: 768px) {
    display: block;
    height: 20vh;
  }
`

export const ItensNavBar = styled.div`
  margin-top: 2rem;
  margin-left: 1rem;

  #navBar {
    border-color: green !important;
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    gap: 0.55rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      text-decoration: underline;
      box-shadow: none;
    }
  }

  #iconNavbar {
    margin-left: 112px;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    text-decoration: none;
    color: white;
    transition: transform 0.5s ease;
    ${(props) => props.navBarOpen && "transform: translateX(8rem)"};
  }
`

export const ButtonNavBar = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  margin-top: 1rem;
  margin-left: 9.3rem;
  transition: transform 0.5s ease;
  ${(props) => props.navBarOpen && "transform: translateX(8rem)"};

  @media (max-width: 768px) {
    display: block;
    color: ${props => props.theme["gray-900"]};
  }
`
