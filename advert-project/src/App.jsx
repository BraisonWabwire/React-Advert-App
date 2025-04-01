import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Advert from './components/Advert';
import Contact from './components/Contact';
import './App.css';

function HomePage() {
  const sampleAdvert = {
    title: "Spring Sale!",
    description: "Get 20% off all items this week only.",
  };

  return (
    <>
      <Hero />
      <Advert title={sampleAdvert.title} description={sampleAdvert.description} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="homepage">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          {/* Optional: Add a placeholder for /ads */}
          <Route path="/ads" element={<div><h1>Ads Page (Coming Soon)</h1></div>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;