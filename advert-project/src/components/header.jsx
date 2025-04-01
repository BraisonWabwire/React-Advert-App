import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">AdvertApp</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ads">Ads</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;