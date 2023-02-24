import ReactPaginate from "react-paginate"
import styled, { keyframes } from "styled-components"

export const CenteredContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Container = styled.table`
  height: 28rem;
  overflow-y: auto;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  display: block;
  padding-left: 0;
  margin: 0 auto;
  color: #000000;
  text-align: center;
  margin-bottom: 2rem;

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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    td,
    th {
      padding: 0.5rem;
      font-size: 0.9rem;

      &:first-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      &:last-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      #button {
        width: 100%;
        height: 2.5rem;
        margin-bottom: 0.5rem;
      }
    }
  }
`

export const HeadingContainer = styled.div`
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 3rem;
`

export const Heading = styled.h1`
  font-weight: bolder;
  font-size: 1.8rem;
  color: #000;
  text-align: center;
`

export const LoadingIndex = styled.div`
  z-index: 999;
  opacity: 1;
  width: 100%;
  height: 100em;
  position: absolute;
  background: ${(props) => props.theme["white"]};
  align-items: center;
`

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20rem;
  padding: 0 1.5rem;
  color: ${(props) => props.theme["gray-900"]};
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

export const Paginate = styled(ReactPaginate).attrs({
  activeClassName: "active",
})`
  cursor: pointer;
  gap: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  color: ${(props) => props.theme["orange-SZ"]};
`
export const Selector = styled.select`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 13px;
  line-height: 1;
  height: 35px;
  gap: 5px;
  background: white;
  border: none;
  color: ${(props) => props.theme["orange-SZ"]};
  box-shadow: 0 2px 10px ${(props) => props.theme["gray-400"]};
`