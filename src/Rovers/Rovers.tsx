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

  const renderRover = (rover: RoverInfo) => {
    const fill = rover.status === 'active' ? '#26b585' : '#ff0000'
    const color = rover.status === 'active' ? '#26b585' : '#770000'
    return <Circle key={rover.id} color={color} fill={fill} width="20" height="20" />
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
        {Object.values(rovers.data).map((rover) => {
          return <RoverCommand id={rover.id} onCommand={(command) => console.log(command)}>
            {renderRover(rover)}
          </RoverCommand>
        })}
      </div>
  }

}

export default Rovers