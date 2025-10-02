import CartWidget from './CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>SHOP</h1>
        </div>

        <ul className="navbar-menu">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar