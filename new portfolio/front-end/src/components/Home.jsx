
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1 initial={{opacity:0,y:-40}} animate={{opacity:1,y:0}} className="text-5xl font-bold">
        Inderjeet Singh
      </motion.h1>
      <p className="mt-4 text-gray-500 dark:text-gray-300">
        React Developer | UI/UX Enthusiast
      </p>
    </section>
  )
}
