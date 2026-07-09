import { defaultWindows } from "./data/windows";
import WindowFrame from "./components/window";
import { useState } from 'react'

function App() {
const [windows, setWindows] = useState(defaultWindows)
const closeWindow = (id: string) => {
  setWindows(prev =>
    prev.map(w =>
      w.id === id
        ? { ...w, isOpen: false }
        : w
    )
  );
};
const moveWindow = (
  id: string,
  x: number,
  y: number
) => {
  setWindows(prev =>
    prev.map(w =>
      w.id === id
        ? {
            ...w,
            x,
            y
          }
        : w
    )
  )
};
const resizeWindow = (
  id: string,
  x: number,
  y: number,
  width: number,
  height: number
) => {
  setWindows(prev =>
    prev.map(w =>
      w.id === id
        ? {
            ...w,
            x,
            y,
            width,
            height
          }
        : w
    )
  )
}
const toggleMaximize  = (id: string) => {
    setWindows(prev =>
      prev.map(w => {
       if (w.id !== id) return w;

       if (w.isMaximized) {
          return {
          ...w,
          isMaximized: false,
          x: w.restoreRect.x,
          y: w.restoreRect.y,
          width: w.restoreRect.width,
          height: w.restoreRect.height
        };
      };
      return {
        ...w,
        isMaximized: true,
        restoreRect: {
          x: w.x,
          y: w.y,
          width: w.width,
          height: w.height
        },
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
      })
    );
  }

  return (
    <body style={{ backgroundColor: '#008080' }}>
      {windows
        .filter(window => window.isOpen)
        .map(window => (
        <WindowFrame
          key={window.id}
          window={window}
          onClose={() => closeWindow(window.id)}
          toggleMaximize={() => toggleMaximize(window.id)}
          onMove={(x, y) =>
            moveWindow(window.id, x, y)
          }
          onResize={(x, y, width, height) =>
            resizeWindow(
                window.id,
                x,
                y,
                width,
                height
              )
          }
        >
        </WindowFrame>
      ))}
    </body>
  )
}

export default App