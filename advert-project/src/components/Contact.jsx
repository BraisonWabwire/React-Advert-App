import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import '../App.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">We’re here to assist you. Get in touch today!</p>

      <div className="contact-container">
        {/* Contact Info Section */}
        <div className="contact-info">
          <h2>Reach Out</h2>
          <ul>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>Email: <a href="mailto:support@advertapp.com">support@advertapp.com</a></span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>Phone: +1 (555) 123-4567</span>
            </li>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Advert Lane, Promotion City, AD 45678</span>
            </li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your Name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="Your Email" />
            </label>
            <label>
              <span>Message</span>
              <textarea placeholder="Your Message" rows="5"></textarea>
            </label>
            <button type="submit">
              <FaPaperPlane className="button-icon" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;