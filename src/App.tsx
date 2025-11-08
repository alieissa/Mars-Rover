import './App.css'
import Rovers from './Rovers'

function App() {
  return (
    <div className='flex gap-4'>
      <div className='flex flex-col gap-0.5'>
        {
          [...Array(20)].map((_, index) => {
            return <div key={`y-${index}`} className="flex gap-0.5">
              {[...Array(20)].map((_, index) => {
                return <div key={`x-${index}`} className='bg-amber-200 flex gap-1 w-5 h-5' />
              })}
            </div>
          })
        }
      </div>
      <Rovers />
    </div>
  )
}

export default App
