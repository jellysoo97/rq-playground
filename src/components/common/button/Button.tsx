import styled from '@emotion/styled'
import React from 'react'

type Props = {
  children: string
}

const Button = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>
}

const StyledButton = styled.button`
  padding: 15px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border: 1px solid black;
  border-radius: 10px;
`

export default Button
