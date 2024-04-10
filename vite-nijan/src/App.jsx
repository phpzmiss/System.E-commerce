import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CButtonGroup, CButton } from '@coreui/react';
import AppHeader from './components/header/AppHeader';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader></AppHeader>
      <CButtonGroup role="group" aria-label="Basic example">
        <CButton color="primary">Left</CButton>
        <CButton color="primary">Middle</CButton>
        <CButton color="primary">Right</CButton>
      </CButtonGroup>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
