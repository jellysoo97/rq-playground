import styled from '@emotion/styled'
import BorderContainer from '@src/components/common/border-container/BorderContainer'
import Container from '@src/components/common/container/Container'
import Header from '@src/components/common/header/Header'
import { usePokemon } from '@src/hooks/usePokemon'

const StaleTimeInfinityPage = () => {
  const firstPokemon = usePokemon({
    id: String(1),
    options: { staleTime: 1000 * 5 },
  })
  const secondPokemon = usePokemon({ id: String(2), options: { staleTime: 0 } })
  const thirdPokemon = usePokemon({
    id: String(3),
    options: { staleTime: Infinity },
  })
  const fourthPokemon = usePokemon({
    id: String(4),
  })

  return (
    <Container>
      <BorderContainer width="700px" height="fit-content">
        <Header title={'React Query Status'} />
        <Wrapper>
          <BorderContainer width="600px" height="100px">
            <p>first pokemon stale time : 5 seconds</p>
            <p>second pokemon will render if first pokemon data is stale</p>
            <BoldParagraph>
              first pokemon :{' '}
              {!firstPokemon.data ? 'still loading...' : firstPokemon.data.name}
            </BoldParagraph>
          </BorderContainer>
          <BorderContainer width="600px" height="100px">
            <p>second pokemon stale time : 0 seconds</p>
            <p>third pokemon will render if second pokemon data is stale</p>
            <BoldParagraph>
              second pokemon :{' '}
              {!secondPokemon.data
                ? 'still loading...'
                : firstPokemon.isStale
                ? secondPokemon.data.name
                : 'first pokemon data is still fresh'}
            </BoldParagraph>
          </BorderContainer>
          <BorderContainer width="600px" height="100px">
            <p>third pokemon stale time : Infinity</p>
            <p>fourth pokemon will render if third pokemon data is stale</p>
            <BoldParagraph>
              third pokemon :{' '}
              {!thirdPokemon.data
                ? 'still loading...'
                : secondPokemon.isStale
                ? thirdPokemon.data.name
                : 'second pokemon data is still fresh'}
            </BoldParagraph>
          </BorderContainer>
          <BorderContainer width="600px" height="100px">
            <BoldParagraph>
              fourth pokemon :{' '}
              {!fourthPokemon.data
                ? 'still loading...'
                : thirdPokemon.isStale
                ? fourthPokemon.data.name
                : 'third pokemon data is still fresh'}
            </BoldParagraph>
          </BorderContainer>
        </Wrapper>
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

const BoldParagraph = styled.p`
  font-size: 18px;
  font-weight: 600;
`

export default StaleTimeInfinityPage
