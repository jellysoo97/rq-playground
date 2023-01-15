export type AllPokemonsResult = {
  name: string
  url: string
}

export type SpritesType = {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}

export type AllPokemonsResponse = {
  count: number
  next: string
  previous: boolean
  results: AllPokemonsResult[]
}

export type PokemonResponse = {
  id: number
  name: string
  weight: number
  height: number
  sprites: SpritesType
}
