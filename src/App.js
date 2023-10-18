import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import './styles.css';

// import ActivitiesPage from './components/ActivitiesPage';
// import Utilities from './components/Utilities';
// import Team from './components/Team';
// import Notices from './components/Notices';
// import Reports from './components/Reports';
import Homepage from './components/Homepage';

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
