import './App.css';
import "./styles.css";
import ImageCarousel from './components/ImageCarousel';

function App() {
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
          <li><a href="#home">Home</a></li>
          <li><a href="#activities">Activities</a></li>
          <li><a href="#notices">Notices</a></li>
          <li><a href="#reports">Reports</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#utilities">Utilities</a></li>
        </ul>
      </nav>

      <p>Some paragraph space content</p>

      <div className="two-paragraphs">
        <div className="paragraph">
          <img src="#" alt="pic 1"/>
          <p>Paragraph 1 text</p>
        </div>
        <div className="paragraph">
          <img src="#" alt="pic 2" />
          <p>Paragraph 2 text</p>
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
  );
}

export default App;
