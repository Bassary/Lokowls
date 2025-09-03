import './App.css'
import Navbar from './components/Navbar'
import Showreal from './components/Showreal'
import About from './components/About'
import './components/style/main.scss'
import ClipCourt from './components/ClipCourt'
import Emission from './components/Emission'
import MotionDesign from './components/MotionDesign'
import Animation from './components/Animation'
import Modal from './components/Modal'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <header>
        <Navbar />
        <Modal title={"Me Contacter"} btnText={"Me Contacter"} children={<Contact />} className={"modal__content"} btnClassName={"btn-modal main-btn"} />
      </header>
      <main className='content'>
        <Showreal />
        <About />
        <ClipCourt />
        <Emission />
        <MotionDesign />
        <Animation />
      </main>
      <Footer />
    </>

  )
}

export default App
