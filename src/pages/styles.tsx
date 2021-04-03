/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'

interface IErrorInput {
  errorFirstName: boolean
  errorLastName: boolean
  errorPhone: boolean
}

export const Container = styled.div``

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 91px;
    height: 63px;
    color: #b66e1e;
  }
`

export const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #b66e1e;
  align-self: center;
`
export const HeaderDescription = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  margin-top: 12px;
`

export const ContainerContent = styled.div`
  margin-top: 60px;
`

export const ContentForm = styled.div<IErrorInput>`
  display: flex;
  form {
    p {
      font-size: 24px;
      font-weight: bold;
      color: #f58f4b;

      margin-bottom: 8px;
    }

    input {
      width: 420px;
      height: 45px;

      background: #ffffff;
      border: 1px solid #000000;
      box-shadow: -2px 4px 4px 1px rgba(0, 0, 0, 0.8);
      border-radius: 8px;
      margin-bottom: 36px;
      padding: 12px 0 12px 21px;
      font-size: 18px;
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
      height: 43;
      padding: 18px;
      background: #b66e1e;
      color: #000000;
      font-size: 18px;
      font-weight: 600;
      margin-left: 104px;
      cursor: pointer;
      border: 1px solid #000000;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
      transition: opacity 0.3s;

      &:hover {
        filter: opacity(0.9);
      }
    }
  }
`

export const FlipeContainer = styled.div`
  width: 776px;
  height: 392px;
  margin-left: 80px;
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
    font-size: 18px;
    font-weight: bold;
  }
`

export const TextContainer = styled.div`
  display: block;
`

export const CardText = styled.p`
  color: #47263b;
  font-size: 24px;
  font-weight: bold;
  margin: 39px 0 12px 16px;
`

export const CardTextInput = styled.input`
  background: #e1e1e1;
  padding: 12px;
  margin-left: 16px;
  font-size: 18px;
  font-weight: normal;
  color: #000000;
  border: none;
`

export const TableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 136px;

  table > thead > tr > th {
    color: #ffffff;
    padding: 12px 160px;
    font-size: 22px;
    font-weight: bold;
    background: #47263b;
  }

  td {
    color: #ffffff;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    padding: 12px;
  }
`

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin: 4px 0;
`
