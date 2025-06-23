import './style/main.scss'
import './style/Navbar.scss'

function Navbar (){
    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <img className='navbar__left--logo' src="../src/assets/logo-owl.svg" alt="logo lokowls"></img>
                <h1 className='navbar__left--title'>LOKOWLS</h1>
            </div>
            <div className='navbar__right'>
                <img className='navbar__right--insta' src="../src/assets/logo-insta.svg" alt="logo instagram"></img>
                <button className='navbar__right--btn'>Me Contacter</button>
            </div>
        </div>
    )
}

export default Navbar;