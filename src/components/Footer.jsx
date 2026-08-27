import './style/main.scss'
import './style/Footer.scss'

function Footer() {
    return (
        <footer className='div-footer'>
            <img className='bulle-5' src="assets/bulle-5.svg" alt="bulle dialogue" />
            <img className='bulle-5-v2' src='assets/bulle-5-v2.svg' alt='bulle dialogue' />
            <div className='container-left'>
                <div className='container-left__contact-insta'>
                    <div>
                        <h3>Contact :</h3>
                        <a href='mailto:lokowls.contact@gmail.com'>lokowls.contact@gmail.com</a>
                    </div>
                    <div>
                        <h3>Instagram :</h3>
                        <a href='https://www.instagram.com/lokowls' target='_blank'>@stephane_d.s.o</a>
                    </div>
                </div>
                <span>©LOKOWLS - 2026</span>
            </div>

        </footer>
    )
}

export default Footer