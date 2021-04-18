import styled, { css } from 'styled-components'
import Tooltip from './Tooltip'

interface IContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<IContainerProps>`
  svg {
    position: relative;
    top: 34px;
    left: 8px;
    color: #000;
  }

  ${props =>
    props.isErrored &&
    css`
      svg {
        color #c53030;
      }

      input {
        border: 2px solid #c53030;
        box-shadow: -2px 4px 4px 1px rgba(0, 0, 0, 0.8);
        border-radius: 8px;
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      svg {
        color: #b66e1e;
      }

      input {
        border: 2px solid #b66e1e;
        box-shadow: -2px 4px 4px 1px rgba(0, 0, 0, 0.8);
        border-radius: 8px;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      svg {
        color: #b66e1e;
      }
    `}

  @media (max-width: 1333px) {
    svg {
      position: relative;
      top: 6px;
      left: 28px;
      color: #000;
    }
  }

  @media (max-width: 700px) {
    svg {
      position: relative;
      top: 34px;
      left: 8px;
      color: #000;
    }
  }

  @media (max-width: 380px) {
    svg {
      position: relative;
      top: 26px;
      left: 8px;
      color: #000;
    }
  }
`

export const Input = styled.input`
  width: 420px;
  height: 45px;

  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: -2px 4px 4px 1px rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  margin-bottom: 3.6rem;
  padding: 1.2rem 0 1.2rem 3.8rem;
  font-size: 1.8rem;
  font-weight: normal;

  @media (max-width: 490px) {
    width: 350px;
    height: 40px;
    margin-bottom: 3.2rem;
    margin-right: 8rem;
    padding: 0.8rem 0 0.8rem 4.2rem;
    font-size: 1.6rem;
  }

  @media (max-width: 380px) {
    width: 280px;
    height: 28px;
    margin-bottom: 2.4rem;
    margin-right: 7.4rem;
    padding: 0.4rem 0 0.4rem 4.2rem;
    font-size: 1.2rem;
  }
`

export const Error = styled(Tooltip)`
  span {
    color: #fff;
    background: #c53030;

    &::before {
      content: '';
      border-color: #c53030 transparent;
    }
  }
`
