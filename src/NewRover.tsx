import type { FormEvent } from "react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover"
import { Label } from "./components/ui/label"

type Props = {
  onCreate: (x: number, y: number) => void
}
const NewRover = ({ onCreate }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const x = Number(formData.get('x'))
    const y = Number(formData.get('y'))

    onCreate(x, y)
  }

  return <Popover>
    <PopoverTrigger asChild className="mb-4">
      <Button variant="outline">New Rover</Button>
    </PopoverTrigger>
    <PopoverContent side="bottom" align="end" className="w-80">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <h4 className="leading-none font-medium">Rover</h4>
          <p className="text-muted-foreground text-sm">
            Set the position of the new rover.
          </p>
        </div>
        <div className="grid gap-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="x">X:</Label>
            <Input
              id="x"
              type="number"
              name="x"
              defaultValue={1}
              className="col-span-3 h-8"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="y">Y:</Label>
            <Input
              id="y"
              type="number"
              name="y"
              defaultValue={1}
              className="col-span-3 h-8"
            />
          </div>
        </div>
        <Button variant="default" className="text-inherit">Create</Button>
      </form>
    </PopoverContent>
  </Popover>
}

export default NewRover