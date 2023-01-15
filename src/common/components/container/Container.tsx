import styled from '@emotion/styled'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <Box>{children}</Box>
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export default Container
