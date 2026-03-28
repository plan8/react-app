import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>🚀 React App</h1>
      <p>Deployed to GitHub Pages from plan8</p>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Built with Vite + React
      </p>
    </div>
  )
}

export default App