import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MarkdownPreviewer from './MarkdownPreviewer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MarkdownPreviewer />
      </div>
    </>
  )
}

export default App
