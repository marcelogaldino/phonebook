import styled, { css } from 'styled-components'

interface IProps {
  title: string
}

export const Container = styled.div<IProps>`
  position: relative;

  span {
    width: 190px;
    background: #b66e1e;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    opacity: 0;
    transition: opacity 0.4ms;
    visibility: hidden;

    position: absolute;
    top: calc(-100px - 8px);
    left: -50%;
    transform: translateX(74%);

    &::before {
      content: '';

      border-style: solid;
      border-color: #b66e1e transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    @media (max-width: 1333px) {
      left: -50%;
      transform: translateX(86%);
    }

    @media (max-width: 700px) {
      left: -50%;
      transform: translateX(70%);
    }

    @media (max-width: 570px) {
      width: 140px;
      font-size: 10px;
      font-weight: 600;
      left: -50%;
      transform: translateX(114%);
    }

    @media (max-width: 490px) {
      width: 100px;
      top: calc(-98px - 8px);
      left: -50%;
      transform: translateX(178%);
    }

    @media (max-width: 381px) {
      width: 100px;
      top: calc(-82px - 8px);
      left: -50%;
      transform: translateX(136%);
    }
  }

  ${props =>
    !!props.title &&
    css`
      span {
        opacity: 1;
        visibility: visible;
      }
    `}
`
