import { useState } from 'react'
import ilmLogo from './assets/day-cloud-rainbow-icon.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.ilmateenistus.ee/ilm/prognoosid/4-oopaeva-prognoos/" target="_blank">
          <img src={ilmLogo} className="logo ilm" alt="Ilm logo" />
        </a>
      </div>
      <h1>Ilm Eestis praegu</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Kliki, siia kui sul on torm. Tormiseid kasutajaid: {count}
        </button>
        <p>
          Kogu info pärineb riiklikust ilmateenistusest.
        </p>
      </div>
    </>
  )
}

export default App
