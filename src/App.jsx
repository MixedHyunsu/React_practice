import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
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
	  <div className="container test">
		<Container count2={count} setCount={setCount} />
	  </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

const Container = () => {
	const [count, setCount] = useState(0)
	return (
		<div>
			<Button count={count} setCount={setCount} />
			<Counter count={count} />
		</div>
	)
}

function Button({ count, setCount }) {
	return (
		<div>
			<button id='button' onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</div>
	)
}

function Counter({count}) {
	return (
		<em>
			<p id='counter'>You clicked {count} times</p> 
		</em>
	)
}
export default App
