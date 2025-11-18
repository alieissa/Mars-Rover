import { getFleet } from "./utils"
import keyBy from "lodash/keyBy"

export const initialState: State = {
  fleet: getFleet(),
  rovers: { status: 'idle' },
  newRover: { status: 'idle' },
}
// TODO Use immer or similar to simplify reducer logic
const reducer = (state: State, action: Action): State => {
  switch (action.action) {
    case 'FetchRovers':
      return { ...state, rovers: { status: 'loading', } }
    case 'FetchedRoversSuccess':
      return { ...state, rovers: { data: keyBy(action.payload.data || [], 'id'), status: 'success', error: null } }
    case 'FetchedRoversFail':
      return { ...state, rovers: { error: action.payload.error, status: 'error' } }
    case 'CreateRover':
      return { ...state, newRover: { status: 'loading' } }
    case 'CreateRoverSuccess':
      const rovers = state.rovers.status === 'success' ? state.rovers.data : {}
      return { ...state, newRover: { data: action.payload.data, status: 'success' }, rovers: { error: null, status: 'success', data: { ...rovers, [action.payload.data.id]: action.payload.data } } }
    case 'CreateRoverFail':
      return { ...state, newRover: { error: action.payload.error, status: 'error' } }
    // case 'RoverCommand':
    //   const updatedRovers = state.rovers.map(rover =>
    //     rover.id === action.payload.id ? { ...rover, ...action.payload } : rover
    //   )
    //   return { ...state, rovers: updatedRovers }
    default:
      return state
  }
}

export default reducer