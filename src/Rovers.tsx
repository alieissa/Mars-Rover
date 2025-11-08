import { Circle } from "lucide-react"
import NewRover from "./NewRover"

const Rovers = () => {
  return <div className="flex flex-wrap h-fit gap-1 max-w-34">
    <div>
      <NewRover onCreate={() => console.log('new rover')} />
    </div>
    {[...Array(10)].map((_, index) => {
      return <Circle color="#fee685" fill="#fee685" width="20" height="20" onClick={() => console.log('test', index)} />
    })}
  </div>
}

export default Rovers