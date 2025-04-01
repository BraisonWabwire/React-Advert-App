import { useState } from 'react';
import '../App.css';

function Hero() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
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
  );
}

export default Hero;