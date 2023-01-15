import styled from '@emotion/styled'
import { urls } from '@src/common/constants/urls'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  title: string
  hasGoHomeIcon?: boolean
  hasGoBackIcon?: boolean
}

const Header = ({ title, hasGoHomeIcon = true, hasGoBackIcon }: Props) => {
  const router = useRouter()

  return (
    <Wrapper>
      {hasGoHomeIcon && (
        <Link href={urls.home.base}>
          <Arrow>&lt;Home</Arrow>
        </Link>
      )}
      {hasGoBackIcon && (
        <BackWrapper onClick={() => router.back()}>
          <Arrow>&lt;Back</Arrow>
        </BackWrapper>
      )}
      <Title>{title}</Title>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  column-gap: 10px;
  padding: 50px 0px;
`

const Arrow = styled.span`
  font-weight: 700;
  font-size: x-large;
`

const Title = styled.span`
  font-weight: 700;
  font-size: x-large;
  display: flex;
  justify-content: center;
  flex: 1;
`

const BackWrapper = styled.div`
  cursor: pointer;
`

export default Header
