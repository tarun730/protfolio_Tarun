import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import ErrorPage from './component/generalcomp/Errorpage.jsx';
// const Hello = React.lazy(() => import('./component/section/hello.jsx'));
import Hello from './component/section/hello.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/More-project",
    element: <Hello/>,
    
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
     <RouterProvider router={router} />
   {/* <App/> */}
     

    
  </React.StrictMode>,
)
