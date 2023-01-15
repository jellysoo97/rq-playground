import { PokemonResponse } from '@src/common/types/pokemon'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { HookOptions } from './useAllPokemons'

type Props = {
  id: string
  options?: HookOptions
}

const getPokemonById = async (id: string): Promise<PokemonResponse> => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  return data
}

export const useDestructuredPokemon = ({ id, options }: Props) => {
  const { isLoading, isFetching, isSuccess, isError, data } = useQuery(
    ['pokemon', id],
    () => getPokemonById(id),
    { ...options }
  )

  return {
    isPokemonSuccess: isSuccess,
    isPokemonError: isError,
    isPokemonLoading: isLoading,
    isPokemonFetching: isFetching,
    pokemonDetail: data,
  }
}
