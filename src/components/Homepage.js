import React from 'react'
import { NavLink } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import "../styles.css";
import img1 from './images/image1.jpg';
import img2 from './images/image2.jpg';
import logo1 from './images/IIT_Guwahati_Logo.svg.webp';
import logo2 from "./images/NSS_IITG_logo.jpeg";

export default function Homepage() {
  return (
    <div className="homepage">
        <div className="top-header">
          <img src={logo2} alt="Logo 1" className="logo" />
          <h1>Your Heading</h1>
          <img src={logo1} alt="Logo 2" className="logo" />
        </div>

        <div className="rolling-photo-frame">
          <ImageCarousel />
        </div>

        <nav className="navbar">
          <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/activities" >Activities</NavLink></li>
            <li><NavLink to="/notices" >Notices</NavLink></li>
            <li><NavLink to="/reports" >Reports</NavLink></li>
            <li><NavLink to="/team" >Team</NavLink></li>
            <li><NavLink to="/utilities" >Utilities</NavLink></li>
          </ul>
        </nav>

        <p>Paragraphlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididlorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor incidid 2 text aragraphlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididlorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor incidid 2 text</p>

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