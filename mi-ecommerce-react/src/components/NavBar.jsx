import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/"><h1>SHOP</h1></Link>
        </div>

        <ul className="navbar-menu">
          <li><Link to="/category/remeras">Remeras</Link></li>
          <li><Link to="/category/pantalones">Pantalones</Link></li>
          <li><Link to="/category/zapatillas">Zapatillas</Link></li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;