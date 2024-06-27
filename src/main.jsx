import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import Services from './components/services/services.jsx';
import Error from './components/error/error.jsx';
import About from './components/about/about.jsx';
import Gallery from './components/gallery/gallery.jsx';
import Contacts from './components/contacts/contacts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/servizi",
    element: <Services />,
  },
  {
    path: "/chi-siamo",
    element: <About />
  },
  {
    path: "/galleria",
    element: <Gallery />
  },
  {
    path: "/contatti",
    element: <Contacts />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
