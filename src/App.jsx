import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Pages/Dashboard/Dashboard';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import TransactionPage from './Pages/Transaction/TransactionPage';
import Support from './Pages/Support/support';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Dashboard/>,
  },
  {
    path: "/transaction",
    element:  <TransactionPage/>,
  },
  {
    path: "/support",
    element:  <Support/>,
  }
]);



function App() {
  return(
    <>
    <RouterProvider router={router} />
   
    </>
  )
}

export default App
