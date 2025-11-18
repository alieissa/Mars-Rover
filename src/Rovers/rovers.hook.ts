import AppContext from "@/app.context"
import axios from "axios"
import { useContext, useEffect } from "react"

const useRovers = () => {
  const { state, dispatch } = useContext(AppContext)
  console.log('state in useRovers', state)
  useEffect(() => {
    dispatch?.({ action: 'FetchRovers' })

    const dispatchSucess = (result: { data: any }) => {
      dispatch?.({ action: 'FetchedRoversSuccess', payload: { data: result.data } })
    }
    const dispatchError = (error: any) => {
      dispatch?.({ action: 'FetchedRoversFail', payload: { error: error } })
    }

    axios.get(`/rovers/${state?.fleet}/`, {
      responseType: 'json'
    }).then(response => JSON.parse(response.data)).then(dispatchSucess).catch(dispatchError)
  }, [])


  return { rovers: state?.rovers }
}

export { useRovers }