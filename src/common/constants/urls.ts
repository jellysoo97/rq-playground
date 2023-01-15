const home = {
  base: '/',
} as const

const version = {
  destructuring: '/version/destructuring',
  staleZero: '/version/stale-zero',
  staleInfinity: '/version/stale-infinity',
  infiniteScroll: '/version/infinite-scroll',
  pagination: '/version/pagination',
  initialData: '/version/initial-data',
  placeholderData: '/version/placeholder-data',
}

const search = {
  base: '/search',
} as const

const pokemon = {
  base: '/pokemon',
} as const

export const urls = {
  home,
  version,
  search,
  pokemon,
} as const
