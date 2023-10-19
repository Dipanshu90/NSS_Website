import React from 'react'
// import { BrowserRouter as  Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import "../styles.css";
import img1 from './images/image1.jpg';
import img2 from './images/image2.jpg';

export default function Homepage() {
  return (
    <div className="homepage">
        <div className="top-header">
          <img src="logo1.png" alt="Logo 1" className="logo" />
          <h1>Your Heading</h1>
          <img src="logo2.png" alt="Logo 2" className="logo" />
        </div>

        <div className="rolling-photo-frame">
          <ImageCarousel />
        </div>

        <nav className="navbar">
          <ul>
            <li>Home</li> 
            {/* <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/notices">Notices</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/utilities">Utilities</Link></li> */}
          </ul>
        </nav>

        <p>Some paragraph space content</p>

        <div className="two-paragraphs">
          <div className="paragraph">
            <img src={img1} alt="pic 1" />
            <p>lorem100
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
            </p>
          </div>
          <div className="paragraph">
            <img src={img2} alt="pic 2" />
            <p>Paragraphlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididlorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor incidid 2 text
             </p>
          </div>
        </div>

        <div className="recent-activities">
          {/* Code for recent activities with rolling photos */}
        </div>
        <footer>
          <h2>Contact Details</h2>
          {/* Add your contact details here */}
        </footer>
      </div>
  )
}