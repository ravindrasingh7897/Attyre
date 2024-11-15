import React from 'react';
import './css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <h3>Join the waitlist</h3>
          <p style={{color:'#ffff'}}>We’ll send you an email once we officially launch</p>
        </div>
        <div className="subscribe">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="footer-middle">
        <div className="brand-info">
          <img
            src="/white.png"
            //this by default goes to public folder
            alt="App Logo"
            className="w-15 h-9" // Adjust the width and height as needed
          />
          <p style={{color:'#ffff'}}>Reach out to us on info@attyre.app</p>
        </div>
        <div className="links">
          <a href="#explore">Explore</a>
          <a href="#creators">Creators</a>
          <a href="#curations">Curations</a>
          <a href="#fit">Find the Fit</a>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
        </div>
        <div className="app-download">
          <p style={{color:'#ffff'}}>Get the app</p>
          <div style={{ display: 'flex' }}>
            <img src="./Apple.png" alt="App Store" className="app-store-icon " />
            <p style={{color:'#ffff'}}>App Store</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img src="./Google.png" alt="Google Play" className="app-store-icon" />
            <p style={{color:'#ffff'}}>PlayStore</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p style={{color:'#ffff'}}>© 2024 Attyre India Pvt. Ltd. All rights reserved.</p>
        <div className="social-icons" style={{ display: 'flex' }}>
          <img src="./link.png" alt="LinkedIn" />
          <img src="./insta.png" alt="Instagram" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
