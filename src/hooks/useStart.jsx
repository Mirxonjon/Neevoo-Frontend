import { useContext } from 'react'
import { State } from '../content/start'

function useStart () {
  const {
    token,
    setToken,
    headerModal,
    setHeaderModal,
    headerSearch,
    setHeaderSearch,
    count,
    setCount
  } = useContext(State)

  return {
    token,
    setToken,
    headerModal,
    setHeaderModal,
    headerSearch,
    setHeaderSearch,
    count,
    setCount
  }
}

export default useStart
