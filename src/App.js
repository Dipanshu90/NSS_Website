import React from 'react';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import './App.css';
import "./styles.css";
import Homepage from './components/Homepage';
import ActivitiesPage from "./components/ActivitiesPage";
import Notices from './components/Notices';
import Reports from './components/Reports';
import Team from './components/Team';
import Utilities from './components/Utilities';


function App() {
  const Router=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Homepage />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="notices" element={<Notices />} />
        <Route path="reports" element={<Reports />} />
        <Route path="team" element={<Team />} />
        <Route path="utilities" element={<Utilities />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={Router}/>
  );
}

export default App;
