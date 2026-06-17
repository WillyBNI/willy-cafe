import { defaultWindows } from "./data/windows";
import Window from "./components/window";
import { useState } from 'react'

function App() {
const [windows, setWindows] = useState(defaultWindows);

  return (
    <body style={{ backgroundColor: '#008080' }}>
          {windows.map((window) => (
            <Window
              key={window.id}
              window={window}
            >
              <p>huh huh huh woah</p>
            </Window>
          ))}
    </body>
  )
}

export default App