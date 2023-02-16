import { SomeComponent, StyledComponent } from '@frontend/components'
import { ReactElement, useState } from 'react'
import './App.css'


function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => { setCount((count) => count + 1); }}>
          count is {count}
        </button>
        <StyledComponent>Hello</StyledComponent>
        <SomeComponent>Edit <code>src/App.tsx</code> and save to test HMR</SomeComponent>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
