import axios from 'axios'
import { useContext } from 'react'
import AppContext from '../app.context'

const useNewRover = () => {
  const { state, dispatch } = useContext(AppContext)

  const createNewRover = (coords: Coords) => {
    const dispatchSucess = (result: { data: Rover }) => {
      dispatch?.({ action: 'CreateRoverSuccess', payload: { data: result.data } })
    }
    const dispatchError = (error: any) => {
      dispatch?.({ action: 'CreateRoverFail', payload: { error } })
    }

    return axios.post(`/rovers/${state.fleet}/`, coords)
      .then((response) => JSON.parse(response.data)).then(dispatchSucess)
      .catch(dispatchError)
  }

  return { createNewRover }
}

export default useNewRover