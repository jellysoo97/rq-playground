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

export const usePokemon = ({ id, options }: Props) =>
  useQuery(['pokemon', id], () => getPokemonById(id), { ...options })
