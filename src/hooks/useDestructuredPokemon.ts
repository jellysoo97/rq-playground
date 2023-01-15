import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { HookOptions } from './useAllPokemons'

type Props = {
  id: string
  options?: HookOptions
}

const getPokemonById = async (id: string) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  return data
}

export const useDestructuredPokemon = ({ id, options }: Props) => {
  const { isLoading, data } = useQuery(
    ['pokemon', id],
    () => getPokemonById(id),
    { ...options }
  )

  return {
    isPokemonLoading: isLoading,
    pokemonDetail: data,
  }
}
