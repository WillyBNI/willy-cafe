import Window from './components/window'
import { useState } from 'react'

function App() {
  const [showHaha, setShowHaha] = useState(true)
  const [showHihi, setShowHihi] = useState(true)

  return (
    <body style={{ backgroundColor: '#008080' }}>
      
      <div>
      {showHihi && (
        <Window
        minHeight={67}
        minWidth={67}
        title="hihi"
        onClose={() => setShowHihi(false)}>
          <p>Window 1 hihi :D</p>
        </Window>
      )}
      {showHaha && (
        <Window
          title='haha' 
          onClose={() => setShowHaha(false)}>
          <p>Window 2 haha :D</p>
        </Window>
      )}
      </div>
    </body>
  )
}

export default App