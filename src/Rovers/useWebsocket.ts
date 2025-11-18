import { useEffect } from "react"

const useControlPlaneWebsocket = () => {
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000/ws/rovers/control-plane/')

    ws.onopen = () => {
      console.log('WebSocket connection opened')
    }

    ws.onmessage = (event) => {
      // Parse and handle the incoming message
      console.log('WebSocket message received:', event.data)
    }

    ws.onclose = () => {
      console.log('WebSocket connection closed')
    }

    return () => {
      ws.close()
    }
  }, [])
}

export { useControlPlaneWebsocket }