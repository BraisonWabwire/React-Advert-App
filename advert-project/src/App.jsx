import { useState } from 'react';
import './App.css';

function HomePage() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="logo">AdvertApp</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#ads">Ads</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to AdvertApp</h1>
        <p>Discover the best deals and promotions tailored just for you.</p>
        <button
          className="cta-button"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          {isButtonHovered ? "Let’s Go!" : "Explore Now"}
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 AdvertApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App; 