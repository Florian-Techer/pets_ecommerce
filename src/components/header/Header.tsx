import './header.css'

import logo from '../../assets/svg/logo.svg'
import cart from '../../assets/svg/cart.svg'
import user from '../../assets/svg/user.svg'

function Header() {
  return (
    <header>
        <img className='logo' src={logo} alt="logo paw" />
        <ul>
            <a href="#"><li>Nos Produits</li></a>
            <a href="#"><li>Nouveautés</li></a>
        </ul>
        <div className='header_icons_container'>
            <div className='header_icon_container'>
                <img className='icon' src={user} alt="user icon" />
                <p>Mon compte</p>
            </div>
            <div className='header_icon_container'>
                <img className='icon' src={cart} alt="cart icon" />
                <p>Mon panier</p>
            </div>
        </div>
    </header>
  )
}

export default Header