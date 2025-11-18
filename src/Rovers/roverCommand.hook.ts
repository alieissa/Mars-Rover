import AppContext from '@/app.context'
import axios from 'axios'
import { useContext } from 'react'

const useRoverCommand = (id: string) => {
  const { dispatch } = useContext(AppContext)

  const commandRover = (command: string) => {
    return axios.get(id, { params: { command } })
      .then(result => {
        dispatch?.({ action: 'RoverCommand', payload: { ...result.data } })
        console.log('data', result.data)
      })
      .catch(error => console.log('error', error))
      .finally(() => console.log('all done'))
  }

  return { commandRover }
}

export default useRoverCommand