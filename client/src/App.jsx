import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Home from './pages/Home.jsx';
import Navbar from './assets/components/Navbar.jsx';
import College from './assets/components/College.jsx';


function App() {


  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/fill-college",
      element:<College/>,
    },
  ]);
  return (
    <RouterProvider router={router}/>

  )
}

export default App
