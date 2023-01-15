import styled from '@emotion/styled'
import { urls } from '@src/common/constants/urls'
import BorderContainer from '@src/components/common/border-container/BorderContainer'
import Button from '@src/components/common/button/Button'
import Container from '@src/components/common/container/Container'
import Header from '@src/components/common/header/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <BorderContainer>
        <Header title={'Pokemon Query'} hasGoHomeIcon={false} />
        <Desc>Choose a version</Desc>
        <ButtonWrapper>
          <Link href={urls.version.staleZero}>
            <Button>Staletime: 0</Button>
          </Link>
          <Link href={urls.version.staleInfinity}>
            <Button>Staletime: Infinity</Button>
          </Link>
          <Link href={urls.version.pagination}>
            <Button>Pagination</Button>
          </Link>
          <Link href={urls.version.infiniteScroll}>
            <Button>Infinite Scroll</Button>
          </Link>
          <Link href={urls.version.initialData}>
            <Button>Set InitialData</Button>
          </Link>
          <Link href={urls.version.placeholderData}>
            <Button>Set PlaceholderData</Button>
          </Link>
          <Link href={urls.search.base}>
            <Button>Pokemon search</Button>
          </Link>
        </ButtonWrapper>
      </BorderContainer>
    </Container>
  )
}

const Desc = styled.h2`
  font-weight: 700;
  padding: 30px 0px;
`

const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  row-gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
`
