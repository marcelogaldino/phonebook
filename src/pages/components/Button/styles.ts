import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
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
  transition: background 0.3s;

  &:hover {
    background: ${shade(0.2, '#b66e1e')};
  }

  @media (max-width: 490px) {
    width: 180px;
    padding: 1.6rem;
    font-size: 1.6rem;
    margin-left: 9.5rem;
  }

  @media (max-width: 380px) {
    width: 140px;
    padding: 1.2rem;
    font-size: 1.2rem;
    margin-left: 9rem;
  }
`
