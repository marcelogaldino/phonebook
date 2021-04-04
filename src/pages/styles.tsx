/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'

interface IErrorInput {
  errorFirstName: boolean
  errorLastName: boolean
  errorPhone: boolean
}

export const Container = styled.div`
  @media (max-width: 490px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 91px;
    height: 63px;
    color: #b66e1e;
  }

  @media (max-width: 560px) {
    svg {
      width: 48px;
      height: 48px;
    }
  }

  @media (max-width: 490px) {
    width: 155px;

    svg {
      width: 36px;
      height: 36px;
    }
  }
`

export const Title = styled.div`
  font-size: 4.8rem;
  font-weight: bold;
  color: #b66e1e;
  align-self: center;

  @media (max-width: 560px) {
    font-size: 3.8rem;
  }

  @media (max-width: 380px) {
    font-size: 2.4rem;
  }
`
export const HeaderDescription = styled.div`
  color: #ffffff;
  font-size: 2.4rem;
  font-weight: normal;
  text-align: center;
  margin-top: 1.2rem;

  @media (max-width: 490px) {
    width: 136px;
    margin-left: 2rem;
    font-size: 1.7rem;
    margin-top: 0.6rem;
  }
`

export const ContainerContent = styled.div`
  margin-top: 6rem;
`

export const ContentForm = styled.div<IErrorInput>`
  display: flex;

  @media (max-width: 1333px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 490px) {
    margin-left: 8rem;
  }

  form {
    p {
      font-size: 2.4rem;
      font-weight: bold;
      color: #f58f4b;

      margin-bottom: 0.8rem;
    }

    input {
      width: 420px;
      height: 45px;

      background: #ffffff;
      border: 1px solid #000000;
      box-shadow: -2px 4px 4px 1px rgba(0, 0, 0, 0.8);
      border-radius: 8px;
      margin-bottom: 3.6rem;
      padding: 1.2rem 0 1.2rem 2.1rem;
      font-size: 1.8rem;
      font-weight: normal;
    }

    & label #FirstName {
      ${props => props.errorFirstName && css`
        border: 4px solid #c53030;
      `}
    }

    & label #LastName {
      ${props => props.errorLastName && css`
        border: 4px solid #c53030;
      `}
    }

    & label #Phone {
      ${props => props.errorPhone && css`
        border: 4px solid #c53030;
      `}
    }

    button {
      display: block;
      width: 210px;
      padding: 1.8rem;
      background: #b66e1e;
      color: #000000;
      font-size: 1.8rem;
      font-weight: 600;
      margin-left: 10.4rem;
      cursor: pointer;
      border: 1px solid #000000;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
      transition: opacity 0.3s;

      &:hover {
        filter: opacity(0.9);
      }
    }

    @media (max-width: 490px) {
      p {
        font-size: 2.2rem;
        margin-bottom: 0.6rem;
      }

      input {
        width: 350px;
        height: 40px;
        margin-bottom: 3.2rem;
        margin-right: 8rem;
        padding: 0.8rem 0 0.8rem 1.8rem;
        font-size: 1.6rem;
      }

      button {
        width: 180px;
        padding: 1.6rem;
        font-size: 1.6rem;
        margin-left: 9.5rem;
      }
    }
  }
`

export const FlipeContainer = styled.div`
  width: 776px;
  height: 392px;
  margin-left: 8rem;

  @media (max-width: 1333px) {
    margin-top: 4rem;
    margin-left: 0;
  }

  @media (max-width: 840px) {
    width: 410px;
    height: 236px;
  }

  @media (max-width: 490px) {
    width: 350px;
    height: 236px;
    margin-right: 8rem;
  }
`

export const FlipeContainerSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 165px;
  height: 392px;
  background: #3e44db;
  border-radius: 20px;

  svg {
    color: white;
  }

  @media (max-width: 840px) {
    width: 82.5px;
    height: 236px;
  }
`

export const Flipper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.9s;
  transform-style: preserve-3d;
`

export const CardFront = styled.div`
  background: #e1e1e1;
  border-radius: 20px;
`

export const CardBack = styled.div`
  background: #e1e1e1;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  svg {
    color: #000;
  }

  p {
    font-size: 1.8rem;
    font-weight: bold;
  }
`

export const TextContainer = styled.div`
  display: block;
`

export const CardText = styled.p`
  color: #47263b;
  font-size: 2.4rem;
  font-weight: bold;
  margin: 3.9rem 0 1.2rem 1.6rem;

  @media (max-width: 840px) {
    font-size: 1.6rem;
    margin: 2.2rem 0 1rem 1.2rem;
  }
`

export const CardTextInput = styled.input`
  background: #e1e1e1;
  padding: 1.2rem;
  margin-left: 1.6rem;
  font-size: 1.8rem;
  font-weight: normal;
  color: #000000;
  border: none;

  @media (max-width: 840px) {
    padding: 0.8rem;
    margin-left: 1.2rem;
    font-size: 1.4rem;
  }
`

export const TableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 13.6rem;

  table > thead > tr > th {
    color: #ffffff;
    padding: 1.2rem 16rem;
    font-size: 2.2rem;
    font-weight: bold;
    background: #47263b;
  }

  td {
    color: #ffffff;
    text-align: center;
    font-size: 2.4rem;
    font-weight: bold;
    padding: 1.2rem;
  }

  @media (max-width: 1333px) {
    table > thead > tr > th {
      padding: 1rem 12rem;
      font-size: 1.8rem;
    }

    td {
      font-size: 2.2rem;
      padding: 1rem;
    }
  }

  @media (max-width: 840px) {
    table > thead > tr > th {
      padding: 0.6rem 9rem;
      font-size: 1.4rem;
    }

    td {
      font-size: 2rem;
      padding: 0.9rem;
    } 
  }

  @media (max-width: 560px) {
    table > thead > tr > th {
      padding: 0.4rem 7rem;
      font-size: 1.2rem;
    }

    td {
      font-size: 1.8rem;
      padding: 0.8rem;
    } 
  }

  @media (max-width: 490px) {
    padding-left: 6rem;

    table {
      margin-left: -6.5rem;
    }

    table > thead > tr > th {
      padding: 0.3rem 5.5rem;
      font-size: 1rem;
      /* margin-left: -8rem; */
    }

    td {
      font-size: 1.6rem;
      padding: 0.6rem;
    } 
  }
`

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin: 0.4rem 0;
`
