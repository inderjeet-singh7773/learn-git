
export default function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed w-full flex justify-between items-center px-8 py-4 bg-white dark:bg-slate-800 shadow z-50">
      <h1 className="font-bold text-xl">Inderjeet.dev</h1>
      <div className="flex gap-6 items-center">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="/Resume.pdf" download className="px-3 py-1 bg-blue-600 text-white rounded">Resume</a>
        <button onClick={() => setDark(!dark)}>
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}
