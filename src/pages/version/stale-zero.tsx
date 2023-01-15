import styled from '@emotion/styled'
import { urls } from '@src/common/constants/urls'
import BorderContainer from '@src/common/components/border-container/BorderContainer'
import Button from '@src/common/components/button/Button'
import Container from '@src/common/components/container/Container'
import Header from '@src/common/components/header/Header'
import { useAllPokemons } from '@src/hooks/useAllPokemons'
import { QueryStatus } from '@tanstack/react-query'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type StateType = {
  isLoading: boolean[]
  isFetching: boolean[]
  status: QueryStatus[]
  data: string[]
}

const StaleTimeZeroPage = () => {
  const pokemons = useAllPokemons()
  const [refetchingCount, setRefetchingCount] = useState<number>(0)
  const [state, setState] = useState<StateType>({
    isLoading: [],
    isFetching: [],
    status: [],
    data: [],
  })

  useEffect(() => {
    setState({
      ...state,
      isLoading: state.isLoading.concat([pokemons.isLoading]),
      isFetching: state.isFetching.concat([pokemons.isFetching]),
      status: state.status.concat([pokemons.status]),
      data: state.data.concat([typeof pokemons.data]),
    })
    setRefetchingCount(refetchingCount + 1)
  }, [pokemons.data])

  const addArrow = (array: unknown[]) => {
    return array.join('->')
  }

  const getIdFromUrl = (url: string) => {
    return url.split('/')[6]
  }

  return (
    <Container>
      <BorderContainer width="700px" height="fit-content">
        <Header title={'React Query Status'} />
        <Wrapper>
          <p>refetching count: {refetchingCount}</p>
          <p>isLoading status: {addArrow(state.isLoading)}</p>
          <p>isFetching status: {addArrow(state.isFetching)}</p>
          <p>query status: {addArrow(state.status)}</p>
          <p>data status: {addArrow(state.data)}</p>
        </Wrapper>
        <ResultWrapper>
          {pokemons.data &&
            pokemons.data.results.map((result) => (
              <Link
                href={{
                  pathname: urls.pokemon.base,
                  query: { id: getIdFromUrl(result.url) },
                }}
              >
                <Button>{result.name}</Button>
              </Link>
            ))}
        </ResultWrapper>
      </BorderContainer>
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 15px 0px;
`

const ResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 10px;
  padding: 15px 0px;
`

export default StaleTimeZeroPage
