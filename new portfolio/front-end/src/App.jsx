
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="bg-white dark:bg-slate-900 text-black dark:text-white min-h-screen">
        <Navbar dark={dark} setDark={setDark} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
