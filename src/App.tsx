import { defaultWindows } from "./data/windows";
import Window from "./components/window";
import { useState } from 'react'

function App() {
const [windows, setWindows] = useState(defaultWindows)
const closeWindow = (id: string) => {
  setWindows(prev =>
    prev.map(window =>
      window.id === id
        ? { ...window, isOpen: false }
        : window
    )
  );
};

  return (
    <body style={{ backgroundColor: '#008080' }}>
      {windows
        .filter(window => window.isOpen)
        .map(window => (
        <Window
          key={window.id}
          window={window}
          onClose={() => closeWindow(window.id)}>
            <p>some stuff</p>
        </Window>
      ))}
    </body>
  )
}

export default App