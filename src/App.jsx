import './App.css'
import Navbar from './components/Navbar'
import Showreal from './components/Showreal'
import About from './components/About'
import './components/style/main.scss'

function App() {

  return (
    <>
    <header>
      <Navbar />
    </header>
     
    <main className='content'>
      <Showreal />
      <About />
    </main>
    </>
    
  )
}

export default App
