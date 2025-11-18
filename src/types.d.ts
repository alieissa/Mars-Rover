type Coords = {
  x: number,
  y: number,
}

type Rover = {
  id: string,
  fleet: string,
  direction: 'N' | 'E' | 'S' | 'W',
  colour?: string,
} & Coords

type State = {
  fleet: string,
  newRover?:
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error', error: unknown }
  | { data: Rover, status: 'success' },
  rovers:
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error', error: unknown }
  | { data: Record<string, Rover>, error: null, status: 'success' },
}

type Action =
  | { action: 'FetchRovers' }
  | { action: 'FetchedRoversSuccess'; payload: { data: Rover[]; }; }
  | { action: 'FetchedRoversFail'; payload: { error: unknown; } }
  | { action: 'CreateRover' }
  | { action: 'CreateRoverSuccess'; payload: { data: Rover } }
  | { action: 'CreateRoverFail'; payload: { error: unknown } }
  | { action: 'RoverCommand'; payload: any }