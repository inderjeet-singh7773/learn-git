
export default function Projects() {
  const projects = [
    { title: 'VSR Taxi', desc: 'Cab booking UI project' },
    { title: 'Todo App', desc: 'Task manager with localStorage' },
    { title: 'Portfolio', desc: 'Personal responsive portfolio' }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-slate-800 px-6">
      <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p,i) => (
          <div key={i} className="p-6 bg-white dark:bg-slate-700 rounded-xl shadow">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
