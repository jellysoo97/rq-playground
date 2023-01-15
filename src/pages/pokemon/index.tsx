import styled from '@emotion/styled'
import BorderContainer from '@src/common/components/border-container/BorderContainer'
import Container from '@src/common/components/container/Container'
import Header from '@src/common/components/header/Header'
import { usePokemon } from '@src/hooks/usePokemon'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const PokemonDetailPage = () => {
  const router = useRouter()
  const { query } = router

  const pokemon = usePokemon({
    id: query.id as string,
    options: { enabled: !!query.id },
  })

  if (!pokemon.isSuccess) {
    return null
  }

  return (
    <Container>
      <BorderContainer>
        <Header
          title={`${pokemon.data.name.toLocaleUpperCase()}`}
          hasGoBackIcon
          hasGoHomeIcon={false}
        />
        <Wrapper>
          <Image
            src={pokemon.data.sprites.front_default}
            width={200}
            height={200}
            alt="No image"
          />
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

export default PokemonDetailPage
