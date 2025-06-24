import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Home } from './pages/Home';
import { CV } from './pages/CV';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Salesforce } from './pages/Salesforce';

/**
 * Defines the routes for the application using `createBrowserRouter`.
 * Routes for the portfolio website with CV, Portfolio, Contact and Salesforce sections.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'cv',
        element: <CV />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'salesforce',
        element: <Salesforce />,
      },
    ],
  },
], {
  basename: import.meta.env.PROD ? '/dany-website-portfolio' : '/'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);