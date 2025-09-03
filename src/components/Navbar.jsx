import './style/main.scss'
import './style/Navbar.scss'

function Navbar (){
    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <img className='navbar__left--logo' src="./assets/logo-owl.svg" alt="logo lokowls"></img>
                <h1 className='navbar__left--title'>LOKOWLS</h1>
            </div>
            <div className='navbar__right'>
                <a href="https://www.instagram.com/stephane_d.s.o/?__d=1" target='_blank'><img className='navbar__right--insta' src="assets/logo-insta.svg" alt="logo instagram"></img></a>
            </div>
        </div>
    )
}

export default Navbar;