import React from 'react'

import { Container } from './styles'

interface ITootilpProps {
  title: string
  className?: string
}

const Tooltip: React.FC<ITootilpProps> = ({ title, className, children }) => {
  return (
    <Container title={title} className={className}>
      {children}
      <span>{title}</span>
    </Container>
  )
}

export default Tooltip
