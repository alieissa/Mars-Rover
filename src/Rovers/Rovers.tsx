import { Circle } from "lucide-react"
import NewRover from "./NewRover"
import RoverCommand from "./RoverCommand"
import useNewRover from './newRover.hook'
import { useRovers } from "./rovers.hook"

const Rovers = () => {
  const { rovers } = useRovers()
  const { createNewRover } = useNewRover()

  const handleCreateNewRover = (coords: Coords) => {
    createNewRover(coords)
  }

  switch (rovers.status) {
    case 'idle':
    case 'loading':
      return <div>Loading rovers...</div>
    case 'error':
      return <div>Error loading rovers: {String(rovers.error)}</div>
    case 'success':
      return <div className="flex flex-wrap h-fit gap-1 max-w-34">
        <div>
          <NewRover onCreate={handleCreateNewRover} />
        </div>
        {Object.values(rovers.data).map((_, index) => {
          return <RoverCommand onCommand={(command) => console.log(command)}>
            <Circle color="#fee685" fill="#fee685" width="20" height="20" onClick={() => console.log('test', index)} />
          </RoverCommand>
        })}
      </div>
  }

}

export default Rovers