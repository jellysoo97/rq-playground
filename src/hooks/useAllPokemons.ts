import { AllPokemonsResponse } from '@src/common/types/pokemon'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export type HookOptions = {
  enabled?: boolean
  staleTime?: number
  onSuccess?: () => void
  onError?: () => void
}

type Props = {
  options?: HookOptions
}

const getAllPokemons = async (): Promise<AllPokemonsResponse> => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
  return data
}

export const useAllPokemons = ({ options }: Props = {}) =>
  useQuery(['all-pokemons'], getAllPokemons, { ...options })
