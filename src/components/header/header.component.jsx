import { Link } from 'react-router-dom'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => (
  <header className="header">
    <Link className="header__logo-container" to="/">
      <Logo className="header__logo" />
    </Link>
    <div className="header__options">
      <Link className="header__option" to='/shop'>Shop</Link>
      <Link className="header__option" to='/shop'>Contact</Link>
      {/* <Link className="header__option" to='/shop'></Link> */}
    </div>
  </header>
)

export default Header
