import { useRovers } from "./Rovers/rovers.hook"


const Grid = () => {
  const { rovers } = useRovers()

  const getRover = (x: number, y: number) => {
    // if (x > 5 || y > 5) return
    console.log('Getting rover at', x, y)

    if (rovers.status !== 'success') return undefined

    return Object.values(rovers?.data)?.find((rover) => rover.x === x && rover.y === y)
  }

  return <div className='flex gap-0.5'>
    {
      [...Array(20)].map((_, row) => {
        return <div key={`y-${row}`} className="flex flex-col gap-0.5">
          {[...Array(20)].map((_, col) => {
            const rover = getRover(row, col)
            return <div key={`x-${col}-${row}`} className='bg-amber-200 flex gap-1 w-5 h-5' onClick={() => console.log(row, col)}>
              {!!rover ? <div className="w-5 h-5 bg-red-500 rounded-full" onClick={() => console.log(col, row, rover.id)}></div> : null}
            </div>
          })}
        </div>
      })
    }
  </div>
}

export default Grid