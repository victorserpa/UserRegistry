import styled from "styled-components"

export const CenteredContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 1120px) {
    padding: 1rem;
  }
`

export const Container = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  display: block;
  padding-left: 0;
  margin: 0 auto;
  color: #000000;
  text-align: center;

  #header {
    font-weight: bold;
  }

  td,
  th {
    padding: 1.25rem;
    background: #fff;
    color: #000000;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    #button {
      border: none;
      cursor: pointer;
      color: #fff;
      font-weight: bold;
      background: ${(props) => props.theme["red-300"]};
      width: 5rem;
      height: 1.8rem;
      border-radius: 3px;

      :hover {
        background: ${(props) => props.theme["red-500"]};
        transition: background-color 0.2s;
      }

      &[disabled] {
        background-color: #f8d7da;
        color: #721c24;
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 1120px) {
    td,
    th {
      padding: 1rem;
    }
  }
`

export const HeadingContainer = styled.div`
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 3rem;
  @media (max-width: 1120px) {
    flex-direction: column;
    align-items: flex-end;
  }
`

export const Heading = styled.h1`
  font-weight: bolder;
  font-size: 1.8rem;
  color: #000;
  text-align: center;

  @media (max-width: 1120px) {
    font-size: 1.5rem;
  }
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

  @media (max-width: 1120px) {
    margin-top: 1.5rem;
    margin-left: 0;
    margin-right: auto;
  }

  &:hover {
    background: ${(props) => props.theme["red-700"]};
    transition: background-color 0.2s;
  }
`

import { keyframes } from "styled-components"

export const LoadingIndex = styled.div`
  z-index: 999;
  opacity: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${(props) => props.theme["white"]};
  align-items: center;
`

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: 25rem; */
  margin-top: 20rem;
  padding: 0 1.5rem;
  color: ${(props) => props.theme["gray-900"]};

  @media (max-width: 80rem) {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
`

export const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`

export const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`
