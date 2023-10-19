import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import "./styles.css";
import Homepage from './components/Homepage';
import ActivitiesPage from "./components/ActivitiesPage";

function App() {
  const Router=createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: "/activities",
      element: <ActivitiesPage />
    }
  ]);
  return (
    <RouterProvider router={Router}/>
  );
}

export default App;
