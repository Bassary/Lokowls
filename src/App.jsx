import './App.css'
import Navbar from './components/Navbar'
import Showreal from './components/Showreal'
import About from './components/About'
import './components/style/main.scss'
import ClipCourt from './components/ClipCourt'
import Emission from './components/Emission'

function App() {

  return (
    <>
    <header>
      <Navbar />
    </header>
     
    <main className='content'>
      <Showreal />
      <About />
      <ClipCourt />
      <Emission />
    </main>
    </>
    
  )
}

export default App
