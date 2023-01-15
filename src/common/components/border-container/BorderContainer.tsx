import styled from '@emotion/styled'
import React from 'react'

type Props = {
  width?: string
  height?: string
  children?: React.ReactNode
}

const BorderContainer = ({
  width = '500px',
  height = 'fit-content',
  children,
}: Props) => {
  return (
    <Box width={width} height={height}>
      {children}
    </Box>
  )
}

const Box = styled.div<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export default BorderContainer
