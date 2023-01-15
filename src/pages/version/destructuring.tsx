import styled from '@emotion/styled'
import BorderContainer from '@src/common/components/border-container/BorderContainer'
import Container from '@src/common/components/container/Container'
import Header from '@src/common/components/header/Header'
import { useDestructuredPokemon } from '@src/hooks/useDestructuredPokemon'
import { usePokemon } from '@src/hooks/usePokemon'
import Image from 'next/image'

const DestructuringPage = () => {
  const unDestructuredData = usePokemon({ id: String(100) })
  const { isPokemonLoading, isPokemonError, pokemonDetail } =
    useDestructuredPokemon({
      id: String(101),
    })

  if (isPokemonLoading || isPokemonError) {
    return <p>destructured data is loading...</p>
  }

  if (unDestructuredData.isLoading || unDestructuredData.isError) {
    return <p>undestructured data is loading...</p>
  }

  return (
    <Container>
      <BorderContainer width="fit-content">
        <Header title="Destructuring" hasGoBackIcon hasGoHomeIcon={false} />
        <ItalicParagraph>
          once you split apart, it can't keep track of the relationship any more
        </ItalicParagraph>
        <Wrapper>
          <BorderContainer width="fit-content" height="100%">
            <BoldParagraph>Undestructured Data</BoldParagraph>
            <p>type of data : {typeof unDestructuredData.data}</p>
            <Image
              src={unDestructuredData.data.sprites.front_default}
              width={250}
              height={250}
              alt={'no image'}
            />
          </BorderContainer>
          <BorderContainer width="fit-content" height="100%">
            <BoldParagraph>Destructured Data</BoldParagraph>
            <p>type of data : {typeof pokemonDetail} | undefined</p>
            {pokemonDetail && (
              <LabelWrapper>
                <p>data&&</p>
                <Image
                  src={pokemonDetail.sprites.front_default}
                  width={200}
                  height={200}
                  alt={'no image'}
                />
              </LabelWrapper>
            )}
          </BorderContainer>
        </Wrapper>
      </BorderContainer>
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  column-gap: 30px;
  padding: 15px 0px;
`

const ItalicParagraph = styled.p`
  font-style: italic;
  font-size: 18px;
  font-weight: 500;
`

const BoldParagraph = styled.p`
  font-size: 18px;
  font-weight: 600;
`

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 40px;
`

export default DestructuringPage
