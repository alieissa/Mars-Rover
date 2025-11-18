import AppContext from "@/app.context"
import api from "../api"

import { useContext, useEffect } from "react"

const useRovers = () => {
  const { state, dispatch } = useContext(AppContext)

  console.log('state in useRovers', state)
  useEffect(() => {
    if (state.rovers.status === 'success') return

    dispatch?.({ action: 'FetchRovers' })

    const dispatchSucess = (result: { data: any }) => {
      dispatch?.({ action: 'FetchedRoversSuccess', payload: { data: result.data } })
    }
    const dispatchError = (error: any) => {
      dispatch?.({ action: 'FetchedRoversFail', payload: { error: error } })
    }

    api.get(`${state?.fleet}/`).then(dispatchSucess).catch(dispatchError)
  }, [state.rovers.status])


  return { rovers: state?.rovers }
}

export { useRovers }