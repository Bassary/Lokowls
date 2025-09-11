import { useState } from "react";
import './style/Modal.scss'
import { motion } from "framer-motion";

function Modal({ title, btnText, children, className, btnClassName }) {
  const [modal, setModal] = useState(false)


  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")

  } else {
    document.body.classList.remove("active-modal")

  }

  return (
    <>
      <button onClick={toggleModal} className={btnClassName}>
        <span className="btn-text">{btnText}</span>
        <img className="logo-mail" src="assets/logo-mail.svg" alt="logo email" />
      </button>
      {modal && (
        <motion.div className="modal" initial={{ opacity: 0, }} animate={{ opacity: 1 }} >
          <motion.div onClick={toggleModal} className="overlay"></motion.div>
          <motion.div className={className} initial={{ scale: 0.9 }} animate={{ scale: 1 }}  >
            <h2>{title}</h2>
            {children}
            {/* <button className="close-modal btn-info" onClick={toggleModal}> */}
            {/* <img src="assets/cross.svg" alt="button de fermeture" /> */}
            {/* </button> */}
          </motion.div>
        </motion.div>
      )}
    </>

  )
}

export default Modal