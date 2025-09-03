import { useState } from "react";
import './style/Modal.scss'

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
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className={className}>
            <h2>{title}</h2>
            {children}
            {/* <button className="close-modal btn-info" onClick={toggleModal}> */}
            {/* <img src="assets/cross.svg" alt="button de fermeture" /> */}
            {/* </button> */}
          </div>
        </div>
      )}
    </>

  )
}

export default Modal