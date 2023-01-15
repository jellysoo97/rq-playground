import { QueryStatus } from '@tanstack/react-query'

type StateType = {
  isLoading: boolean[]
  isFetching: boolean[]
  status: QueryStatus[]
  data: string[]
}

const DestructuringPage = () => {
  return <div>destructuring</div>
}

export default DestructuringPage
