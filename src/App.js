import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import "./styles.css";
import ImageCarousel from './components/ImageCarousel';
import logo1 from './components/images/logo.png';
import img1 from './components/images/image1.jpg';
import img2 from './components/images/image2.jpg';

function App() {
  const HomeRouter=createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
    }
  ]);
  return (
    <body>
      <RouterProvider router={HomeRouter}/>
    </body>
  );
}

export default App;
