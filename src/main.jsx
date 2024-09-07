import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './components/Home.jsx';
import ListedBooks from './components/ListedBooks.jsx';
import PagesRead from './components/PagesRead.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/listedBook',
        element:<ListedBooks/>
      },
      {
        path:'/pagesRed',
        element:<PagesRead/>
      },
     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
